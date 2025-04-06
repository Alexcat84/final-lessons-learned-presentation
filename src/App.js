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
`;

// Smart Agriculture IoT Procurement nodes
import SmartAgriTitleNode from './nodes/SmartAgriTitleNode';
import SmartAgriOverviewNode from './nodes/SmartAgriOverviewNode';
import SmartAgriEvaluationNode from './nodes/SmartAgriEvaluationNode';
import SmartAgriAcceptanceNode from './nodes/SmartAgriAcceptanceNode';
import SmartAgriContractNode from './nodes/SmartAgriContractNode';
import SmartAgriSolicitationNode from './nodes/SmartAgriSolicitationNode';
import SmartAgriRolesNode from './nodes/SmartAgriRolesNode';
import SmartAgriTimelineNode from './nodes/SmartAgriTimelineNode';
import SmartAgriConclusionNode from './nodes/SmartAgriConclusionNode';

// Definición del componente NavigationControls
function NavigationControls({ onNext, onPrevious, currentNodeIndex, totalNodes }) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className={`fixed bottom-4 right-4 z-50 flex gap-2 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-30'}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {currentNodeIndex > 0 && (
        <button
          onClick={onPrevious}
          className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-1 px-3 rounded shadow-lg transition-colors text-xs"
        >
          ← Previous
        </button>
      )}
      {currentNodeIndex < totalNodes - 1 && (
        <button
          onClick={onNext}
          className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-1 px-3 rounded shadow-lg transition-colors text-xs"
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
  // Smart Agriculture IoT Procurement node types
  smartAgriTitleNode: SmartAgriTitleNode,
  smartAgriOverviewNode: SmartAgriOverviewNode,
  smartAgriEvaluationNode: SmartAgriEvaluationNode,
  smartAgriAcceptanceNode: SmartAgriAcceptanceNode,
  smartAgriContractNode: SmartAgriContractNode,
  smartAgriSolicitationNode: SmartAgriSolicitationNode,
  smartAgriRolesNode: SmartAgriRolesNode,
  smartAgriTimelineNode: SmartAgriTimelineNode,
  smartAgriConclusionNode: SmartAgriConclusionNode
};

// Choose the active presentation
const activePresentationKey = 'smartAgri';

// Navigation sequences
const navigationSequences = {
  smartAgri: [
    'smartAgriTitle',
    'smartAgriOverview',
    'smartAgriEvaluation',
    'smartAgriAcceptance',
    'smartAgriContract',
    'smartAgriSolicitation',
    'smartAgriRoles',
    'smartAgriTimeline',
    'smartAgriConclusion'
  ]
};

// Define the active navigation sequence
const navigationSequence = navigationSequences[activePresentationKey];

// Definimos las posiciones fijas en zigzag
const fixedPositions = {  
  // Smart Agriculture positions
  'smartAgriTitle': { x: 0, y: 0 },
  'smartAgriOverview': { x: -1000, y: 700 },
  'smartAgriEvaluation': { x: 1000, y: 1400 },
  'smartAgriAcceptance': { x: -1000, y: 2100 },
  'smartAgriContract': { x: 1000, y: 2800 },
  'smartAgriSolicitation': { x: -1000, y: 3500 },
  'smartAgriRoles': { x: 1000, y: 4200 },
  'smartAgriTimeline': { x: -1000, y: 4900 },
  'smartAgriConclusion': { x: 1000, y: 5600 }
};

// Guardar las posiciones fijas en localStorage
localStorage.setItem('nodePositions', JSON.stringify(fixedPositions));

// Smart Agriculture nodes
const smartAgriNodes = [
  {
    id: 'smartAgriTitle',
    type: 'smartAgriTitleNode',
    position: fixedPositions['smartAgriTitle'],
    data: {
      title: "Smart Agriculture Technology (IoT) Procurement Plan",
      teamMembers: [
        'Alexis García',
        'Joseph Alabi',
        'Christabel Ebue',
        'Oluwatomiwa Osisanya',
        'Eseoghene Atumah'
      ],
      date: "April 8, 2025",
      speakerNotes: "Good morning/afternoon. We're presenting our procurement plan for Smart Agriculture IoT hardware components. Our plan outlines a comprehensive framework to acquire high-quality IoT sensors, controllers, and communication modules that will support data-driven agricultural operations. We'll cover our evaluation method, acceptance system, contractual requirements, and solicitation documents."
    }
  },
  {
    id: 'smartAgriOverview',
    type: 'smartAgriOverviewNode',
    position: fixedPositions['smartAgriOverview'],
    data: {
      purpose: "Acquire IoT hardware components for smart agriculture implementation",
      scope: "Environmental sensors, communication modules, and control units",
      objectives: [
        "Ensure component quality and durability in agricultural environments",
        "Balance technical excellence with cost considerations",
        "Establish transparent supplier selection process",
        "Implement robust acceptance procedures"
      ],
      speakerNotes: "Our procurement plan addresses the specific challenges of acquiring IoT technology for agricultural settings. These components must withstand varying weather conditions, provide long-term reliability, and integrate seamlessly with existing farm management systems. Our structured approach ensures we select the right supplier while managing costs effectively and maintaining transparency throughout the process."
    },
    hidden: true
  },
  {
    id: 'smartAgriEvaluation',
    type: 'smartAgriEvaluationNode',
    position: fixedPositions['smartAgriEvaluation'],
    data: {
      criteria: [
        { name: "Technical Compliance", weight: 25 },
        { name: "Quality and Reliability", weight: 20 },
        { name: "Cost", weight: 20 },
        { name: "Delivery Timeline", weight: 15 },
        { name: "Warranty and Support", weight: 10 },
        { name: "Vendor Experience", weight: 10 }
      ],
      speakerNotes: "We've implemented a weighted evaluation system that balances technical excellence with cost-effectiveness. Technical compliance and quality receive the highest weightings because these components must perform reliably in challenging agricultural environments. Our evaluation process includes an initial compliance check followed by detailed assessment against these criteria. Only suppliers scoring at least 7.0 out of 10 will be considered for selection, ensuring we maintain high standards."
    },
    hidden: true
  },
  {
    id: 'smartAgriAcceptance',
    type: 'smartAgriAcceptanceNode',
    position: fixedPositions['smartAgriAcceptance'],
    data: {
      steps: [
        "Pre-shipment inspection",
        "Component receipt and initial inspection",
        "Technical acceptance testing",
        "Certification of acceptance",
        "Payment processing",
        "Procurement closure"
      ],
      paymentMilestones: [
        { name: "After shipment approval", percentage: 20 },
        { name: "Upon acceptance", percentage: 70 },
        { name: "Retention", percentage: 10 }
      ],
      speakerNotes: "Our acceptance system includes multiple quality checkpoints to mitigate risk. We begin with pre-shipment inspection at the supplier's facility, followed by rigorous testing after delivery. Payment is tied to successful completion of key milestones, with 20% paid after shipment approval, 70% upon final acceptance, and 10% retained until project closure. This structure incentivizes quality delivery while providing financial protection."
    },
    hidden: true
  },
  {
    id: 'smartAgriContract',
    type: 'smartAgriContractNode',
    position: fixedPositions['smartAgriContract'],
    data: {
      contractTerms: [
        "24-month warranty with specified response times",
        "Comprehensive service agreements for technical support",
        "Clear supplier responsibilities for quality and compliance",
        "Multi-tiered dispute resolution process"
      ],
      speakerNotes: "We've selected a Fixed-Price Incentive Fee contract structure that transfers cost risk to the supplier while motivating high-quality delivery through performance incentives. Our contract includes comprehensive warranty provisions, service agreements with defined SLAs, and detailed supplier responsibilities. The dispute resolution process includes project-level discussion, escalation paths, and formal mediation before arbitration, ensuring issues can be resolved efficiently."
    },
    hidden: true
  },
  {
    id: 'smartAgriSolicitation',
    type: 'smartAgriSolicitationNode',
    position: fixedPositions['smartAgriSolicitation'],
    data: {
      solicitationDocs: [
        "Request for Information (RFI) for market research",
        "Comprehensive Request for Proposal (RFP)",
        "Detailed Statement of Work (SOW)",
        "Draft contract and evaluation criteria"
      ],
      biddingDocs: [
        "Technical proposal with compliance matrix",
        "Commercial proposal with detailed cost breakdown",
        "Qualifications and references",
        "Quality assurance and implementation plans"
      ],
      speakerNotes: "Our solicitation process begins with an RFI to understand available technologies, followed by a comprehensive RFP that clearly communicates our requirements. The SOW details technical specifications for environmental resilience, power efficiency, and communication protocols. We require suppliers to submit detailed technical and commercial proposals, along with evidence of past performance in agricultural IoT implementations. This documentation enables thorough evaluation of supplier capabilities."
    },
    hidden: true
  },
  {
    id: 'smartAgriRoles',
    type: 'smartAgriRolesNode',
    position: fixedPositions['smartAgriRoles'],
    data: {
      roles: [
        { title: "Project Manager", responsibility: "Overall accountability" },
        { title: "Procurement Manager", responsibility: "Process execution" },
        { title: "Technical Lead", responsibility: "Technical specifications and evaluation" },
        { title: "Quality Assurance Manager", responsibility: "Inspection and testing" },
        { title: "Finance Manager", responsibility: "Cost analysis and payment processing" },
        { title: "Legal Counsel", responsibility: "Contract development and review" }
      ],
      speakerNotes: "Successful implementation of our procurement plan depends on clear roles and responsibilities. The RASCI matrices in our plan define who is responsible, accountable, supportive, consulted, and informed for each activity. This clarity ensures proper coordination and accountability across the procurement lifecycle, from initial requirements definition through final acceptance and closure."
    },
    hidden: true
  },
  {
    id: 'smartAgriTimeline',
    type: 'smartAgriTimelineNode',
    position: fixedPositions['smartAgriTimeline'],
    data: {
      milestones: [
        { name: "Requirements Approved", week: 3 },
        { name: "Procurement Strategy Finalized", week: 5 },
        { name: "RFP/RFQ Package Developed", week: 7 },
        { name: "RFP/RFQ Issued", week: 8 },
        { name: "Supplier Proposals Received", week: 12 },
        { name: "Supplier Selected", week: 15 },
        { name: "Contract Signed", week: 19 },
        { name: "Initial Order Placed", week: 20 },
        { name: "First Shipment Received", week: 24 },
        { name: "Final Delivery Completed", week: 30 },
        { name: "Final Acceptance Completed", week: 32 },
        { name: "Final Payment Processed", week: 34 },
        { name: "Procurement Project Closed", week: 36 }
      ],
      speakerNotes: "Our procurement plan follows a 36-week timeline with 13 strategic milestones serving as checkpoints to monitor progress. These milestones coincide with completion of major deliverables and transitions between procurement phases. The visualization illustrates how procurement phases overlap and relate to each other."
    },
    hidden: true
  },
  {
    id: 'smartAgriConclusion',
    type: 'smartAgriConclusionNode',
    position: fixedPositions['smartAgriConclusion'],
    data: {
      strengths: [
        "Balanced evaluation focusing on quality and cost",
        "Robust acceptance procedures minimizing risk",
        "Flexible yet protective contractual framework",
        "Transparent solicitation process"
      ],
      teamMembers: [
        'Alexis García',
        'Joseph Alabi',
        'Christabel Ebue',
        'Oluwatomiwa Osisanya',
        'Eseoghene Atumah'
      ],
      speakerNotes: "In conclusion, our procurement plan establishes a structured approach for acquiring IoT hardware components that meet the unique requirements of agricultural environments. By implementing this plan, the organization will secure high-quality components while managing costs effectively, ultimately supporting successful implementation of smart agriculture technology. We're now happy to answer any questions you may have about our approach."
    },
    hidden: true
  }
];

// Choose initial nodes based on active presentation
const initialNodes = smartAgriNodes;

// Create edges for Smart Agriculture presentation
const smartAgriEdges = [
  { id: 'e1-2', source: 'smartAgriTitle', target: 'smartAgriOverview', animated: true },
  { id: 'e2-3', source: 'smartAgriOverview', target: 'smartAgriEvaluation', animated: true },
  { id: 'e3-4', source: 'smartAgriEvaluation', target: 'smartAgriAcceptance', animated: true },
  { id: 'e4-5', source: 'smartAgriAcceptance', target: 'smartAgriContract', animated: true },
  { id: 'e5-6', source: 'smartAgriContract', target: 'smartAgriSolicitation', animated: true },
  { id: 'e6-7', source: 'smartAgriSolicitation', target: 'smartAgriRoles', animated: true },
  { id: 'e7-8', source: 'smartAgriRoles', target: 'smartAgriTimeline', animated: true },
  { id: 'e8-9', source: 'smartAgriTimeline', target: 'smartAgriConclusion', animated: true }
];

// Choose initial edges based on active presentation
const initialEdges = smartAgriEdges;

// Función para cargar las posiciones guardadas (ahora siempre usará las fijas)
const loadSavedNodePositions = () => {
  // Clonar los nodos iniciales y eliminar las notas del orador
  return initialNodes.map(node => ({
    ...node,
    data: {
      ...node.data,
      // Eliminar las notas del orador
      speakerNotes: ''
    }
  }));
};

function Flow() {
  const [currentNodeIndex, setCurrentNodeIndex] = useState(0);
  const [zoomLevel, setZoomLevel] = useState(1.0);
  // Iniciar siempre en modo presentación completa (zoom fijo)
  const [fixedZoom, setFixedZoom] = useState(true);
  const [fixedPositions, setFixedPositions] = useState(true);
  const [savedPositions, setSavedPositions] = useState({});
  const reactFlowInstance = useReactFlow();
  const zoomTimeout = useRef(null);
  
  // Estado para nodos y bordes
  const [nodes, setNodes, onNodesChange] = useNodesState(loadSavedNodePositions());
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  
  // Gestor personalizado de cambios de nodos
  const handleNodesChange = useCallback(
    (changes) => {
      if (fixedPositions) {
        // Filtrar cambios de posición si las posiciones están fijas
        const filteredChanges = changes.filter(change => 
          !(change.type === 'position' && change.dragging)
        );
        onNodesChange(filteredChanges);
      } else {
        onNodesChange(changes);
      }
    },
    [fixedPositions, onNodesChange]
  );
  
  // Función para manejar las conexiones entre nodos
  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );
  
  // Manejo de zoom
  const handleZoomChange = (newZoomLevel) => {
    if (fixedZoom) return;
    
    setZoomLevel(newZoomLevel);
    
    if (zoomTimeout.current) {
      clearTimeout(zoomTimeout.current);
    }
    
    zoomTimeout.current = setTimeout(() => {
      if (reactFlowInstance) {
        reactFlowInstance.setViewport({ zoom: newZoomLevel });
      }
    }, 100);
  };
  
  // Función para navegar al siguiente nodo
  const navigateToNextNode = useCallback(() => {
    if (currentNodeIndex < navigationSequence.length - 1) {
      const nextIndex = currentNodeIndex + 1;
      setCurrentNodeIndex(nextIndex);
      
      // Mostrar el siguiente nodo
      setNodes((nds) =>
        nds.map((node) => {
          if (node.id === navigationSequence[nextIndex]) {
            return { ...node, hidden: false };
          }
          return node;
        })
      );
      
      // Espera un poco para permitir que se renderice el nodo antes de hacer zoom hacia él
      setTimeout(() => {
        reactFlowInstance.fitView({
          nodes: [{ id: navigationSequence[nextIndex] }],
          padding: 0.01,
          duration: 1000
        });
      }, 100);
    }
  }, [currentNodeIndex, reactFlowInstance, setNodes]);
  
  // Función para navegar al nodo anterior
  const navigateToPreviousNode = useCallback(() => {
    if (currentNodeIndex > 0) {
      const previousIndex = currentNodeIndex - 1;
      setCurrentNodeIndex(previousIndex);
      
      // Hacer zoom hacia el nodo anterior (que ya debería estar visible)
      reactFlowInstance.fitView({
        nodes: [{ id: navigationSequence[previousIndex] }],
        padding: 0.01,
        duration: 1000
      });
    }
  }, [currentNodeIndex, reactFlowInstance]);
  
  // Enfocar el primer nodo al cargar
  useEffect(() => {
    if (reactFlowInstance) {
      // Esperar a que ReactFlow esté listo
      setTimeout(() => {
        reactFlowInstance.fitView({
          nodes: [{ id: navigationSequence[currentNodeIndex] }],
          padding: 0.01,
          duration: 0
        });
      }, 300);
    }
  }, [reactFlowInstance]);
  
  // Manejar teclas para navegar entre nodos
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowRight' || event.key === 'PageDown') {
        navigateToNextNode();
      } else if (event.key === 'ArrowLeft' || event.key === 'PageUp') {
        navigateToPreviousNode();
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [navigateToNextNode, navigateToPreviousNode]);
  
  // Cargar posiciones guardadas
  useEffect(() => {
    const savedPositionsData = localStorage.getItem('nodePositions');
    if (savedPositionsData) {
      const parsedPositions = JSON.parse(savedPositionsData);
      setSavedPositions(parsedPositions);
    }
  }, []);
  
  return (
    <div className="w-full h-screen">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={handleNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        nodesDraggable={false}
        zoomOnScroll={!fixedZoom}
        panOnScroll={true}
        zoomOnPinch={!fixedZoom}
        zoomOnDoubleClick={!fixedZoom}
        proOptions={{ hideAttribution: true }}
        defaultZoom={zoomLevel}
      >
        <Background variant="dots" gap={16} color="#aaa" />
        <Controls showInteractive={false} />
        
        {/* Indicador de progreso de la presentación */}
        <div className="fixed bottom-4 left-4 z-50 bg-black bg-opacity-30 px-3 py-1 rounded-full">
          <div className="flex items-center gap-1">
            {navigationSequence.map((_, index) => (
              <div 
                key={index} 
                className={`w-2 h-2 rounded-full ${index === currentNodeIndex ? 'bg-teal-400' : 'bg-gray-400 opacity-50'}`}
              />
            ))}
          </div>
        </div>
      </ReactFlow>
      
      <NavigationControls
        onNext={navigateToNextNode}
        onPrevious={navigateToPreviousNode}
        currentNodeIndex={currentNodeIndex}
        totalNodes={navigationSequence.length}
      />
      
      {/* Control de zoom (oculto pero funcional) */}
      <ZoomControl
        zoomLevel={zoomLevel}
        onChange={handleZoomChange}
        disabled={fixedZoom}
      />
    </div>
  );
}

function App() {
  // Añadir animaciones globales al DOM
  useEffect(() => {
    const styleEl = document.createElement('style');
    styleEl.textContent = fadeInAnimation;
    document.head.appendChild(styleEl);
    
    return () => {
      document.head.removeChild(styleEl);
    };
  }, []);

  return (
    <ReactFlowProvider>
      <Flow />
    </ReactFlowProvider>
  );
}

export default App;
