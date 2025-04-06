import React from 'react';
import { Handle, Position } from 'reactflow';

const SmartAgriTimelineNode = ({ data }) => {
  // Definir todos los hitos del proceso de adquisición de 36 semanas
  const allMilestones = [
    { 
      milestone: "Requirements Approved", 
      week: "Week 3",
      status: "complete" 
    },
    { 
      milestone: "Procurement Strategy Finalized", 
      week: "Week 5",
      status: "complete" 
    },
    { 
      milestone: "RFP/RFQ Package Developed", 
      week: "Week 7",
      status: "complete" 
    },
    { 
      milestone: "RFP/RFQ Issued", 
      week: "Week 8",
      status: "complete" 
    },
    { 
      milestone: "Supplier Proposals Received", 
      week: "Week 12",
      status: "complete" 
    },
    { 
      milestone: "Supplier Selected", 
      week: "Week 15",
      status: "current" 
    },
    { 
      milestone: "Contract Signed", 
      week: "Week 19",
      status: "upcoming" 
    },
    { 
      milestone: "Initial Order Placed", 
      week: "Week 20",
      status: "upcoming" 
    },
    { 
      milestone: "First Shipment Received", 
      week: "Week 24",
      status: "upcoming" 
    },
    { 
      milestone: "Final Delivery Completed", 
      week: "Week 30",
      status: "upcoming" 
    },
    { 
      milestone: "Final Acceptance Completed", 
      week: "Week 32",
      status: "upcoming" 
    },
    { 
      milestone: "Final Payment Processed", 
      week: "Week 34",
      status: "upcoming" 
    },
    { 
      milestone: "Procurement Project Closed", 
      week: "Week 36",
      status: "upcoming" 
    }
  ];
  
  // Primera fila: 7 primeros hitos
  const topRowMilestones = allMilestones.slice(0, 7);
  
  // Segunda fila: 6 hitos restantes
  const bottomRowMilestones = allMilestones.slice(7);
  
  // Helper para determinar el color basado en el estado
  const getStatusColor = (status) => {
    if (status === "complete") return "green";
    if (status === "current") return "yellow";
    // Cambio: Asignar colores a los hitos futuros en lugar de gris
    return "blue"; // Ahora usamos azul en lugar de gris para los hitos futuros
  };
  
  // Obtener la clase de Tailwind basada en el color
  const getColorClass = (color, type) => {
    const colors = {
      green: {
        bg: "bg-green-500",
        border: "border-green-500",
        text: "text-green-100",
        line: "bg-green-300"
      },
      yellow: {
        bg: "bg-yellow-500",
        border: "border-yellow-500",
        text: "text-yellow-300",
        line: "bg-yellow-300"
      },
      blue: {
        bg: "bg-blue-400",
        border: "border-blue-400",
        text: "text-blue-100",
        line: "bg-blue-300"
      },
      gray: {
        bg: "bg-gray-300",
        border: "border-gray-300",
        text: "text-gray-100",
        line: "bg-gray-300"
      },
      purple: {
        bg: "bg-purple-400",
        border: "border-purple-400",
        text: "text-purple-100",
        line: "bg-purple-300"
      },
      teal: {
        bg: "bg-teal-400",
        border: "border-teal-400",
        text: "text-teal-100",
        line: "bg-teal-300"
      },
      indigo: {
        bg: "bg-indigo-400",
        border: "border-indigo-400",
        text: "text-indigo-100",
        line: "bg-indigo-300"
      },
      cyan: {
        bg: "bg-cyan-400",
        border: "border-cyan-400",
        text: "text-cyan-100",
        line: "bg-cyan-300"
      }
    };
    
    return colors[color][type];
  };

  return (
    <div className="rounded-xl bg-green-600 w-[900px] h-[600px] relative overflow-hidden">
      <Handle type="target" position={Position.Top} />
      
      {/* Círculos decorativos sutiles */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-green-300 opacity-10 rounded-full -mr-32 -mt-32"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-green-300 opacity-10 rounded-full -ml-24 -mb-24"></div>
      
      {/* Contenido principal */}
      <div className="flex flex-col h-full text-white relative z-10 p-4">
        {/* Título */}
        <h2 className="text-7xl font-bold text-center text-white mb-10">
          Procurement Timeline
        </h2>
        
        {/* Primera fila - Texto superior y timeline principal */}
        <div className="mb-16">
          {/* Recuadros de texto superiores */}
          <div className="flex justify-between mb-8">
            {topRowMilestones.map((milestone, index) => (
              <div key={index} className="w-[115px] text-center px-2">
                <div className="text-base font-bold mb-2">{milestone.milestone}</div>
                <div className={`text-sm ${getColorClass(getStatusColor(milestone.status), "text")} font-semibold px-2 py-1 rounded-full bg-black bg-opacity-20`}>
                  {milestone.week}
                </div>
              </div>
            ))}
          </div>
          
          {/* Línea de timeline principal con círculos */}
          <div className="relative flex items-center">
            {/* Línea horizontal */}
            <div className="absolute left-0 right-0 h-2 bg-gradient-to-r from-green-400 via-yellow-400 to-gray-300"></div>
            
            {/* Círculos con números */}
            <div className="w-full flex justify-between">
              {topRowMilestones.map((milestone, index) => {
                const color = getStatusColor(milestone.status);
                
                return (
                  <div key={index} className="relative">
                    <div className={`h-12 w-12 ${getColorClass(color, "bg")} border-4 border-white rounded-full flex items-center justify-center z-10`} id={index === 6 ? "circle-7" : ""}>
                      <div className="text-white font-bold text-lg">
                        {index + 1}
                      </div>
                    </div>
                    
                    {/* Línea vertical hacia arriba (más corta para no interferir con el texto) */}
                    <div className={`h-8 w-0.5 ${getColorClass(color, "line")} absolute -top-8 left-1/2 transform -translate-x-1/2`}></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        
        {/* Segunda fila - Línea inferior y texto abajo */}
        <div>
          {/* Línea de timeline secundaria con círculos */}
          <div className="relative flex items-center mb-8">
            {/* Línea horizontal - Especificando claramente el color y eliminando elementos confusos */}
            <div className="absolute left-0 right-0 h-2 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-400"></div>
            
            {/* Círculos con números */}
            <div className="w-full flex justify-between">
              {bottomRowMilestones.map((milestone, index) => {
                // Asignar colores diferentes a cada círculo para mayor variedad visual
                const colorOptions = ["blue", "purple", "teal", "indigo", "cyan", "blue"];
                const color = colorOptions[index % colorOptions.length]; 
                const globalIndex = index + topRowMilestones.length;
                
                return (
                  <div key={index} className="relative">
                    <div className={`h-12 w-12 ${getColorClass(color, "bg")} border-4 border-white rounded-full flex items-center justify-center z-10 shadow-lg`} id={index === 0 ? "circle-8" : ""}>
                      <div className="text-white font-bold text-lg">
                        {globalIndex + 1}
                      </div>
                      
                      {/* Efecto de brillo */}
                      <div className="absolute inset-0 rounded-full bg-white opacity-20 animate-pulse"></div>
                    </div>
                    
                    {/* Línea vertical hacia abajo - Ahora para TODOS los círculos inferiores */}
                    <div className={`h-8 w-0.5 ${getColorClass(color, "line")} absolute -bottom-8 left-1/2 transform -translate-x-1/2`}></div>
                  </div>
                );
              })}
            </div>
          </div>
          
          {/* Recuadros de texto inferiores */}
          <div className="flex justify-between">
            {bottomRowMilestones.map((milestone, index) => (
              <div key={index} className="w-[130px] text-center px-2">
                <div className="text-base font-bold mb-2">{milestone.milestone}</div>
                <div className={`text-sm ${getColorClass(getStatusColor(milestone.status), "text")} font-semibold px-2 py-1 rounded-full bg-black bg-opacity-20`}>
                  {milestone.week}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <Handle type="source" position={Position.Bottom} id="a" />
    </div>
  );
};

export default SmartAgriTimelineNode; 