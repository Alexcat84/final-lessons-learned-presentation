import React from 'react';
import { Handle, Position } from 'reactflow';

const SmartAgriOverviewNode = ({ data }) => {
  // Definir valores por defecto fuera del JSX
  const purpose = data.purpose || "Acquire IoT hardware components for smart agriculture implementation";
  const scope = data.scope || "Environmental sensors, communication modules, and control units";
  const objectives = data.objectives || [
    "Ensure component quality and durability in agricultural environments",
    "Balance technical excellence with cost considerations",
    "Establish transparent supplier selection process",
    "Implement robust acceptance procedures"
  ];

  return (
    <div className="p-6 rounded-xl shadow-xl bg-gradient-to-br from-green-600 to-emerald-800 w-[900px] h-[600px] relative overflow-hidden">
      <Handle type="target" position={Position.Top} />
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-green-300 opacity-10 rounded-full -mr-32 -mt-32"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-green-300 opacity-10 rounded-full -ml-24 -mb-24"></div>
      
      {/* Smart Agriculture icon */}
      <div className="absolute top-4 right-4 w-12 h-12 text-white opacity-20">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      </div>
      
      <div className="flex flex-col h-full text-white">
        <h2 className="text-4xl font-bold mb-8 text-center text-white drop-shadow-lg">Project Overview</h2>
        
        <div className="grid grid-cols-1 gap-6 mb-4">
          {/* Purpose - Rediseñado con mayor contraste */}
          <div className="bg-white bg-opacity-25 p-5 rounded-lg border-2 border-white border-opacity-30 shadow-md transform transition hover:scale-[1.01] duration-200">
            <h3 className="text-2xl font-semibold mb-3 text-white flex items-center">
              <div className="h-6 w-6 rounded-full bg-green-500 mr-3 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              Purpose
            </h3>
            <p className="text-lg text-white ml-9" style={{opacity: 1, fontWeight: 500}}>
              {purpose}
            </p>
          </div>
          
          {/* Scope - Rediseñado con mayor contraste */}
          <div className="bg-white bg-opacity-25 p-5 rounded-lg border-2 border-white border-opacity-30 shadow-md transform transition hover:scale-[1.01] duration-200">
            <h3 className="text-2xl font-semibold mb-3 text-white flex items-center">
              <div className="h-6 w-6 rounded-full bg-green-500 mr-3 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              Scope
            </h3>
            <p className="text-lg text-white ml-9" style={{opacity: 1, fontWeight: 500}}>
              {scope}
            </p>
          </div>
        </div>
        
        {/* Objectives - Rediseñado con mayor contraste */}
        <div className="bg-white bg-opacity-25 p-5 rounded-lg border-2 border-white border-opacity-30 shadow-md flex-grow transform transition hover:scale-[1.01] duration-200">
          <h3 className="text-2xl font-semibold mb-4 text-white flex items-center">
            <div className="h-6 w-6 rounded-full bg-green-500 mr-3 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            Key Objectives
          </h3>
          <ul className="grid grid-cols-2 gap-3 ml-3">
            {objectives.map((objective, index) => (
              <li key={index} className="flex items-start">
                <div className="h-6 w-6 bg-green-700 bg-opacity-60 rounded-md flex items-center justify-center mr-3 mt-1 flex-shrink-0 shadow-sm">
                  <span className="text-white font-bold">{index + 1}</span>
                </div>
                <p className="text-lg text-white" style={{opacity: 1, fontWeight: 500}}>
                  {objective}
                </p>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Bottom visual */}
        <div className="mt-6 flex justify-center">
          <div className="flex space-x-6">
            <div className="h-16 w-16 bg-teal-400 bg-opacity-20 rounded-full flex items-center justify-center shadow-md border border-white border-opacity-20">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div className="h-16 w-16 bg-teal-400 bg-opacity-20 rounded-full flex items-center justify-center shadow-md border border-white border-opacity-20">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="h-16 w-16 bg-teal-400 bg-opacity-20 rounded-full flex items-center justify-center shadow-md border border-white border-opacity-20">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <div className="h-16 w-16 bg-teal-400 bg-opacity-20 rounded-full flex items-center justify-center shadow-md border border-white border-opacity-20">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      
      <Handle type="source" position={Position.Bottom} id="a" />
    </div>
  );
};

export default SmartAgriOverviewNode; 