import React from 'react';
import { Handle, Position } from 'reactflow';
// Importar la imagen directamente
import donationsGraph from '../Event/Donations.png';

const DonationsEvolutionNode = ({ data }) => {
  // Datos actualizados con los porcentajes correctos y solo 3 fuentes
  const donationSources = [
    { name: "Connor & Kennedy's No Frills", percent: 58.52, color: "from-blue-400 to-blue-600", bgColor: "bg-blue-700" },
    { name: "Sonny Bar & Grill", percent: 24.15, color: "from-cyan-400 to-cyan-600", bgColor: "bg-cyan-700" },
    { name: "Online platform", percent: 17.33, color: "from-sky-300 to-sky-500", bgColor: "bg-sky-700" }
  ];

  return (
    <div className="p-4 rounded-xl shadow-xl bg-gradient-to-br from-sky-500 to-blue-700 w-[650px] h-[500px] relative overflow-hidden">
      <Handle type="target" position={Position.Top} />
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-sky-200 opacity-20 rounded-full -mr-32 -mt-32"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-200 opacity-20 rounded-full -ml-24 -mb-24"></div>
      
      {/* Dollar sign icon */}
      <div className="absolute top-6 right-6 w-14 h-14 text-white opacity-30">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
      
      <div className="flex flex-col h-full text-white py-2 relative z-10">
        {/* Title - ajustado para ser más compacto */}
        <div className="mb-2 text-center">
          <h2 className="text-3xl font-bold text-white">
            {data.title || "Donations Evolution"}
          </h2>
          <div className="w-40 h-1 bg-white opacity-40 mx-auto mt-1 rounded-full"></div>
        </div>
        
        {/* Main content with adjusted layout */}
        <div className="flex flex-col flex-grow">
          {/* Donations Graph - Imagen importada */}
          <div className="w-full mb-1">
            <div className="w-full h-[305px] bg-white rounded-xl overflow-hidden shadow-lg p-1.5">
              {/* Usar la imagen importada directamente */}
              <img 
                src={donationsGraph} 
                alt="Donations Evolution Graph" 
                className="w-full h-full object-contain"
              />
            </div>
          </div>
          
          {/* Bottom section - Donations by Source - versión ultra compacta */}
          <div className="w-full">
            <h3 className="text-lg font-bold mb-1 text-center">Donations by Source</h3>
            
            <div className="grid grid-cols-3 gap-2 px-2">
              {donationSources.map((source, index) => (
                <div 
                  key={index} 
                  className={`${source.bgColor} rounded-lg p-2 shadow-lg border border-white border-opacity-20`}
                >
                  <div className="flex flex-col items-center">
                    <span className="font-semibold text-xs text-center text-white mb-1.5 leading-tight">
                      {source.name}
                    </span>
                    <div className="w-full bg-gray-800 rounded-full h-3 mb-1">
                      <div 
                        className={`h-3 rounded-full bg-gradient-to-r ${source.color}`}
                        style={{ width: `${source.percent}%` }}
                      ></div>
                    </div>
                    <span className="text-white text-sm font-bold">
                      {source.percent}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <Handle type="source" position={Position.Bottom} id="a" />
    </div>
  );
};

export default DonationsEvolutionNode; 