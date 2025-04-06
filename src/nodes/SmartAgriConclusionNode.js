import React from 'react';
import { Handle, Position } from 'reactflow';

const SmartAgriConclusionNode = ({ data }) => {
  const strengths = data.strengths || [
    "Balanced evaluation focusing on quality and cost",
    "Robust acceptance procedures minimizing risk",
    "Flexible yet protective contractual framework",
    "Transparent solicitation process"
  ];

  return (
    <div className="p-5 rounded-xl shadow-xl bg-gradient-to-br from-green-600 to-emerald-800 w-[900px] h-[600px] relative overflow-hidden">
      <Handle type="target" position={Position.Top} />
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-green-300 opacity-10 rounded-full -mr-32 -mt-32"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-green-300 opacity-10 rounded-full -ml-24 -mb-24"></div>
      
      {/* Content wrapper */}
      <div className="flex flex-col h-full text-white relative z-10">
        <h2 className="text-5xl font-bold mb-6 text-center text-white">
          Conclusion
        </h2>
        
        <div className="grid grid-cols-2 gap-6 flex-grow">
          {/* Left column - Strengths - Adjusted to prevent text cutoff */}
          <div className="bg-white bg-opacity-20 p-5 rounded-lg shadow-xl flex flex-col">
            <h3 className="text-3xl font-semibold mb-3 text-white">Key Plan Strengths</h3>
            
            <ul className="space-y-3 mb-3">
              {strengths.map((strength, index) => (
                <li key={index} className="flex items-start">
                  <div className="h-8 w-8 rounded-lg bg-green-500 flex items-center justify-center mr-3 flex-shrink-0 shadow-md">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="text-lg text-white font-medium">{strength}</div>
                </li>
              ))}
            </ul>
            
            <div className="mt-auto p-3 bg-green-600 bg-opacity-60 rounded-lg shadow-lg mb-1">
              <p className="text-center font-medium text-white text-base">
                Our structured approach ensures quality components while managing costs effectively, supporting successful smart agriculture implementation.
              </p>
            </div>
          </div>
          
          {/* Right column - Logo, Thank you and Questions */}
          <div className="flex flex-col gap-5">
            {/* Logo section */}
            <div className="bg-white bg-opacity-20 p-4 rounded-lg shadow-xl flex flex-col items-center justify-center">
              <div className="w-36 h-36 mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-full h-full text-green-100">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              
              <h3 className="text-2xl font-bold mb-2 text-white">Smart Agriculture Initiative</h3>
              <p className="text-center text-base text-white">
                Enabling data-driven farming through innovative IoT technologies
              </p>
            </div>
            
            {/* Thank you and Questions sections */}
            <div className="grid grid-cols-2 gap-4">
              {/* Thank you section */}
              <div className="bg-white bg-opacity-20 p-4 rounded-lg shadow-xl flex flex-col items-center justify-center">
                <h3 className="text-2xl font-bold mb-2 text-white">Thank You</h3>
                <div className="w-14 h-14 mb-1">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-full h-full text-green-100">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              
              {/* Questions section */}
              <div className="bg-white bg-opacity-20 p-4 rounded-lg shadow-xl flex flex-col items-center justify-center">
                <h3 className="text-2xl font-bold mb-2 text-white">Questions?</h3>
                <div className="w-14 h-14 mb-1">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-full h-full text-green-100">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Handle type="source" position={Position.Bottom} id="a" />
    </div>
  );
};

export default SmartAgriConclusionNode; 