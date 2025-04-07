import React from 'react';
import { Handle, Position } from 'reactflow';

const CryptoObjectivesNode = ({ data }) => {
  // Versión predeterminada de los objetivos (más concisos)
  const objectives = data.objectives || [
    "Analyze cryptocurrency's impact on financial infrastructure and risk assessment frameworks",
    "Evaluate cross-sector business transformations in response to crypto adoption",
    "Apply risk identification frameworks to technological market disruptions",
    "Develop strategic response plans for transformation-driven risks",
    "Assess adaptation strategy effectiveness in traditional financial institutions"
  ];

  return (
    <div className="p-4 rounded-xl shadow-xl bg-gradient-to-br from-indigo-800 to-purple-900 w-[650px] h-[450px] relative overflow-hidden">
      <Handle type="target" position={Position.Top} />
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-300 opacity-10 rounded-full -mr-24 -mt-24 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-300 opacity-10 rounded-full -ml-16 -mb-16"></div>
      
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full" style={{ 
          backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)', 
          backgroundSize: '40px 40px' 
        }}></div>
      </div>
      
      <div className="relative z-10 h-full flex flex-col">
        {/* Title Section */}
        <div className="mb-4 text-center">
          <h2 className="text-2xl font-bold text-white mb-1">{data.title || "Learning Objectives"}</h2>
          <div className="w-28 h-1 bg-gradient-to-r from-blue-300 to-purple-300 mx-auto"></div>
        </div>
        
        {/* Main Content */}
        <div className="flex-1 bg-white bg-opacity-10 rounded-lg p-4 shadow-inner">
          <p className="text-white text-sm mb-4">
            By the end of this presentation, you will be able to:
          </p>
          
          <ul className="space-y-3">
            {objectives.map((objective, index) => (
              <li key={index} className="flex items-start text-white">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-indigo-500 flex items-center justify-center mr-3 mt-0.5">
                  <span className="text-white font-bold text-sm">{index + 1}</span>
                </div>
                <p className="text-sm">{objective}</p>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Bottom Quote */}
        <div className="mt-3 bg-indigo-600 bg-opacity-30 p-2 rounded-lg border border-indigo-400 border-opacity-30">
          <p className="text-white text-sm italic text-center">
            "Understanding how to navigate cryptocurrency disruption is essential for effective project risk management."
          </p>
        </div>
      </div>
      
      <Handle type="source" position={Position.Bottom} id="a" />
    </div>
  );
};

export default CryptoObjectivesNode; 