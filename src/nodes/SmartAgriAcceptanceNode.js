import React from 'react';
import { Handle, Position } from 'reactflow';

const SmartAgriAcceptanceNode = ({ data }) => {
  const steps = data.steps || [
    "Pre-shipment inspection",
    "Component receipt and initial inspection",
    "Technical acceptance testing",
    "Certification of acceptance",
    "Payment processing",
    "Procurement closure"
  ];
  
  const paymentMilestones = data.paymentMilestones || [
    { name: "After shipment approval", percentage: 20 },
    { name: "Upon acceptance", percentage: 70 },
    { name: "Retention", percentage: 10 }
  ];

  // Colores suavizados para los gráficos
  const softColors = {
    shipment: "rgba(168, 230, 207, 0.9)",      // Verde menta suave
    acceptance: "rgba(146, 204, 179, 0.9)",    // Verde salvia suave
    retention: "rgba(112, 178, 144, 0.9)",     // Verde musgo suave
    barFill: "linear-gradient(to right, rgba(168, 230, 207, 0.9), rgba(112, 178, 144, 0.9))"
  };

  return (
    <div className="p-4 rounded-xl shadow-xl bg-gradient-to-br from-green-600 to-emerald-800 w-[900px] h-[600px] relative overflow-hidden">
      <Handle type="target" position={Position.Top} />
      
      {/* Enhanced decorative elements */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-green-300 opacity-10 rounded-full -mr-32 -mt-32"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-green-300 opacity-10 rounded-full -ml-24 -mb-24"></div>
      
      {/* Checkmark icon */}
      <div className="absolute top-6 right-6 w-16 h-16 text-white opacity-20">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
      
      <div className="flex flex-col h-full text-white">
        <h2 className="text-4xl font-bold mb-3 text-center text-transparent bg-clip-text bg-gradient-to-r from-white to-green-100 drop-shadow-lg">
          Acceptance System
        </h2>
        
        <div className="grid grid-cols-2 gap-4 flex-grow">
          {/* Left column - Acceptance Steps with enhanced styling - espaciado actualizado para distribución uniforme */}
          <div className="bg-white bg-opacity-25 backdrop-filter backdrop-blur-sm p-3 rounded-lg shadow-xl border-2 border-white border-opacity-30 flex flex-col">
            <h3 className="text-2xl font-bold mb-3 text-white text-center drop-shadow-sm">Acceptance Process</h3>
            
            {/* Contenedor con distribución uniforme vertical */}
            <div className="flex-grow flex flex-col justify-between">
              {steps.map((step, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-200 to-emerald-300 rounded-full flex items-center justify-center shadow-lg text-green-800 font-bold mr-2 flex-shrink-0 border-2 border-white border-opacity-30">
                    {index + 1}
                  </div>
                  <div className="bg-green-700 bg-opacity-40 p-2.5 rounded-lg shadow-md border-2 border-white border-opacity-20 flex-grow">
                    <h4 className="text-base font-semibold text-white drop-shadow-sm">{step}</h4>
                  </div>
                </div>
              ))}
              
              {/* Vertical progress line */}
              <div className="absolute left-7.5 top-[103px] bottom-6 w-0.5 bg-gradient-to-b from-green-200 via-emerald-300 to-transparent opacity-50 -z-10 ml-1"></div>
            </div>
          </div>
          
          {/* Right column - Payment milestones with enhanced styling */}
          <div className="bg-white bg-opacity-25 backdrop-filter backdrop-blur-sm p-3 rounded-lg shadow-xl border-2 border-white border-opacity-30 flex flex-col">
            <h3 className="text-2xl font-bold mb-3 text-white text-center drop-shadow-sm">Payment Structure</h3>
            
            <div className="space-y-4 mb-2">
              {paymentMilestones.map((milestone, index) => (
                <div key={index} className="transform transition-all hover:translate-y-[-2px] duration-200">
                  <div className="flex justify-between items-center mb-1">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-200 to-emerald-300 flex items-center justify-center mr-2 shadow-md border-2 border-white border-opacity-30 text-green-800">
                        <span className="font-bold">{index + 1}</span>
                      </div>
                      <span className="text-base font-semibold text-white drop-shadow-sm">{milestone.name}</span>
                    </div>
                    <div className="bg-green-700 bg-opacity-40 rounded-full px-3 py-0.5 shadow-inner border-2 border-white border-opacity-20">
                      <span className="text-lg font-bold text-white">{milestone.percentage}%</span>
                    </div>
                  </div>
                  
                  <div className="h-4 w-full bg-green-700 bg-opacity-30 rounded-full overflow-hidden shadow-inner border border-white border-opacity-10">
                    <div 
                      className="h-full rounded-full"
                      style={{ 
                        width: `${milestone.percentage}%`,
                        background: softColors.barFill
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Visual payment distribution with legends integrated - Redesigned to fit better */}
            <div className="mt-auto flex flex-row items-center justify-between">
              {/* Left: Legends */}
              <div className="w-1/3">
                <div className="space-y-1">
                  <div className="flex items-center bg-green-700 bg-opacity-30 p-2 rounded-md">
                    <div className="h-4 w-4 rounded-sm mr-2 border border-white border-opacity-30" 
                         style={{ backgroundColor: softColors.shipment }}></div>
                    <span className="text-sm font-medium text-white">Shipment (20%)</span>
                  </div>
                  <div className="flex items-center bg-green-700 bg-opacity-30 p-2 rounded-md">
                    <div className="h-4 w-4 rounded-sm mr-2 border border-white border-opacity-30"
                         style={{ backgroundColor: softColors.acceptance }}></div>
                    <span className="text-sm font-medium text-white">Acceptance (70%)</span>
                  </div>
                  <div className="flex items-center bg-green-700 bg-opacity-30 p-2 rounded-md">
                    <div className="h-4 w-4 rounded-sm mr-2 border border-white border-opacity-30"
                         style={{ backgroundColor: softColors.retention }}></div>
                    <span className="text-sm font-medium text-white">Retention (10%)</span>
                  </div>
                </div>
              </div>
              
              {/* Right: Donut chart - Made smaller to fit */}
              <div className="w-2/3 flex justify-end pr-6">
                <div className="relative w-40 h-40">
                  {/* Outer ring */}
                  <div className="absolute inset-0 rounded-full border-4 border-white border-opacity-10"></div>
                  
                  {/* Payment segments as pie chart */}
                  <svg viewBox="0 0 100 100" className="absolute inset-0 transform -rotate-90">
                    {/* Background circle */}
                    <circle cx="50" cy="50" r="40" fill="transparent" stroke="rgba(255, 255, 255, 0.1)" strokeWidth="20" />
                    
                    {/* First segment - After shipment */}
                    <circle 
                      cx="50" 
                      cy="50" 
                      r="40" 
                      fill="transparent" 
                      stroke={softColors.shipment}
                      strokeWidth="20"
                      strokeDasharray={`${paymentMilestones[0].percentage * 2.51} 251`} 
                      className="drop-shadow-sm"
                    />
                    
                    {/* Second segment - Upon acceptance */}
                    <circle 
                      cx="50" 
                      cy="50" 
                      r="40" 
                      fill="transparent" 
                      stroke={softColors.acceptance}
                      strokeWidth="20"
                      strokeDasharray={`${paymentMilestones[1].percentage * 2.51} 251`}
                      strokeDashoffset={`${-paymentMilestones[0].percentage * 2.51}`}
                      className="drop-shadow-sm"
                    />
                    
                    {/* Third segment - Retention */}
                    <circle 
                      cx="50" 
                      cy="50" 
                      r="40" 
                      fill="transparent" 
                      stroke={softColors.retention}
                      strokeWidth="20"
                      strokeDasharray={`${paymentMilestones[2].percentage * 2.51} 251`}
                      strokeDashoffset={`${-(paymentMilestones[0].percentage + paymentMilestones[1].percentage) * 2.51}`}
                      className="drop-shadow-sm"
                    />
                  </svg>
                  
                  {/* Labels inside the chart */}
                  <div className="absolute inset-0 flex items-center justify-center flex-col">
                    <div className="text-center bg-green-800 bg-opacity-50 rounded-lg p-2 shadow-md border-2 border-white border-opacity-20">
                      <p className="text-sm font-medium text-white">Total</p>
                      <p className="text-2xl font-bold text-white">100%</p>
                    </div>
                  </div>
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

export default SmartAgriAcceptanceNode; 