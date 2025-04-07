import React from 'react';
import { Handle, Position } from 'reactflow';

const CryptoEconomicNode = ({ data }) => {
  // Determinar qué conjunto de datos usar basado en el título de la diapositiva
  const isTransformativeImpact = data.title === "Transformative Impact on Financial Infrastructure" || data.id === "cryptoTransformation";
  const isBusinessTransformation = data.title === "Business Transformation Across Sectors" || data.id === "cryptoBusiness";
  
  // Establecer impactos según el tipo de diapositiva
  const impacts = data.impacts || (
    isTransformativeImpact ? [
      { category: "Traditional banks", value: 85, description: "$17B in annual revenue at risk" },
      { category: "Central bank response", value: 90, description: "114 CBDC projects launched as a defensive response" }
    ] : [
      { category: "PayPal", value: 75, description: "49% increase in engagement after crypto integration (2020)" },
      { category: "Tesla", value: 85, description: "$1.5B in unrealized gains/losses from Bitcoin investment" },
      { category: "BlackRock", value: 90, description: "Bitcoin ETF accumulated $17.7B within months of launch (2024)" }
    ]
  );

  // Establecer ejemplos del mundo real según el tipo de diapositiva
  const realWorldExample = data.realWorldExample || (
    isTransformativeImpact 
      ? "Western Union faced a 30% decline in stock value between 2018-2022 as cryptocurrencies captured the international remittance market with 70% lower fees and settlement times reduced from days to minutes."
      : "Official Trump (TRUMP) token reached $75.35 on January 19, 2025, crashed to $1.21 on January 17 (89.47% drop in 2 days), before partially recovering to $7.92."
  );

  // Establecer el concepto de riesgo según el tipo de diapositiva
  const riskConcept = data.riskConcept || (
    isTransformativeImpact
      ? "Systemic disruption of traditional financial markets"
      : "Extreme crypto market volatility impacting traditional business operations"
  );

  // Establecer información adicional según el tipo de diapositiva
  const additionalInfo = data.additionalInfo || (
    isTransformativeImpact
      ? "Traditional financial institutions are rapidly developing defensive strategies to maintain market relevance against crypto disruption."
      : "Extreme volatility represents a significant risk for businesses integrating cryptocurrencies, potentially creating sudden financial impacts on balance sheets and operations."
  );

  // Establecer el título según el tipo de diapositiva
  const title = data.title || (
    isTransformativeImpact
      ? "Transformative Impact on Financial Infrastructure"
      : "Business Transformation Across Sectors"
  );

  return (
    <div className="p-4 rounded-xl shadow-xl bg-gradient-to-br from-indigo-800 to-purple-900 w-[650px] h-[450px] relative overflow-hidden">
      <Handle type="target" position={Position.Top} />
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-300 opacity-10 rounded-full -mr-24 -mt-24 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-300 opacity-10 rounded-full -ml-16 -mb-16"></div>
      
      {/* Background grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full" style={{ backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      </div>
      
      <div className="relative z-10 h-full flex flex-col">
        {/* Title Section */}
        <div className="mb-3 text-center">
          <h2 className="text-2xl font-bold text-white mb-1">{title}</h2>
          <div className="w-28 h-1 bg-gradient-to-r from-blue-300 to-purple-300 mx-auto mb-1"></div>
          
          <div className="bg-indigo-600 bg-opacity-40 p-1.5 rounded-lg mb-2 inline-block mx-auto">
            <p className="text-base font-medium text-white">
              {riskConcept}
            </p>
          </div>
        </div>
        
        {/* Main Content */}
        <div className="flex-1 flex flex-col md:flex-row gap-4">
          {/* Left Column - Real World Example */}
          <div className="flex-1 bg-white bg-opacity-10 rounded-lg p-3 shadow-lg">
            <h3 className="text-lg font-semibold mb-2 text-blue-100">Real-World Example:</h3>
            <p className="text-white text-opacity-90 text-sm mb-2">
              {realWorldExample}
            </p>
            
            {/* Visual Representation */}
            <div className="mt-2 bg-gradient-to-b from-indigo-800 to-indigo-900 rounded-lg p-2 shadow-inner">
              <div className="flex items-center justify-between">
                {isTransformativeImpact ? (
                  <>
                    <div className="w-1/3 text-center">
                      <svg className="h-10 w-10 mx-auto text-red-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
                      </svg>
                      <p className="text-xs text-red-300 mt-1">30% Decline</p>
                      <p className="text-xs text-red-200">Stock Value</p>
                    </div>
                    
                    <div className="w-1/3 text-center">
                      <svg className="h-10 w-10 mx-auto text-green-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <p className="text-xs text-green-300 mt-1">70% Lower</p>
                      <p className="text-xs text-green-200">Transaction</p>
                      <p className="text-xs text-green-200">Fees</p>
                    </div>
                    
                    <div className="w-1/3 text-center">
                      <svg className="h-10 w-10 mx-auto text-blue-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <p className="text-xs text-blue-300 mt-1">Minutes vs</p>
                      <p className="text-xs text-blue-200">Days</p>
                      <p className="text-xs text-blue-200">Settlement</p>
                      <p className="text-xs text-blue-200">Time</p>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="w-1/3 text-center">
                      <svg className="h-10 w-10 mx-auto text-red-400" viewBox="0 0 24 24" fill="none">
                        <path d="M3 3v18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M5 12l2-2 3 3 8-8 2 2 -12 12" stroke="#FF6B6B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <p className="text-xs text-red-300 mt-1">89.47%</p>
                      <p className="text-xs text-red-200">Price Drop</p>
                    </div>
                    
                    <div className="w-1/3 text-center">
                      <svg className="h-10 w-10 mx-auto text-amber-400" viewBox="0 0 24 24" fill="none">
                        <path d="M12 3v3M12 15v3M5 12h14" stroke="#FCD34D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M8 8l8 8M16 8l-8 8" stroke="#FCD34D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <p className="text-xs text-amber-300 mt-1">2 Days</p>
                      <p className="text-xs text-amber-200">Crash</p>
                      <p className="text-xs text-amber-200">Period</p>
                    </div>
                    
                    <div className="w-1/3 text-center">
                      <svg className="h-10 w-10 mx-auto text-green-400" viewBox="0 0 24 24" fill="none">
                        <path d="M3 17h4l3-6 5 10 4-14 2 10" stroke="#4ADE80" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <p className="text-xs text-green-300 mt-1">554%</p>
                      <p className="text-xs text-green-200">Recovery</p>
                      <p className="text-xs text-green-200">Bounce</p>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
          
          {/* Right Column - Impact Data */}
          <div className="flex-1">
            <h3 className="text-lg font-semibold mb-2 text-blue-100">Quantifiable Impact:</h3>
            
            {/* Impact Bars */}
            <div className="space-y-4">
              {impacts.map((impact, index) => (
                <div key={index} className="bg-white bg-opacity-10 p-2 rounded-lg">
                  <div className="flex justify-between items-center mb-1">
                    <h4 className="text-white text-sm font-medium">{impact.category}</h4>
                    <span className="text-xs bg-indigo-600 bg-opacity-50 px-1.5 py-0.5 rounded text-blue-100">{impact.value}%</span>
                  </div>
                  
                  <div className="relative h-2 bg-gray-700 bg-opacity-40 rounded-full">
                    <div 
                      className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full"
                      style={{ width: `${impact.value}%` }}
                    ></div>
                  </div>
                  
                  <p className="mt-1 text-blue-200 text-xs">{impact.description}</p>
                </div>
              ))}
            </div>
            
            {/* Key Fact Highlight */}
            <div className="mt-4 bg-gradient-to-r from-purple-700 to-indigo-700 p-2 rounded-lg border border-purple-500 border-opacity-30 shadow-lg">
              <div className="flex items-start">
                <svg className="h-6 w-6 text-purple-300 mr-2 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <p className="text-white text-xs">
                    {additionalInfo}
                  </p>
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

export default CryptoEconomicNode; 