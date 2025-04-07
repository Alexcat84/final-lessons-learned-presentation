import React from 'react';
import { Handle, Position } from 'reactflow';

const CryptoConclusionNode = ({ data }) => {
  // Asegurémonos de tener valores predeterminados para los datos
  const conclusions = data.conclusions || [
    "Cryptocurrencies present both systemic risks and opportunities for traditional financial markets",
    "Early risk identification determines success or failure in crypto market integration",
    "Proactive strategic responses deliver measurably better outcomes than reactive approaches",
    "Continuous monitoring with specialized metrics is essential for adapting to crypto risks"
  ];
  
  const recommendations = data.recommendations || [
    "Implement continuous crypto risk monitoring systems",
    "Develop specialized crypto risk metrics and frameworks",
    "Establish proactive rather than reactive strategies",
    "Invest in blockchain expertise across risk departments"
  ];

  return (
    <div className="p-4 rounded-xl shadow-xl bg-gradient-to-br from-indigo-800 to-purple-900 w-[650px] h-[450px] relative overflow-hidden">
      <Handle type="target" position={Position.Top} />
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-300 opacity-10 rounded-full -mr-24 -mt-24"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-300 opacity-10 rounded-full -ml-16 -mb-16"></div>
      
      {/* Additional decorative elements */}
      <div className="absolute inset-0 opacity-10">
        {/* Starry background effect */}
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              opacity: Math.random() * 0.7 + 0.3,
              animation: `pulse ${Math.random() * 3 + 2}s infinite alternate`
            }}
          ></div>
        ))}
      </div>
      
      <div className="flex flex-col h-full text-center text-white relative z-10 items-center justify-between">
        {/* Title */}
        <div className="mb-3 mt-6">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200 mb-1">
            {data.title || "Thank you!"}
          </h2>
          <div className="w-28 h-1 bg-gradient-to-r from-blue-300 to-purple-300 mx-auto mb-4 rounded-full"></div>
          
          <div className="flex justify-center animate-bounce">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-indigo-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        </div>
        
        {/* Single Risk Management Message */}
        <div className="flex flex-col items-center px-8 py-6 bg-white bg-opacity-10 rounded-lg shadow-inner max-w-xl border border-indigo-400 border-opacity-30">
          <h3 className="text-2xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-purple-200">Mastering Crypto Risk</h3>
          
          <p className="text-white text-xl font-bold mb-2 text-center leading-relaxed">
            "Tomorrow belongs to those who anticipate and transform risks into strategic advantages today."
          </p>
        </div>
        
        {/* Contact information */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-2 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 mt-3 mb-6">
          <p className="text-base font-semibold">Questions?</p>
          <p className="text-xs font-light">We're happy to discuss further!</p>
        </div>
      </div>
      
      <Handle type="source" position={Position.Bottom} id="a" />
    </div>
  );
};

export default CryptoConclusionNode; 