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

// Crypto Currency Impacts nodes
import CryptoTitleNode from './nodes/CryptoTitleNode';
import CryptoOverviewNode from './nodes/CryptoOverviewNode';
import CryptoEconomicNode from './nodes/CryptoEconomicNode';
import CryptoRegulatoryNode from './nodes/CryptoRegulatoryNode';
import CryptoSocialNode from './nodes/CryptoSocialNode';
import CryptoConclusionNode from './nodes/CryptoConclusionNode';
import CryptoObjectivesNode from './nodes/CryptoObjectivesNode';

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
          className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-1 px-3 rounded shadow-lg transition-colors text-xs"
        >
          ← Previous
        </button>
      )}
      {currentNodeIndex < totalNodes - 1 && (
        <button
          onClick={onNext}
          className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-1 px-3 rounded shadow-lg transition-colors text-xs"
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
  // Crypto Currency Impacts node types
  cryptoTitleNode: CryptoTitleNode,
  cryptoOverviewNode: CryptoOverviewNode,
  cryptoEconomicNode: CryptoEconomicNode,
  cryptoRegulatoryNode: CryptoRegulatoryNode,
  cryptoSocialNode: CryptoSocialNode,
  cryptoConclusionNode: CryptoConclusionNode,
  cryptoObjectivesNode: CryptoObjectivesNode
};

// Active presentation key
const activePresentationKey = 'crypto';

// Navigation sequences
const navigationSequences = {
  crypto: [
    'cryptoTitle',
    'cryptoTransformation',
    'cryptoBusiness',
    'cryptoRiskIdentification',
    'cryptoStrategicResponse',
    'cryptoAdaptation',
    'cryptoThanks'
  ]
};

// Define the active navigation sequence
const navigationSequence = navigationSequences[activePresentationKey];

// Definimos las posiciones fijas en zigzag
const fixedPositions = {  
  // Crypto Currency positions
  'cryptoTitle': { x: 0, y: 0 },
  'cryptoTransformation': { x: -1000, y: 700 },
  'cryptoBusiness': { x: 1000, y: 1400 },
  'cryptoRiskIdentification': { x: -1000, y: 2100 },
  'cryptoStrategicResponse': { x: 1000, y: 2800 },
  'cryptoAdaptation': { x: -1000, y: 3500 },
  'cryptoThanks': { x: 0, y: 4200 }
};

// Guardar las posiciones fijas en localStorage
localStorage.setItem('nodePositions', JSON.stringify(fixedPositions));

// Crypto Currency nodes
const cryptoNodes = [
  {
    id: 'cryptoTitle',
    type: 'cryptoTitleNode',
    position: fixedPositions['cryptoTitle'],
    data: {
      title: "Crypto Currency Impacts on Traditional Financial Markets and World Businesses",
      courseCode: "25W_MGT4202_300 Project Risk Management",
      professor: "Professor's Name: Pete Grieve",
      teamMembers: [
        'Alexis García',
        'Joseph Alabi',
        'Christabel Ebue',
        'Oluwatomiwa Osisanya',
        'Eseoghene Atumah'
      ],
      date: "April 8, 2025",
      speakerNotes: "Welcome to our analysis of cryptocurrency impacts on traditional financial markets and world businesses. In this presentation, we'll explore how cryptocurrencies are transforming financial infrastructure and presenting both challenges and opportunities across various sectors."
    }
  },
  {
    id: 'cryptoTransformation',
    type: 'cryptoEconomicNode',
    position: fixedPositions['cryptoTransformation'],
    data: {
      title: "Transformative Impact on Financial Infrastructure",
      riskConcept: "Systemic disruption of traditional financial markets",
      realWorldExample: "Western Union faced a 30% decline in stock value between 2018-2022 as cryptocurrencies captured the international remittance market with 70% lower fees and settlement times reduced from days to minutes.",
      impacts: [
        { category: "Traditional banks", value: 85, description: "$17B in annual revenue at risk" },
        { category: "Central bank response", value: 90, description: "114 CBDC projects launched as a defensive response" }
      ],
      speakerNotes: "Cryptocurrencies are fundamentally disrupting traditional financial infrastructure. As our real-world example shows, established players like Western Union have suffered significant value decline as crypto alternatives offer dramatically lower fees and faster settlement times. Traditional banks have identified billions in revenue at risk, prompting central banks worldwide to launch their own digital currency projects as a defensive measure."
    },
    hidden: true
  },
  {
    id: 'cryptoBusiness',
    type: 'cryptoEconomicNode',
    position: fixedPositions['cryptoBusiness'],
    data: {
      title: "Business Transformation Across Sectors",
      riskConcept: "Extreme crypto market volatility impacting traditional business operations",
      realWorldExample: "Official Trump (TRUMP) token reached $75.35 on January 19, 2025, crashed to $1.21 on January 17 (89.47% drop in 2 days), before partially recovering to $7.92.",
      impacts: [
        { category: "PayPal", value: 75, description: "49% increase in engagement after crypto integration (2020)" },
        { category: "Tesla", value: 85, description: "$1.5B in unrealized gains/losses from Bitcoin investment" },
        { category: "BlackRock", value: 90, description: "Bitcoin ETF accumulated $17.7B within months of launch (2024)" }
      ],
      speakerNotes: "The extreme volatility of cryptocurrency markets presents both opportunities and challenges for businesses. As illustrated by the TRUMP token's dramatic price swings, crypto assets can experience severe volatility in very short timeframes. Despite these risks, major corporations continue to integrate cryptocurrencies into their operations and investment strategies, as demonstrated by PayPal's engagement increase, Tesla's significant Bitcoin holdings, and BlackRock's highly successful Bitcoin ETF launch."
    },
    hidden: true
  },
  {
    id: 'cryptoRiskIdentification',
    type: 'cryptoRegulatoryNode',
    position: fixedPositions['cryptoRiskIdentification'],
    data: {
      title: "Risk Identification in Crypto Market Integration",
      riskConcept: "Failures in early identification of crypto risk signals",
      realWorldExample: "Silvergate Bank and Signature Bank collapsed in 2023 by failing to properly identify their concentration risk in crypto deposits, while Fidelity detected early signals and established Fidelity Digital Assets in 2017, capturing market share.",
      outcomes: [
        {
          name: "Failed Banks",
          status: "Total Loss",
          details: "Complete loss of shareholder value",
          color: "from-red-400 to-red-500"
        },
        {
          name: "Early Detection",
          status: "22% ROI",
          details: "Average return on investment for new business lines",
          color: "from-green-400 to-green-500"
        }
      ],
      challenges: [
        "Identifying concentration risks in crypto deposits",
        "Recognizing market signals early",
        "Assessing crypto-related counterparty risks",
        "Understanding technical infrastructure vulnerabilities",
        "Establishing appropriate risk metrics"
      ],
      speakerNotes: "Early risk identification is critical in the cryptocurrency space. The contrasting outcomes of Silvergate/Signature Banks versus Fidelity demonstrate how proper risk identification can mean the difference between complete failure and market leadership. Banks that failed to identify their concentration risks in crypto deposits suffered catastrophic collapses, while institutions that detected early signals were able to establish specialized divisions and capture significant market share with strong returns on investment."
    },
    hidden: true
  },
  {
    id: 'cryptoStrategicResponse',
    type: 'cryptoSocialNode',
    position: fixedPositions['cryptoStrategicResponse'],
    data: {
      title: "Strategic Response Plans for Crypto Risks",
      riskConcept: "Selection of inadequate response strategies to crypto disruption",
      example: [
        {
          title: "JPMorgan",
          description: "Initially banned crypto, then launched JPM Coin",
          outcome: "$300M in new revenue",
          icon: null
        },
        {
          title: "Credit Suisse",
          description: "Passive acceptance without defined strategy",
          outcome: "Loss of market share",
          icon: null
        }
      ],
      keyLesson: "Proactive strategies generated 3X better results than reactive or passive ones.",
      speakerNotes: "The strategic response to cryptocurrency disruption varies widely among financial institutions. JPMorgan demonstrates how even initial resistance can evolve into a successful strategy when accompanied by decisive action, while Credit Suisse's passive approach resulted in significant market share loss. Our analysis shows that institutions implementing proactive strategies consistently outperformed those with reactive or passive approaches by a factor of three."
    },
    hidden: true
  },
  {
    id: 'cryptoAdaptation',
    type: 'cryptoRegulatoryNode',
    position: fixedPositions['cryptoAdaptation'],
    data: {
      title: "Adaptation Strategy Assessment",
      riskConcept: "Inadequate monitoring of changing crypto risk landscape",
      realWorldExample: "Citigroup implemented quarterly crypto risk assessments that prevented $340M in potential losses during the 2022 crash, while Wells Fargo lost $1.8B in potential revenue due to their late market entry.",
      transformations: [
        {
          name: "Monitoring",
          status: "Continuous",
          details: "From periodic to continuous monitoring (24/7)",
          color: "from-blue-400 to-indigo-500"
        },
        {
          name: "Metrics",
          status: "Specialized",
          details: "From standard metrics to specific crypto volatility metrics",
          color: "from-indigo-400 to-purple-500"
        },
        {
          name: "Systems",
          status: "Distributed",
          details: "From centralized to distributed risk systems",
          color: "from-purple-400 to-pink-500"
        }
      ],
      challenges: [
        "Adapting to rapidly evolving market conditions",
        "Developing specialized crypto risk metrics",
        "Implementing continuous monitoring systems",
        "Training risk teams on blockchain technology",
        "Integrating crypto risk into enterprise frameworks"
      ],
      speakerNotes: "The effectiveness of risk monitoring strategies significantly impacts an organization's ability to navigate the crypto landscape. Citigroup's implementation of regular crypto risk assessments demonstrates how proper monitoring can prevent substantial losses during market downturns. Conversely, Wells Fargo's insufficient monitoring led to missed opportunities and revenue loss. Successful organizations are transforming their risk approaches from periodic to continuous monitoring, implementing specialized crypto metrics, and shifting from centralized to distributed risk systems."
    },
    hidden: true
  },
  {
    id: 'cryptoThanks',
    type: 'cryptoConclusionNode',
    position: fixedPositions['cryptoThanks'],
    data: {
      title: "Thank you!",
      conclusions: [
        "Cryptocurrencies present both systemic risks and opportunities for traditional financial markets",
        "Early risk identification determines success or failure in crypto market integration",
        "Proactive strategic responses deliver measurably better outcomes than reactive approaches",
        "Continuous monitoring with specialized metrics is essential for adapting to crypto risks"
      ],
      recommendations: [
        "Implement continuous crypto risk monitoring systems",
        "Develop specialized crypto risk metrics and frameworks",
        "Establish proactive rather than reactive strategies",
        "Invest in blockchain expertise across risk departments"
      ],
      teamMembers: [
        'Alexis García',
        'Joseph Alabi',
        'Christabel Ebue',
        'Oluwatomiwa Osisanya',
        'Eseoghene Atumah'
      ],
      speakerNotes: "Thank you for your attention to our presentation on cryptocurrency impacts on traditional financial markets and world businesses. We've examined how crypto is transforming financial infrastructure, creating business opportunities across sectors, and requiring new approaches to risk identification, strategic response, and adaptation. We're now happy to answer any questions you may have about our analysis."
    },
    hidden: true
  }
];

// Set initial nodes
const initialNodes = cryptoNodes;

// Create edges for Crypto Currency presentation
const cryptoEdges = [
  { id: 'e1-2', source: 'cryptoTitle', target: 'cryptoTransformation', animated: true },
  { id: 'e2-3', source: 'cryptoTransformation', target: 'cryptoBusiness', animated: true },
  { id: 'e3-4', source: 'cryptoBusiness', target: 'cryptoRiskIdentification', animated: true },
  { id: 'e4-5', source: 'cryptoRiskIdentification', target: 'cryptoStrategicResponse', animated: true },
  { id: 'e5-6', source: 'cryptoStrategicResponse', target: 'cryptoAdaptation', animated: true },
  { id: 'e6-7', source: 'cryptoAdaptation', target: 'cryptoThanks', animated: true }
];

// Set initial edges
const initialEdges = cryptoEdges;

// Función para cargar las posiciones guardadas (ahora siempre usará las fijas)
const loadSavedNodePositions = () => {
  // Retrieve from localStorage or use default positions
  const savedPositions = fixedPositions;
  return savedPositions;
};

function Flow() {
  // Estado para los nodos y aristas
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  
  // Estado para el nodo actual y zoom
  const [currentNodeIndex, setCurrentNodeIndex] = useState(0);
  const [zoomLevel, setZoomLevel] = useState(0.18);
  const [fixedZoom, setFixedZoom] = useState(true);
  
  // Referencia para el componente ReactFlow
  const reactFlowInstance = useReactFlow();
  const reactFlowWrapper = useRef(null);
  
  // Función para centrar nodos con offset adaptativo
  const centerNode = useCallback((nodeId) => {
    if (reactFlowInstance) {
      try {
        // Usar fitView con padding más pequeño para llenar mejor la pantalla
        reactFlowInstance.fitView({
          nodes: [{ id: nodeId }],
          padding: 0.02, // Reducido de 0.1 para un zoom más cerrado
          duration: 800
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
      
      // Revelar el siguiente nodo
      setNodes((nds) =>
        nds.map((node) => {
          if (node.id === navigationSequence[nextIndex]) {
            node.hidden = false;
          }
          return node;
        })
      );
      
      // Espera un poco para permitir que se renderice el nodo antes de hacer zoom hacia él
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
      }, 500); // Aumentar el tiempo de espera a 500ms
      
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
    // Necesitamos asegurarnos que reactFlowInstance esté completamente inicializado
    if (!reactFlowInstance) {
      return; // Salir si la instancia aún no está disponible
    }
    
    const calculateOptimalZoom = () => {
      // Obtener el ancho de la ventana
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      
      // Calcular un zoom adaptativo basado en el tamaño de pantalla y altura de las diapositivas
      // Las diapositivas tienen 450px de altura, así que calculamos el zoom para que encajen perfectamente
      const slideHeight = 450; // altura de las diapositivas
      const verticalMargin = 20; // margen total reducido (era 40)
      let newZoom = (windowHeight - verticalMargin) / slideHeight;
      
      // Aumentar ligeramente el zoom para cubrir mejor la pantalla
      newZoom = newZoom * 1.1; // Factor de amplificación para que se vea más grande
      
      // Limitar el zoom a valores razonables
      newZoom = Math.max(0.1, Math.min(newZoom, 1.8));
      
      // Factores de corrección según el tamaño de la pantalla
      if (windowWidth < 768) {
        newZoom = newZoom * 0.85; // Reducir un poco en pantallas pequeñas
      } else if (windowWidth >= 1600) {
        newZoom = newZoom * 0.95; // Reducir un poco en pantallas muy grandes
      }
      
      // Aplicar el nuevo nivel de zoom
      setZoomLevel(newZoom);
      
      // Verificar que reactFlowInstance esté disponible y tenga el método setZoom
      if (reactFlowInstance && typeof reactFlowInstance.setZoom === 'function') {
        try {
          reactFlowInstance.setZoom(newZoom);
        } catch (error) {
          console.warn('Error al establecer el zoom:', error);
        }
      }
      
      // Retornar el zoom calculado para poder usarlo en otras funciones
      return newZoom;
    };
    
    // Añadir un tiempo de espera para asegurar que ReactFlow esté inicializado
    const initTimer = setTimeout(() => {
      if (reactFlowInstance && typeof reactFlowInstance.setZoom === 'function') {
        calculateOptimalZoom();
        
        // Añadir listener para recalcular cuando cambie el tamaño de la ventana
        window.addEventListener('resize', calculateOptimalZoom);
      }
    }, 500); // Aumentar el tiempo de espera a 500ms
    
    return () => {
      clearTimeout(initTimer);
      window.removeEventListener('resize', calculateOptimalZoom);
    };
  }, [reactFlowInstance]);
  
  // Control de zoom
  const handleZoomChange = (newZoomLevel) => {
    setZoomLevel(newZoomLevel);
    // Verificar que reactFlowInstance esté disponible
    if (reactFlowInstance && typeof reactFlowInstance.setZoom === 'function') {
      reactFlowInstance.setZoom(newZoomLevel);
    }
  };
  
  return (
    <div className="w-screen h-screen" ref={reactFlowWrapper}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        minZoom={0.1}
        maxZoom={2}
        defaultEdgeOptions={{
          animated: true,
          style: { stroke: '#fff', strokeWidth: 2 }
        }}
        proOptions={{ hideAttribution: true }}
        defaultZoom={zoomLevel}
        style={{ width: '100%', height: '100%' }}
        fitView={false}
        nodesDraggable={false}
        zoomOnScroll={!fixedZoom}
        panOnScroll={true}
        zoomOnPinch={!fixedZoom}
        zoomOnDoubleClick={!fixedZoom}
      >
        <Background variant="dots" gap={16} color="#aaa" />
        <Controls showInteractive={false} />
        
        {/* Indicador de progreso de la presentación */}
        <div className="fixed bottom-4 left-4 z-50 bg-black bg-opacity-30 px-3 py-1 rounded-full">
          <div className="flex items-center gap-1">
            {navigationSequence.map((_, index) => (
              <div 
                key={index} 
                className={`w-2 h-2 rounded-full ${index === currentNodeIndex ? 'bg-indigo-400' : 'bg-gray-400 opacity-50'}`}
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
