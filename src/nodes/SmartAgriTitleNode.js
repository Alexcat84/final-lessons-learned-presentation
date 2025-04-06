import React from 'react';
import { Handle, Position } from 'reactflow';

const SmartAgriTitleNode = ({ data }) => {
  // Definir teamMembers fuera del JSX para evitar problemas de renderizado
  const teamMembers = data.teamMembers || [
    'Alexis García', 
    'Joseph Alabi', 
    'Christabel Ebue', 
    'Oluwatomiwa Osisanya',
    'Eseoghene Atumah'
  ];

  return (
    <div className="p-4 rounded-xl shadow-xl bg-gradient-to-br from-green-600 to-emerald-800 w-[900px] h-[600px] relative overflow-hidden">
      <Handle type="target" position={Position.Top} />
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-green-300 opacity-10 rounded-full -mr-32 -mt-32 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-green-300 opacity-10 rounded-full -ml-24 -mb-24"></div>
      
      {/* Additional background patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute h-full w-1/5 left-0 bg-white opacity-10"></div>
        <div className="absolute h-full w-1/5 left-[20%] bg-white opacity-5"></div>
        <div className="absolute h-full w-1/5 left-[40%] bg-white opacity-10"></div>
        <div className="absolute h-full w-1/5 left-[60%] bg-white opacity-5"></div>
        <div className="absolute h-full w-1/5 left-[80%] bg-white opacity-10"></div>
      </div>
      
      {/* Agriculture-themed icons/graphics */}
      <div className="absolute top-8 right-8 w-20 h-20 text-white opacity-40">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      </div>

      <div className="absolute bottom-8 right-8 w-24 h-24 text-white opacity-40">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
      
      {/* Smaller decorative icons */}
      <div className="absolute top-20 left-10 w-12 h-12 text-green-200 opacity-30 transform rotate-12">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      </div>
      
      <div className="absolute bottom-20 left-12 w-12 h-12 text-green-200 opacity-30 transform -rotate-12">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      </div>
      
      <div className="flex flex-col items-center justify-between h-full text-white text-center py-4 relative z-10">
        {/* Title with reduced size */}
        <div className="relative">
          <h1 className="text-5xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-white to-green-100 drop-shadow-lg">
            {data.title || "Smart Agriculture Technology (IoT) Procurement Plan"}
          </h1>
          <div className="w-44 h-1.5 bg-gradient-to-r from-green-300 to-green-100 opacity-90 mx-auto mt-2 mb-3 rounded-full shadow-lg"></div>
        </div>
        
        {/* Project certificate information */}
        <div className="bg-white bg-opacity-20 px-8 py-2 rounded-lg mb-3 max-w-xl border-2 border-white border-opacity-30 shadow-lg">
          <p className="text-white text-xl font-medium">Project Management Graduate Certificate Level 2</p>
          <p className="text-white text-lg">Professor's Name: Ben Semnani</p>
        </div>
        
        {/* Team members section - Con menos padding */}
        <div className="bg-white bg-opacity-20 px-8 py-4 rounded-lg mb-3 max-w-xl border-2 border-white border-opacity-30 shadow-lg">
          <h3 className="text-xl font-bold mb-3 text-white">Team Members:</h3>
          <div className="grid grid-cols-2 gap-x-10 gap-y-2">
            {teamMembers.map((member, index) => (
              <div key={index} className="flex items-center bg-green-800 bg-opacity-40 px-3 py-1.5 rounded-md shadow-md">
                <div className="h-3 w-3 rounded-full bg-green-300 mr-3 flex-shrink-0"></div>
                <p style={{color: 'white', fontWeight: 'normal', opacity: 1}} className="text-white text-base font-medium whitespace-nowrap">
                  {member}
                </p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Fecha - Asegurando que sea visible */}
        <div className="bg-green-500 bg-opacity-70 px-10 py-2 rounded-lg border-2 border-green-300 border-opacity-70 shadow-lg transform hover:scale-[1.05] transition-transform duration-300 mb-4">
          <p className="text-white text-xl font-bold">{data.date || "April 8, 2025"}</p>
        </div>
      </div>
      
      <Handle type="source" position={Position.Bottom} id="a" />
    </div>
  );
};

export default SmartAgriTitleNode; 