import React from 'react';
import { Handle, Position } from 'reactflow';

const SmartAgriRolesNode = ({ data }) => {
  // Definir los roles y responsabilidades exactamente como lo solicitó el usuario
  const roles = data.roles || [
    { title: "Project Manager", responsibility: "Overall accountability" },
    { title: "Procurement Manager", responsibility: "Process execution" },
    { title: "Technical Lead", responsibility: "Technical specifications and evaluation" },
    { title: "Quality Assurance Manager", responsibility: "Inspection and testing" },
    { title: "Finance Manager", responsibility: "Cost analysis and payment processing" },
    { title: "Legal Counsel", responsibility: "Contract development and review" }
  ];

  // Función para obtener el color basado en el índice
  const getRoleColorClass = (index) => {
    const colors = ['bg-green-500', 'bg-blue-500', 'bg-purple-500', 'bg-orange-500', 'bg-teal-500', 'bg-indigo-500'];
    return colors[index % colors.length];
  };

  return (
    <div className="rounded-xl bg-green-600 w-[900px] h-[600px] relative overflow-hidden">
      <Handle type="target" position={Position.Top} />
      
      {/* Grid background */}
      <div className="absolute inset-0">
        <div className="w-full h-full grid grid-cols-12 grid-rows-12">
          {Array.from({ length: 12 }).map((_, rowIndex) => (
            Array.from({ length: 12 }).map((_, colIndex) => (
              <div key={`${rowIndex}-${colIndex}`} className="border border-white border-opacity-10"></div>
            ))
          ))}
        </div>
      </div>
      
      {/* Main content container */}
      <div className="flex flex-col h-full text-white relative z-10 p-4">
        {/* Title with simple styling */}
        <h2 className="text-5xl font-bold text-center text-white mb-2">
          Roles and Responsibilities
        </h2>
        <div className="w-40 h-0.5 bg-white mx-auto mb-4"></div>
        
        {/* Main content - Clear ownership section */}
        <div className="flex flex-col flex-grow">
          <h3 className="text-3xl font-semibold text-white text-center mb-3">
            Clear ownership for each procurement phase
          </h3>
          
          {/* Roles grid - 2 columnas para que quepan todos los roles */}
          <div className="grid grid-cols-2 gap-3 px-8 flex-grow">
            {roles.map((role, index) => (
              <div key={index} className="bg-white bg-opacity-20 rounded-lg p-3 flex items-center">
                <div className={`w-10 h-10 ${getRoleColorClass(index)} rounded-full flex items-center justify-center font-bold text-white mr-3`}>
                  {role.title.charAt(0)}
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">{role.title}</h4>
                  <p className="text-sm text-white opacity-90">{role.responsibility}</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Mensaje de cierre */}
          <div className="mt-4 text-center px-8">
            <p className="text-lg text-white opacity-90 bg-white bg-opacity-20 p-3 rounded-lg">
              Clear ownership ensures streamlined decision-making and accountability throughout the procurement process.
            </p>
          </div>
        </div>
      </div>
      
      <Handle type="source" position={Position.Bottom} id="a" />
    </div>
  );
};

export default SmartAgriRolesNode; 