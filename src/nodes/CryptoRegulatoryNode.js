import React from 'react';
import { Handle, Position } from 'reactflow';

const CryptoRegulatoryNode = ({ data }) => {
  const regions = data.outcomes || data.transformations || [
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
  ];

  const challenges = data.challenges || [
    "Identifying concentration risks in crypto deposits",
    "Recognizing market signals early",
    "Assessing crypto-related counterparty risks",
    "Understanding technical infrastructure vulnerabilities",
    "Establishing appropriate risk metrics"
  ];

  return (
    <div className="p-3 rounded-xl shadow-xl bg-gradient-to-br from-indigo-800 to-blue-900 w-[650px] h-[450px] relative overflow-hidden">
      <Handle type="target" position={Position.Top} />

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-300 opacity-10 rounded-full -mr-24 -mt-24 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-300 opacity-10 rounded-full -ml-16 -mb-16"></div>
      
      {/* Additional decorative elements - network lines */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(6)].map((_, i) => (
          <div 
            key={i} 
            className="absolute h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent" 
            style={{
              top: `${Math.random() * 100}%`,
              left: 0,
              right: 0,
              opacity: Math.random() * 0.5 + 0.3
            }}
          ></div>
        ))}
        {[...Array(6)].map((_, i) => (
          <div 
            key={i} 
            className="absolute w-px bg-gradient-to-b from-transparent via-purple-300 to-transparent" 
            style={{
              left: `${Math.random() * 100}%`,
              top: 0,
              bottom: 0,
              opacity: Math.random() * 0.5 + 0.3
            }}
          ></div>
        ))}
      </div>

      <div className="flex flex-col h-full text-white relative z-10">
        {/* Header */}
        <div className="mb-1 text-center">
          <h2 className="text-xl font-bold text-white mb-0.5">{data.title || "Risk Identification in Crypto Market Integration"}</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-300 to-purple-300 mx-auto mb-1"></div>
          <div className="bg-indigo-600 bg-opacity-40 p-1 rounded-lg inline-block mx-auto">
            <p className="text-sm font-medium">
              {data.riskConcept || "Failures in early identification of crypto risk signals"}
            </p>
          </div>
        </div>

        {/* Content section */}
        <div className="flex-grow flex flex-col md:flex-row gap-2">
          {/* Left column - Real-world example */}
          <div className="flex-1 bg-white bg-opacity-10 rounded-lg p-2 shadow-inner flex flex-col justify-between">
            <div>
              <h3 className="text-base font-semibold mb-0.5 text-blue-100">Real-World Example:</h3>
              <p className="text-white text-opacity-90 text-xs">
                {data.realWorldExample || "Silvergate Bank and Signature Bank collapsed in 2023 by failing to properly identify their concentration risk in crypto deposits, while Fidelity detected early signals and established Fidelity Digital Assets in 2017, capturing market share."}
              </p>
            </div>
            
            {/* Outcomes */}
            <div className="mt-1.5">
              <h3 className="text-base font-semibold mb-1 text-blue-100">Outcomes:</h3>
              <div className="space-y-1.5">
                {regions.map((region, index) => (
                  <div key={index} className="flex flex-col">
                    <div className={`rounded-lg py-1.5 px-2 bg-opacity-80 bg-gradient-to-r ${region.color}`}>
                      <div className="flex justify-between items-center">
                        <h4 className="font-bold text-base">{region.name}</h4>
                        <span className="text-base font-semibold">{region.status}</span>
                      </div>
                      <p className="text-xs">{region.details}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right column - Challenges section */}
          <div className="flex-1 bg-white bg-opacity-10 rounded-lg p-2 flex flex-col justify-between">
            <div>
              <h3 className="text-base font-semibold mb-2 text-blue-100">Key Challenges:</h3>
              <ul className="space-y-2.5">
                {challenges.map((challenge, index) => (
                  <li key={index} className="flex items-center">
                    <div className="h-6 w-6 rounded-full bg-blue-400 mr-2 flex-shrink-0 flex items-center justify-center shadow-sm">
                      <span className="text-sm font-bold">{index + 1}</span>
                    </div>
                    <p className="text-white text-xs">{challenge}</p>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Visual element */}
            <div className="mt-2 bg-gradient-to-br from-indigo-700 to-purple-800 rounded-lg flex items-center justify-center p-2">
              <div className="text-center text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-auto mb-0.5 text-blue-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-xs">Early identification is critical for navigating crypto market risks</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Handle type="source" position={Position.Bottom} id="a" />
    </div>
  );
};

export default CryptoRegulatoryNode; 