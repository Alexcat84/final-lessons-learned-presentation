import React, { useCallback, useState, useEffect, useRef } from 'react';
import ReactFlow, {
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  useReactFlow,
  ReactFlowProvider,
  Controls
} from 'reactflow';
import 'reactflow/dist/style.css';

// Suppress ResizeObserver errors
const originalConsoleError = window.console.error;
window.console.error = (...args) => {
  if (args[0] && typeof args[0] === 'string' && args[0].includes('ResizeObserver')) {
    // Ignore ResizeObserver errors
    return;
  }
  originalConsoleError.apply(console, args);
};

// Estilos globales para animaciones
const fadeInAnimation = `
  @keyframes fadeIn {
    from { opacity: 0; transform: scale(0.9); }
    to { opacity: 1; transform: scale(1); }
  }
  .animate-fade-in {
    animation: fadeIn 0.5s ease-out forwards;
  }
  
  /* Custom background animations */
  @keyframes gradientFlow {
    0% { background-position: 0% 50% }
    50% { background-position: 100% 50% }
    100% { background-position: 0% 50% }
  }
  
  /* Pulse animation for icons */
  @keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.05); }
    100% { transform: scale(1); }
  }
  
  .animate-pulse-slow {
    animation: pulse 3s ease-in-out infinite;
  }
  
  /* Node transition animations */
  @keyframes scaleIn {
    0% { transform: scale(0.8); opacity: 0; }
    100% { transform: scale(1); opacity: 1; }
  }
  
  @keyframes scaleOut {
    0% { transform: scale(1); opacity: 1; }
    100% { transform: scale(0.8); opacity: 0; }
  }
  
  @keyframes slideInUp {
    0% { transform: translateY(50px); opacity: 0; }
    100% { transform: translateY(0); opacity: 1; }
  }
  
  @keyframes glowPulse {
    0% { box-shadow: 0 0 5px 0px rgba(59, 130, 246, 0.5); }
    50% { box-shadow: 0 0 20px 5px rgba(59, 130, 246, 0.7); }
    100% { box-shadow: 0 0 5px 0px rgba(59, 130, 246, 0.5); }
  }
  
  .node-entering {
    animation: scaleIn 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
  }
  
  .node-exiting {
    animation: scaleOut 0.5s ease-in forwards;
  }
  
  .slide-in-up {
    animation: slideInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  }
  
  .glow-pulse {
    animation: glowPulse 3s infinite;
  }
`;

// Lessons Learned Nodes
import LessonsTitleNode from './nodes/LessonsTitleNode';
import ProjectOverviewNode from './nodes/ProjectOverviewNode';
import AccomplishmentsNode from './nodes/AccomplishmentsNode';
import MarketingImpactNode from './nodes/MarketingImpactNode';
import DonationsEvolutionNode from './nodes/DonationsEvolutionNode';
import ProjectExecutionNode from './nodes/ProjectExecutionNode';
import LessonsLearnedNode from './nodes/LessonsLearnedNode';
import ThankYouNode from './nodes/ThankYouNode';

// Definición del componente NavigationControls
function NavigationControls({ onNext, onPrevious, currentNodeIndex, totalNodes }) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className={`fixed bottom-6 right-6 z-50 flex gap-3 transition-all duration-300 ${isHovered ? 'opacity-100 transform scale-105' : 'opacity-60'}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {currentNodeIndex > 0 && (
        <button
          onClick={onPrevious}
          className="bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white font-bold py-2 px-4 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 border border-blue-400/20"
        >
          ← Previous
        </button>
      )}
      {currentNodeIndex < totalNodes - 1 && (
        <button
          onClick={onNext}
          className="bg-gradient-to-r from-indigo-600 to-blue-700 hover:from-indigo-700 hover:to-blue-800 text-white font-bold py-2 px-4 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 border border-blue-400/20"
        >
          Next →
        </button>
      )}
    </div>
  );
}

// Definición del componente ZoomControl
function ZoomControl({ zoomLevel, onChange, disabled }) {
  return (
    <div className="hidden">
      <input
        type="range"
        min="0.5"
        max="2.5"
        step="0.1"
        value={zoomLevel}
        onChange={e => onChange(parseFloat(e.target.value))}
        disabled={disabled}
      />
    </div>
  );
}

// Registramos los tipos de nodos personalizados
const nodeTypes = {
  // Lessons Learned node types
  lessonsTitleNode: LessonsTitleNode,
  projectOverviewNode: ProjectOverviewNode,
  accomplishmentsNode: AccomplishmentsNode,
  marketingImpactNode: MarketingImpactNode,
  donationsEvolutionNode: DonationsEvolutionNode,
  projectExecutionNode: ProjectExecutionNode,
  lessonsLearnedNode: LessonsLearnedNode,
  thankYou: ThankYouNode
};

// Navigation sequences
const navigationSequence = [
  'lessonsTitle',
  'projectOverview',
  'accomplishments',
  'marketingImpact',
  'donationsEvolution',
  'projectExecution',
  'lessonsLearned',
  'thanksSlide'
];

// Definimos las posiciones fijas en zigzag
const fixedPositions = {  
  // Lessons Learned positions
  'lessonsTitle': { x: 0, y: 0 },
  'projectOverview': { x: -1000, y: 700 },
  'accomplishments': { x: 1000, y: 1400 },
  'marketingImpact': { x: -1000, y: 2100 },
  'donationsEvolution': { x: 1000, y: 2800 },
  'projectExecution': { x: -1000, y: 3500 },
  'lessonsLearned': { x: 0, y: 4200 },
  'thanksSlide': { x: 0, y: 5000 }
};

// Guardar las posiciones fijas en localStorage
localStorage.setItem('nodePositions', JSON.stringify(fixedPositions));

// Lessons Learned nodes
const lessonsNodes = [
  {
    id: 'lessonsTitle',
    type: 'lessonsTitleNode',
    position: fixedPositions['lessonsTitle'],
    data: {
      title: "Sing for Wishes: Karaoke Fundraiser for Make-A-Wish Canada",
      subtitle: "Team Symphony - Lessons Learned Presentation",
      courseCode: "25W_MGT4209_300 Applied Project Management",
      professor: "Professor: David Salomon",
      teamMembers: [
        'Team Symphony'
      ],
      date: "April 9, 2025",
      speakerNotes: "Welcome to our Lessons Learned presentation for the Sing for Wishes Karaoke fundraiser project benefiting Make-A-Wish Canada. We'll share our journey, accomplishments, challenges, and key insights gained through this project."
    }
  },
  {
    id: 'projectOverview',
    type: 'projectOverviewNode',
    position: fixedPositions['projectOverview'],
    data: {
      title: "Project Overview",
      overviewPoints: [
        { label: 'Campaign goal', value: 'Raise funds for Make-A-Wish Canada through a karaoke event' },
        { label: 'Initial fundraising target', value: '$1,000' },
        { label: 'Event location', value: 'Sonny Bar & Grill, Ottawa' },
        { label: 'Original event date', value: 'March 28, 2025' },
        { label: 'Rescheduled date', value: 'April 1, 2025 (due to severe weather)' }
      ],
      speakerNotes: "Our project centered around organizing a karaoke fundraising event for Make-A-Wish Canada. We initially set a fundraising target of $1,000 and ultimately exceeded it by raising $1,213.20. The event was originally scheduled for March 28 at Sonny Bar & Grill in Ottawa, but due to severe weather conditions, we had to implement our contingency plan and reschedule for April 1."
    },
    hidden: true
  },
  {
    id: 'accomplishments',
    type: 'accomplishmentsNode',
    position: fixedPositions['accomplishments'],
    data: {
      title: "Project Accomplishments",
      accomplishments: [
        'Exceeded fundraising goal by over 20%',
        'Successfully implemented bilingual (English/French) marketing videos',
        'Developed and executed a 3-week social media campaign',
        'Arranged donation collection points at multiple locations:',
        ['Connor & Kennedy\'s No Frills ($690.85)', 'Sonny Bar & Grill ($174.00)', 'Online platform ($465.00)'],
        'Successfully rescheduled event during ice storm emergency (Risk Assessment)'
      ],
      speakerNotes: "We're proud of several key accomplishments in this project. We exceeded our fundraising goal by over 20%, created bilingual marketing videos to reach a broader audience, executed an effective social media campaign, established multiple donation collection points, and successfully navigated through an unexpected weather emergency by implementing our risk response plan."
    },
    hidden: true
  },
  {
    id: 'marketingImpact',
    type: 'marketingImpactNode',
    position: fixedPositions['marketingImpact'],
    data: {
      title: "Marketing Campaign Impact",
      speakerNotes: "Our marketing campaign was a critical success factor. We implemented a multi-platform strategy with bilingual content that significantly increased community engagement. The 3-week campaign generated a 421% increase in engagement across all platforms, demonstrating the effectiveness of our approach."
    },
    hidden: true
  },
  {
    id: 'donationsEvolution',
    type: 'donationsEvolutionNode',
    position: fixedPositions['donationsEvolution'],
    data: {
      title: "Donations Evolution",
      speakerNotes: "This slide illustrates how donations evolved throughout our campaign. Connor & Kennedy's No Frills was our largest collection point, contributing nearly 43% of total funds. Our online platform generated about 29%, while the event venue provided almost 11%. This diversified approach was key to exceeding our goal and reaching $1,213.20."
    },
    hidden: true
  },
  {
    id: 'projectExecution',
    type: 'projectExecutionNode',
    position: fixedPositions['projectExecution'],
    data: {
      title: "Project Execution",
      description: "Fundraising Event and Contingency Plan Execution",
      speakerNotes: "These images and video capture key moments of our karaoke fundraising event. Despite the weather challenges that forced us to reschedule, our contingency planning ensured the event was ultimately a success. The venue's cooperation and our team's flexibility were essential to overcoming these unexpected obstacles."
    },
    hidden: true
  },
  {
    id: 'lessonsLearned',
    type: 'lessonsLearnedNode',
    position: fixedPositions['lessonsLearned'],
    data: {
      title: "Personal Lessons Learned",
      lessons: [
        { 
          title: 'Weather Risk Planning', 
          description: 'Winter events require specific contingency plans',
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
            </svg>
          )
        },
        { 
          title: 'Multi-Channel Marketing', 
          description: 'Combining online and in-person approaches yields best results',
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
            </svg>
          )
        },
        { 
          title: 'Community Support', 
          description: 'Ottawa residents showed exceptional generosity for noble causes',
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          )
        },
        { 
          title: 'Stakeholder Coordination', 
          description: 'Effective management of all parties was crucial for success',
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          )
        },
        { 
          title: 'Decisive Action', 
          description: 'Quick response to opportunities directly led to exceeding our goals',
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          )
        }
      ],
      speakerNotes: "This project taught us five crucial lessons: First, winter events need specific contingency plans to address weather risks. Second, multi-channel marketing combining online and offline approaches delivers the best results. Third, we were impressed by the exceptional generosity of Ottawa residents for charitable causes. Fourth, effective stakeholder coordination was vital for navigating challenges. Finally, decisive action in response to both obstacles and opportunities directly contributed to exceeding our fundraising goals."
    },
    hidden: true
  },
  {
    id: 'thanksSlide',
    type: 'thankYou',
    position: fixedPositions['thanksSlide'],
    data: { 
      title: "Thank You",
      subtitle: "For your attention and feedback",
      teamName: "Team Symphony"
    },
    hidden: true
  }
];

// Set initial nodes
const initialNodes = lessonsNodes;

// Create edges for Lessons Learned presentation
const lessonsEdges = [
  { id: 'e1-2', source: 'lessonsTitle', target: 'projectOverview', animated: true },
  { id: 'e2-3', source: 'projectOverview', target: 'accomplishments', animated: true },
  { id: 'e3-4', source: 'accomplishments', target: 'marketingImpact', animated: true },
  { id: 'e4-5', source: 'marketingImpact', target: 'donationsEvolution', animated: true },
  { id: 'e5-6', source: 'donationsEvolution', target: 'projectExecution', animated: true },
  { id: 'e6-7', source: 'projectExecution', target: 'lessonsLearned', animated: true },
  { id: 'e7-8', source: 'lessonsLearned', target: 'thanksSlide', animated: true }
];

// Set initial edges
const initialEdges = lessonsEdges;

function Flow() {
  // Estado para los nodos y aristas
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  
  // Estado para el nodo actual y zoom
  const [currentNodeIndex, setCurrentNodeIndex] = useState(0);
  const [zoomLevel, setZoomLevel] = useState(0.18);
  
  // Referencia para el componente ReactFlow
  const reactFlowInstance = useReactFlow();
  const reactFlowWrapper = useRef(null);
  
  // Función para centrar nodos con mejor ajuste a la pantalla
  const centerNode = useCallback((nodeId) => {
    if (reactFlowInstance) {
      try {
        // Usar fitView con padding más pequeño para llenar mejor la pantalla
        reactFlowInstance.fitView({
          nodes: [{ id: nodeId }],
          padding: 0.05, // Un poco más de margen para evitar que toque los bordes
          duration: 800,
          minZoom: 0, // Permitir zoom más pequeño si es necesario
          maxZoom: 2
        });
      } catch (error) {
        console.warn('Error al centrar el nodo:', error);
      }
    }
  }, [reactFlowInstance]);
  
  // Navegar al siguiente nodo
  const navigateToNextNode = useCallback(() => {
    if (currentNodeIndex < navigationSequence.length - 1) {
      const nextIndex = currentNodeIndex + 1;
      setCurrentNodeIndex(nextIndex);
      
      // Revelar el siguiente nodo (sin animación de salida)
      setNodes((nds) =>
        nds.map((node) => {
          if (node.id === navigationSequence[nextIndex]) {
            return {
              ...node,
              hidden: false
            };
          }
          return node;
        })
      );
      
      // Centrar en el siguiente nodo
      setTimeout(() => {
        const nextNodeId = navigationSequence[nextIndex];
        centerNode(nextNodeId);
      }, 100);
    }
  }, [currentNodeIndex, navigationSequence, setNodes, centerNode]);
  
  // Navegar al nodo anterior
  const navigateToPreviousNode = useCallback(() => {
    if (currentNodeIndex > 0) {
      const prevIndex = currentNodeIndex - 1;
      setCurrentNodeIndex(prevIndex);
      
      // Navegar al nodo anterior
      const prevNodeId = navigationSequence[prevIndex];
      centerNode(prevNodeId);
    }
  }, [currentNodeIndex, navigationSequence, centerNode]);
  
  // Manejar conexiones entre nodos
  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );
  
  // Inicializar la presentación
  useEffect(() => {
    // Ocultar todos los nodos excepto el primero
    setNodes((nds) =>
      nds.map((node) => {
        if (node.id !== navigationSequence[0]) {
          node.hidden = true;
        } else {
          node.hidden = false;
        }
        return node;
      })
    );
    
    // Centrar en el primer nodo
    if (navigationSequence.length > 0) {
      const firstNodeId = navigationSequence[0];
      
      // Esperar a que reactFlowInstance esté disponible
      const timer = setTimeout(() => {
        if (reactFlowInstance) {
          try {
            // Usar fitView con padding más pequeño para el nodo inicial
            reactFlowInstance.fitView({
              nodes: [{ id: firstNodeId }],
              padding: 0.02, // Reducido para un zoom más cerrado
              duration: 0 // Sin animación en la carga inicial
            });
          } catch (error) {
            console.warn('Error al centrar el nodo inicial:', error);
          }
        }
      }, 500);
      
      return () => {
        clearTimeout(timer);
      };
    }
  }, [reactFlowInstance, navigationSequence, setNodes]);
  
  // Manejar eventos de teclado
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
        navigateToNextNode();
      } else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
        navigateToPreviousNode();
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    
    // Cleanup
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [navigateToNextNode, navigateToPreviousNode]);
  
  // Ajustar el zoom basado en el tamaño de la ventana
  useEffect(() => {
    if (!reactFlowInstance) {
      return; // Salir si la instancia aún no está disponible
    }
    
    const calculateOptimalZoom = () => {
      // Obtener dimensiones de la ventana
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      
      // Las diapositivas pueden tener diferentes tamaños, usamos el máximo para asegurarnos
      const slideWidth = 650;
      const slideHeight = 500; // Aumentado para considerar altura máxima de los nodos
      
      // Calcular zoom para ajustar altura y ancho con margen extra
      const zoomForHeight = (windowHeight - 80) / slideHeight; // Más margen vertical
      const zoomForWidth = (windowWidth - 60) / slideWidth; // Margen horizontal
      
      // Usar el zoom más restrictivo (el menor) para que se vea completo
      let newZoom = Math.min(zoomForHeight, zoomForWidth);
      
      // Limitar el zoom a un rango razonable
      newZoom = Math.max(0.1, Math.min(newZoom, 1.0));
      
      return newZoom;
    };
    
    // Aplicar zoom calculado
    const newZoom = calculateOptimalZoom();
    setZoomLevel(newZoom);
    
    // También ajustar cuando cambie el tamaño de la ventana
    const handleResize = () => {
      const updatedZoom = calculateOptimalZoom();
      setZoomLevel(updatedZoom);
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [reactFlowInstance]);
  
  // Aplicar cambios de zoom al ReactFlow
  const handleZoomChange = (newZoomLevel) => {
    setZoomLevel(newZoomLevel);
    if (reactFlowInstance) {
      reactFlowInstance.setZoom(newZoomLevel);
    }
  };
  
  return (
    <div className="w-full h-full" ref={reactFlowWrapper}>
      <style jsx global>{fadeInAnimation}</style>
      
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        proOptions={{ hideAttribution: true }}
        minZoom={0.1}
        maxZoom={2}
        defaultZoom={zoomLevel}
        nodesDraggable={false}
        nodesConnectable={false}
        elementsSelectable={false}
        panOnScroll={true}
        panOnDrag={true}
        zoomOnDoubleClick={false}
        onlyRenderVisibleElements={true} // Mejorar rendimiento
        fitView
      >
        <Controls position="top-right" showZoom={false} showInteractive={false} />
        <Background color="#aaa" variant="dots" gap={20} size={1} />
      </ReactFlow>
      
      <NavigationControls
        onNext={navigateToNextNode}
        onPrevious={navigateToPreviousNode}
        currentNodeIndex={currentNodeIndex}
        totalNodes={navigationSequence.length}
      />
      
      <ZoomControl
        zoomLevel={zoomLevel}
        onChange={handleZoomChange}
        disabled={false}
      />
    </div>
  );
}

function App() {
  return (
    <div className="fixed inset-0 z-0">
      <ReactFlowProvider>
        <Flow />
      </ReactFlowProvider>
    </div>
  );
}

export default App;
