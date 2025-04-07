import React from 'react';
import { Handle, Position } from 'reactflow';

const CryptoOverviewNode = ({ data }) => {
  const objectives = data.objectives || [
    "Analyze global economic impact of cryptocurrencies",
    "Identify key market trends and adoption patterns",
    "Evaluate regulatory challenges and opportunities",
    "Assess future potential and transformative impact"
  ];

  return (
    <div className="p-4 rounded-xl shadow-xl bg-gradient-to-br from-indigo-700 to-purple-900 w-[650px] h-[450px] relative overflow-hidden">
      <Handle type="target" position={Position.Top} />
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-300 opacity-10 rounded-full -mr-24 -mt-24"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-300 opacity-10 rounded-full -ml-16 -mb-16"></div>
      
      {/* Content Container */}
      <div className="relative z-10 h-full flex flex-col">
        {/* Header */}
        <div className="mb-3 text-center">
          <h2 className="text-2xl font-bold text-white mb-1">Cryptocurrency Impact Overview</h2>
          <div className="w-28 h-1 bg-gradient-to-r from-blue-300 to-purple-300 mx-auto"></div>
        </div>
        
        {/* Main Content */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-3">
          {/* Left Column */}
          <div className="flex flex-col space-y-3">
            {/* Purpose Box */}
            <div className="bg-white bg-opacity-10 p-3 rounded-lg border border-white border-opacity-20 shadow-lg backdrop-blur-sm">
              <h3 className="text-lg font-semibold text-blue-100 mb-1 flex items-center">
                <svg className="w-5 h-5 mr-1 text-blue-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Purpose
              </h3>
              <p className="text-white text-sm">
                {data.purpose || "To assess how cryptocurrencies are reshaping global financial systems and their broader economic impact"}
              </p>
            </div>
            
            {/* Scope Box */}
            <div className="bg-white bg-opacity-10 p-3 rounded-lg border border-white border-opacity-20 shadow-lg backdrop-blur-sm">
              <h3 className="text-lg font-semibold text-blue-100 mb-1 flex items-center">
                <svg className="w-5 h-5 mr-1 text-blue-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
                Scope
              </h3>
              <p className="text-white text-sm">
                {data.scope || "Bitcoin, Ethereum, stablecoins, and emerging digital currencies across global markets"}
              </p>
            </div>
          </div>
          
          {/* Right Column - Objectives */}
          <div className="bg-white bg-opacity-10 p-3 rounded-lg border border-white border-opacity-20 shadow-lg backdrop-blur-sm">
            <h3 className="text-lg font-semibold text-blue-100 mb-2 flex items-center">
              <svg className="w-5 h-5 mr-1 text-blue-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              Objectives
            </h3>
            <ul className="space-y-1.5">
              {objectives.map((objective, index) => (
                <li key={index} className="flex items-start text-white text-sm">
                  <div className="bg-indigo-500 rounded-full p-0.5 mt-1 mr-2 flex-shrink-0">
                    <svg className="w-3 h-3 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  {objective}
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Bottom Quote */}
        <div className="mt-3 bg-indigo-600 bg-opacity-30 p-2 rounded-lg border border-indigo-400 border-opacity-30">
          <p className="text-white text-sm italic">
            "Cryptocurrencies represent one of the most transformative technologies of the digital age, with implications that extend far beyond financial markets."
          </p>
        </div>
      </div>
      
      <Handle type="source" position={Position.Bottom} id="a" />
    </div>
  );
};

export default CryptoOverviewNode; 