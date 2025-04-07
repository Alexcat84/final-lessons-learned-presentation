import React from 'react';
import { Handle, Position } from 'reactflow';

const CryptoSocialNode = ({ data }) => {
  // Obtener los ejemplos del prop data o usar un valor predeterminado
  const examples = data.example || [
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
  ];
  
  return (
    <div className="p-4 rounded-xl shadow-xl bg-gradient-to-br from-indigo-800 to-purple-900 w-[650px] h-[450px] relative overflow-hidden">
      <Handle type="target" position={Position.Top} />
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-300 opacity-10 rounded-full -mr-24 -mt-24 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-300 opacity-10 rounded-full -ml-16 -mb-16"></div>
      
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="h-full w-full" style={{ 
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '20px 20px' 
        }}></div>
      </div>
      
      <div className="relative z-10 h-full flex flex-col">
        {/* Title Section */}
        <div className="mb-1 text-center">
          <h2 className="text-xl font-bold text-white mb-0.5">{data.title || "Strategic Response Plans for Crypto Risks"}</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-300 to-purple-300 mx-auto mb-1"></div>
          
          <div className="bg-indigo-600 bg-opacity-40 p-1 rounded-lg mb-1 inline-block mx-auto">
            <p className="text-sm font-medium text-white">
              {data.riskConcept || "Selection of inadequate response strategies to crypto disruption"}
            </p>
          </div>
        </div>
        
        {/* Main Content */}
        <div className="flex-1 flex flex-col md:flex-row gap-2">
          {/* Left Column - Comparison Table y Key Lesson */}
          <div className="flex-1 flex flex-col gap-2">
            {/* Comparison Table */}
            <div className="flex-1 bg-white bg-opacity-10 rounded-lg p-2 shadow-inner">
              <h3 className="text-base font-semibold mb-0.5 text-blue-100">Real-World Example:</h3>
              
              <div className="mt-0.5">
                <table className="w-full text-white">
                  <thead>
                    <tr className="border-b border-indigo-400 border-opacity-30">
                      <th className="text-left py-0.5 px-2 bg-indigo-700 bg-opacity-30 rounded-tl-lg text-xs">Institution</th>
                      <th className="text-left py-0.5 px-2 bg-indigo-700 bg-opacity-30 text-xs">Strategy</th>
                      <th className="text-left py-0.5 px-2 bg-indigo-700 bg-opacity-30 rounded-tr-lg text-xs">Outcome</th>
                    </tr>
                  </thead>
                  <tbody>
                    {examples.map((example, index) => (
                      <tr key={index} className={index === examples.length - 1 ? '' : 'border-b border-indigo-400 border-opacity-30'}>
                        <td className={`py-1 px-2 font-medium text-xs ${index === 0 ? 'text-green-300' : 'text-red-300'}`}>{example.title}</td>
                        <td className="py-1 px-2 text-xs">{example.description}</td>
                        <td className={`py-1 px-2 font-medium text-xs ${index === 0 ? 'text-green-300' : 'text-red-300'}`}>{example.outcome}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              {/* Strategy Visualization */}
              <div className="mt-1.5 flex justify-center">
                <div className="flex items-center space-x-1">
                  <div className="h-12 w-12 rounded-full bg-red-500 bg-opacity-20 flex items-center justify-center border-2 border-red-500 border-opacity-40">
                    <span className="text-[9px] text-center text-white px-0.5">Passive<br/>Strategy</span>
                  </div>
                  <div className="h-1 w-5 bg-gradient-to-r from-red-500 to-yellow-500"></div>
                  <div className="h-14 w-14 rounded-full bg-yellow-500 bg-opacity-20 flex items-center justify-center border-2 border-yellow-500 border-opacity-40">
                    <span className="text-[9px] text-center text-white px-0.5">Reactive<br/>Strategy</span>
                  </div>
                  <div className="h-1 w-5 bg-gradient-to-r from-yellow-500 to-green-500"></div>
                  <div className="h-16 w-16 rounded-full bg-green-500 bg-opacity-20 flex items-center justify-center border-2 border-green-500 border-opacity-40">
                    <span className="text-[9px] text-center text-white px-0.5">Proactive<br/>Strategy</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Key Lesson - Movido a la columna izquierda */}
            <div className="bg-indigo-700 bg-opacity-50 p-1.5 rounded-lg border border-indigo-400 border-opacity-30 shadow-lg">
              <h3 className="text-sm font-semibold mb-0.5 text-blue-100">Key Lesson:</h3>
              <p className="text-white text-xs">
                {data.keyLesson || "Proactive strategies generated 3X better results than reactive or passive ones."}
              </p>
            </div>
          </div>
          
          {/* Right Column - Solo Strategic Response Framework */}
          <div className="flex-1 bg-white bg-opacity-10 rounded-lg p-2 shadow-inner">
            <h3 className="text-base font-semibold mb-1.5 text-blue-100">Strategic Response Framework:</h3>
            
            <div className="space-y-2 mt-2">
              <div className="bg-indigo-800 bg-opacity-40 p-2 rounded-lg border-l-4 border-green-400">
                <h4 className="font-medium text-green-300 mb-0.5 text-xs">Proactive Approach</h4>
                <p className="text-white text-xs leading-tight">Develop dedicated crypto business units, invest in blockchain R&D, create strategic partnerships with crypto startups</p>
              </div>
              
              <div className="bg-indigo-800 bg-opacity-40 p-2 rounded-lg border-l-4 border-yellow-400">
                <h4 className="font-medium text-yellow-300 mb-0.5 text-xs">Reactive Approach</h4>
                <p className="text-white text-xs leading-tight">Respond to market pressures, imitate competitor strategies, adopt technology after proven viability</p>
              </div>
              
              <div className="bg-indigo-800 bg-opacity-40 p-2 rounded-lg border-l-4 border-red-400">
                <h4 className="font-medium text-red-300 mb-0.5 text-xs">Passive Approach</h4>
                <p className="text-white text-xs leading-tight">Wait for regulatory clarity, avoid substantial investments, maintain traditional business model</p>
              </div>
            </div>
            
            <div className="mt-3 flex items-start">
              <svg className="h-5 w-5 text-blue-300 mr-1.5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-white text-xs leading-tight">
                Organizations must evaluate their risk appetite and market positioning to select the appropriate response strategy.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <Handle type="source" position={Position.Bottom} id="a" />
    </div>
  );
};

export default CryptoSocialNode; 