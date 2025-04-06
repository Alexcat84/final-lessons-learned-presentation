import React from 'react';
import { Handle, Position } from 'reactflow';

const SmartAgriContractNode = ({ data }) => {
  const contractTerms = data.contractTerms || [
    "24-month warranty with specified response times",
    "Comprehensive service agreements for technical support",
    "Clear supplier responsibilities for quality and compliance",
    "Multi-tiered dispute resolution process"
  ];

  // Colores suavizados para elementos visuales
  const softColors = {
    primary: "rgba(168, 230, 207, 0.9)",      // Verde menta suave
    secondary: "rgba(146, 204, 179, 0.9)",    // Verde salvia suave
    accent: "rgba(112, 178, 144, 0.9)",       // Verde musgo suave
    gradient: "linear-gradient(135deg, rgba(168, 230, 207, 0.9), rgba(112, 178, 144, 0.9))",
    bgGradient: "linear-gradient(to right, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.15))"
  };

  // Iconos para los términos del contrato
  const getTermIcon = (index) => {
    switch(index) {
      case 0: // Warranty
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        );
      case 1: // Service agreements
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        );
      case 2: // Supplier responsibilities
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
          </svg>
        );
      case 3: // Dispute resolution
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
          </svg>
        );
      default:
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
          </svg>
        );
    }
  };

  return (
    <div className="p-4 rounded-xl shadow-xl bg-gradient-to-br from-green-600 to-emerald-800 w-[900px] h-[600px] relative overflow-hidden">
      <Handle type="target" position={Position.Top} />
      
      {/* Elementos decorativos mejorados */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-green-200 opacity-10 rounded-full -mr-32 -mt-32 animate-pulse-slow"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-green-200 opacity-10 rounded-full -ml-24 -mb-24"></div>
      
      {/* Patrones decorativos adicionales */}
      <div className="absolute inset-0">
        <svg width="100%" height="100%" className="absolute opacity-5">
          <pattern id="grid-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5"></path>
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        </svg>
      </div>
      
      {/* Icono decorativo de contrato */}
      <div className="absolute top-10 right-10 w-14 h-14 text-white opacity-20">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      </div>
      
      <div className="flex flex-col h-full text-white">
        <h2 className="text-4xl font-bold mb-3 text-center text-transparent bg-clip-text bg-gradient-to-r from-white to-green-100 drop-shadow-lg">
          Contract Management
        </h2>
        
        <div className="grid grid-cols-2 gap-4 flex-grow">
          {/* Contract type - Rediseñado */}
          <div className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-sm p-4 rounded-lg flex flex-col border-2 border-white border-opacity-20 shadow-lg">
            <h3 className="text-2xl font-bold mb-2 text-white drop-shadow-sm flex items-center">
              <div className="h-8 w-8 rounded-full bg-gradient-to-br from-green-200 to-emerald-300 flex items-center justify-center mr-2 shadow-md text-green-800">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              Contract Type & Structure
            </h3>
            
            <div className="flex-grow flex flex-col">
              <div 
                className="bg-green-700 bg-opacity-40 p-3 rounded-lg mb-3 shadow-md border-2 border-white border-opacity-20 transform transition hover:scale-[1.01] duration-200 flex flex-col justify-center"
                style={{ background: softColors.bgGradient }}
              >
                <div className="text-lg mb-1 font-bold text-white flex items-center">
                  <div className="h-6 w-6 bg-green-200 rounded-full mr-2 flex items-center justify-center text-green-800 shadow-sm">
                    <span className="font-bold">F</span>
                  </div>
                  Fixed-Price Incentive Fee
                </div>
                <div className="text-sm opacity-90 ml-8">
                  Fixed price with performance incentives to encourage high-quality delivery
                  while transferring cost risk to the supplier.
                </div>
              </div>
              
              {/* Visual representation of contract structure */}
              <div className="mb-3 p-3 bg-green-700 bg-opacity-30 rounded-lg shadow-md border-2 border-white border-opacity-20">
                <div className="flex justify-center mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white opacity-80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div className="flex justify-between items-center">
                  <div className="text-center flex-1">
                    <div className="w-full h-2 bg-green-200 rounded-full mb-1"></div>
                    <div className="text-xs text-white font-medium">Base Price</div>
                  </div>
                  <div className="mx-2 text-white">+</div>
                  <div className="text-center flex-1">
                    <div className="w-full h-2 bg-yellow-300 rounded-full mb-1"></div>
                    <div className="text-xs text-white font-medium">Performance Bonus</div>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mt-auto">
                <div 
                  className="bg-green-700 bg-opacity-30 p-3 rounded-lg flex flex-col items-center justify-center shadow-md border-2 border-white border-opacity-20 transform transition hover:scale-[1.05] duration-200"
                  style={{ background: softColors.bgGradient }}
                >
                  <div className="text-3xl font-bold text-white">24</div>
                  <div className="text-xs uppercase tracking-wider text-white font-semibold">Month Warranty</div>
                </div>
                <div 
                  className="bg-green-700 bg-opacity-30 p-3 rounded-lg flex flex-col items-center justify-center shadow-md border-2 border-white border-opacity-20 transform transition hover:scale-[1.05] duration-200"
                  style={{ background: softColors.bgGradient }}
                >
                  <div className="text-3xl font-bold text-white">10%</div>
                  <div className="text-xs uppercase tracking-wider text-white font-semibold">Performance Incentive</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contract terms - Rediseñado */}
          <div className="flex flex-col gap-3">
            <div className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-sm p-4 rounded-lg flex-grow shadow-lg border-2 border-white border-opacity-20">
              <h3 className="text-2xl font-bold mb-2 text-white drop-shadow-sm flex items-center">
                <div className="h-8 w-8 rounded-full bg-gradient-to-br from-green-200 to-emerald-300 flex items-center justify-center mr-2 shadow-md text-green-800">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                Key Contract Terms
              </h3>
              
              {/* Términos del contrato más compactos */}
              <ul className="space-y-2">
                {contractTerms.map((term, index) => (
                  <li 
                    key={index} 
                    className="flex items-start bg-green-700 bg-opacity-30 p-2 rounded-lg shadow-md border border-white border-opacity-20 transform transition-all hover:translate-x-1 hover:shadow-lg duration-200"
                  >
                    <div className="h-7 w-7 rounded-full bg-gradient-to-br from-green-200 to-emerald-300 flex items-center justify-center mr-2 flex-shrink-0 shadow-md text-green-800">
                      {getTermIcon(index)}
                    </div>
                    <div className="text-sm text-white">{term}</div>
                  </li>
                ))}
              </ul>
              
              {/* Proceso de resolución de disputas rediseñado y más compacto */}
              <div className="mt-4">
                <div 
                  className="relative p-3 rounded-lg overflow-hidden shadow-lg border-2 border-white border-opacity-20"
                  style={{ background: softColors.bgGradient }}
                >
                  <div className="text-center font-bold text-base mb-2 text-white drop-shadow-sm bg-green-700 bg-opacity-50 py-1 rounded-md">
                    DISPUTE RESOLUTION PROCESS
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-200 to-emerald-300 flex items-center justify-center shadow-md text-green-800 mb-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                      <div className="text-xs font-semibold text-white">Project Level</div>
                    </div>
                    
                    <div className="w-24 h-2 bg-white bg-opacity-20 rounded-full mx-3 relative overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-green-200 to-emerald-300 rounded-full absolute top-0 left-0 w-full" style={{ animation: 'moveRight 5s infinite linear' }}></div>
                    </div>
                    
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-200 to-emerald-300 flex items-center justify-center shadow-md text-green-800 mb-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                        </svg>
                      </div>
                      <div className="text-xs font-semibold text-white">Arbitration</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Handle type="source" position={Position.Bottom} id="a" />
      
      {/* Añadir animación */}
      <style jsx>{`
        @keyframes moveRight {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        @keyframes pulse-slow {
          0% { opacity: 0.05; }
          50% { opacity: 0.15; }
          100% { opacity: 0.05; }
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 4s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default SmartAgriContractNode; 