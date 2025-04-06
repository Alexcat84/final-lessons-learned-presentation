import React from 'react';
import { Handle, Position } from 'reactflow';

const SmartAgriEvaluationNode = ({ data }) => {
  const criteriaData = data.criteria || [
    { name: "Technical Compliance", weight: 25 },
    { name: "Quality and Reliability", weight: 20 },
    { name: "Cost", weight: 20 },
    { name: "Delivery Timeline", weight: 15 },
    { name: "Warranty and Support", weight: 10 },
    { name: "Vendor Experience", weight: 10 }
  ];

  // Helper function for color classes
  const getColorClass = (index) => {
    const colors = [
      'bg-emerald-500',
      'bg-green-400',
      'bg-teal-400', 
      'bg-cyan-500',
      'bg-green-300',
      'bg-emerald-400'
    ];
    return colors[index % colors.length];
  };
  
  // Colores específicos para cada criterio para mejor visualización
  const getColor = (index) => {
    const colors = [
      '#10b981', // emerald-500
      '#4ade80', // green-400
      '#2dd4bf', // teal-400
      '#06b6d4', // cyan-500
      '#86efac', // green-300
      '#34d399'  // emerald-400
    ];
    return colors[index % colors.length];
  };
  
  // Helper function to get icon for each criterion
  const getCriterionIcon = (index) => {
    switch(index) {
      case 0: // Technical Compliance
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
          </svg>
        );
      case 1: // Quality and Reliability
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        );
      case 2: // Cost
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      case 3: // Delivery Timeline
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      case 4: // Warranty and Support
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
          </svg>
        );
      case 5: // Vendor Experience
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        );
      default:
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        );
    }
  };

  return (
    <div className="p-4 rounded-xl shadow-xl bg-gradient-to-br from-green-600 to-emerald-800 w-[900px] h-[600px] relative overflow-hidden">
      <Handle type="target" position={Position.Top} />
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-green-300 opacity-10 rounded-full -mr-32 -mt-32"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-green-300 opacity-10 rounded-full -ml-24 -mb-24"></div>
      
      {/* Graph background pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" className="absolute">
          <pattern id="grid-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5"></path>
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        </svg>
      </div>
      
      {/* Main content container */}
      <div className="flex flex-col h-full text-white relative z-10">
        <h2 className="text-5xl font-bold mb-3 text-center text-white drop-shadow-lg">
          Evaluation Method
        </h2>
        
        {/* Dashboard Header */}
        <div className="flex justify-between items-center mb-2">
          <div className="bg-white bg-opacity-20 rounded-md px-4 py-1">
            <span className="font-bold text-lg">Procurement Dashboard</span>
          </div>
          <div className="bg-emerald-500 bg-opacity-80 rounded-md px-3 py-1 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-sm font-medium">IoT Smart Agriculture</span>
          </div>
        </div>
        
        {/* Main dashboard content */}
        <div className="grid grid-cols-12 gap-3 flex-grow">
          {/* Left panel - Weighted Evaluation System */}
          <div className="col-span-8 bg-white bg-opacity-20 p-3 rounded-lg shadow-lg backdrop-filter backdrop-blur-sm border-2 border-white border-opacity-20">
            <div className="bg-emerald-700 bg-opacity-40 px-3 py-2 rounded-t-md mb-3 shadow-sm border-b border-white border-opacity-20">
              <h3 className="text-xl font-bold text-white flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                Weighted Evaluation System
              </h3>
            </div>
            
            {/* Barra acumulativa que muestra cómo los criterios suman 100% */}
            <div className="mb-3 px-1">
              <div className="h-6 flex rounded-full overflow-hidden">
                {criteriaData.map((criterion, index) => {
                  return (
                    <div 
                      key={index}
                      className="h-full relative flex items-center justify-center"
                      style={{ 
                        width: `${criterion.weight}%`,
                        backgroundColor: getColor(index)
                      }}
                    >
                      <span className="text-xs font-bold text-white drop-shadow-md">{criterion.weight}%</span>
                    </div>
                  );
                })}
              </div>
            </div>
            
            {/* Criteria cards grid - Optimizados para mostrar completamente */}
            <div className="grid grid-cols-3 gap-3">
              {criteriaData.map((criterion, index) => (
                <div 
                  key={index}
                  className="rounded-lg p-3 border shadow-lg"
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    borderColor: getColor(index)
                  }}
                >
                  <div className="flex items-center mb-2">
                    <div className="mr-3">
                      <div
                        className="h-12 w-12 rounded-full flex items-center justify-center shadow-md"
                        style={{ backgroundColor: getColor(index) }}
                      >
                        {getCriterionIcon(index)}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-sm text-white">{criterion.name}</h4>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-white">Weight</span>
                    <div 
                      className="px-3 py-1 rounded-full flex items-center justify-center shadow-inner"
                      style={{ backgroundColor: `${getColor(index)}80` }}
                    >
                      <span className="text-lg font-bold text-white">{criterion.weight}%</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Total de los pesos */}
            <div className="mt-3 bg-green-800 bg-opacity-30 p-2 rounded-lg flex justify-between items-center">
              <div className="font-medium text-white text-sm">Total Weight:</div>
              <div className="text-white font-bold text-xl">100%</div>
            </div>
          </div>
          
          {/* Right panel - Optimizado para mostrar todo el contenido */}
          <div className="col-span-4 flex flex-col gap-2">
            {/* Minimum qualifying score - Más compacto */}
            <div className="bg-white bg-opacity-20 p-2 rounded-lg shadow-lg border-2 border-white border-opacity-20">
              <h3 className="text-base font-bold text-white text-center mb-1 bg-emerald-700 bg-opacity-40 py-1 rounded-md">
                Minimum Qualifying Score
              </h3>
              
              <div className="flex items-center justify-center">
                <div className="relative flex items-center justify-center">
                  <svg className="w-20 h-20" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="45" fill="none" className="stroke-current text-white opacity-20" strokeWidth="8"></circle>
                    <circle 
                      cx="50" 
                      cy="50" 
                      r="45" 
                      fill="none" 
                      className="stroke-current text-emerald-400" 
                      strokeWidth="8" 
                      strokeDasharray="198, 283" 
                      strokeLinecap="round"
                      transform="rotate(-90 50 50)"
                    ></circle>
                  </svg>
                  
                  <div className="absolute flex flex-col items-center">
                    <span className="text-2xl font-bold text-white">7.0</span>
                    <span className="text-xs font-semibold text-white">/10</span>
                  </div>
                </div>
              </div>
              
              <p className="text-xs text-white text-center">
                Minimum score required for vendor consideration
              </p>
              
              <div className="flex justify-center mt-1">
                <div className="bg-emerald-400 px-2 py-0.5 rounded-full shadow-sm text-xs text-white font-medium inline-flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Mandatory Threshold
                </div>
              </div>
            </div>
            
            {/* Two-stage evaluation process - Más compacto */}
            <div className="bg-white bg-opacity-20 p-2 rounded-lg shadow-lg border-2 border-white border-opacity-20">
              <h3 className="text-base font-bold text-white text-center mb-1 bg-emerald-700 bg-opacity-40 py-1 rounded-md">
                Two-Stage Evaluation
              </h3>
              
              <div className="space-y-1 px-1">
                <div className="flex items-start bg-emerald-800 bg-opacity-30 p-1.5 rounded-lg">
                  <div className="h-6 w-6 rounded-full bg-emerald-500 mr-2 flex items-center justify-center flex-shrink-0 text-white font-bold">1</div>
                  <div>
                    <h4 className="text-white font-semibold text-sm">Initial Compliance Screening</h4>
                    <p className="text-xs text-white opacity-90">Verification of technical requirements</p>
                  </div>
                </div>
                
                <div className="flex justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </div>
                
                <div className="flex items-start bg-emerald-800 bg-opacity-30 p-1.5 rounded-lg">
                  <div className="h-6 w-6 rounded-full bg-emerald-500 mr-2 flex items-center justify-center flex-shrink-0 text-white font-bold">2</div>
                  <div>
                    <h4 className="text-white font-semibold text-sm">Detailed Weighted Evaluation</h4>
                    <p className="text-xs text-white opacity-90">Assessment with weighted scoring</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-1 bg-yellow-500 bg-opacity-30 p-1.5 rounded-md text-center">
                <div className="flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-100 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-xs text-white font-medium">Only proposals passing Stage 1 proceed to Stage 2</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Handle type="source" position={Position.Bottom} id="a" />

      {/* Add CSS animations */}
      <style jsx>{`
        @keyframes pulse-slow {
          0% { transform: scale(1); opacity: 0.2; }
          50% { transform: scale(1.05); opacity: 0.4; }
          100% { transform: scale(1); opacity: 0.2; }
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 3s infinite ease-in-out;
        }
        
        @keyframes draw {
          0% { stroke-dasharray: 0, 100; }
          100% { stroke-dasharray: var(--dash-value, 70), 100; }
        }
        
        .animate-draw {
          animation: draw 1.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default SmartAgriEvaluationNode; 