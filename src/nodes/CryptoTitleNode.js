import React from 'react';
import { Handle, Position } from 'reactflow';

const CryptoTitleNode = ({ data }) => {
  // Definir teamMembers fuera del JSX para evitar problemas de renderizado
  const teamMembers = data.teamMembers || [
    'Alexis García', 
    'Joseph Alabi', 
    'Christabel Ebue', 
    'Oluwatomiwa Osisanya',
    'Eseoghene Atumah'
  ];

  return (
    <div className="p-4 rounded-xl shadow-xl bg-gradient-to-br from-indigo-700 to-purple-900 w-[650px] h-[450px] relative overflow-hidden">
      <Handle type="target" position={Position.Top} />
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-blue-300 opacity-10 rounded-full -mr-32 -mt-32 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-300 opacity-10 rounded-full -ml-24 -mb-24"></div>
      
      {/* Additional background patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute h-full w-1/5 left-0 bg-white opacity-10"></div>
        <div className="absolute h-full w-1/5 left-[20%] bg-white opacity-5"></div>
        <div className="absolute h-full w-1/5 left-[40%] bg-white opacity-10"></div>
        <div className="absolute h-full w-1/5 left-[60%] bg-white opacity-5"></div>
        <div className="absolute h-full w-1/5 left-[80%] bg-white opacity-10"></div>
      </div>
      
      {/* Crypto-themed icons/graphics - reduced size */}
      <div className="absolute top-6 right-6 w-16 h-16 text-white opacity-40">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      </div>

      <div className="absolute bottom-6 right-6 w-16 h-16 text-white opacity-40">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
      
      {/* Smaller decorative icons - further reduced */}
      <div className="absolute top-16 left-8 w-8 h-8 text-blue-200 opacity-30 transform rotate-12">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      </div>
      
      <div className="absolute bottom-16 left-10 w-8 h-8 text-purple-200 opacity-30 transform -rotate-12">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      </div>
      
      <div className="flex flex-col items-center justify-between h-full text-white text-center py-3 relative z-10">
        {/* Course code */}
        <div className="bg-indigo-600 bg-opacity-70 px-4 py-1.5 rounded-lg shadow-lg">
          <p className="text-white text-lg font-bold">{data.courseCode || "25W_MGT4202_300 Project Risk Management"}</p>
        </div>
        
        {/* Title with reduced size */}
        <div className="relative">
          <h1 className="text-3xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-100 drop-shadow-lg">
            {data.title || "Crypto Currency Impacts on Traditional Financial Markets and World Businesses"}
          </h1>
          <div className="w-40 h-1 bg-gradient-to-r from-blue-300 to-purple-300 opacity-90 mx-auto mt-1 mb-2 rounded-full shadow-lg"></div>
        </div>
        
        {/* Professor information */}
        <div className="bg-white bg-opacity-20 px-6 py-1.5 rounded-lg mb-2 max-w-md border-2 border-white border-opacity-30 shadow-lg">
          <p className="text-white text-lg font-medium">{data.professor || "Professor's Name: Pete Grieve"}</p>
        </div>
        
        {/* Team members section */}
        <div className="bg-white bg-opacity-20 px-6 py-3 rounded-lg mb-2 max-w-md border-2 border-white border-opacity-30 shadow-lg">
          <h3 className="text-lg font-bold mb-2 text-white">Students:</h3>
          <div className="grid grid-cols-2 gap-x-8 gap-y-2">
            {teamMembers.map((member, index) => (
              <div key={index} className="flex items-center bg-indigo-800 bg-opacity-40 px-2 py-1 rounded-md shadow-md">
                <div className="h-2.5 w-2.5 rounded-full bg-blue-300 mr-2 flex-shrink-0"></div>
                <p style={{color: 'white', fontWeight: 'normal', opacity: 1}} className="text-white text-sm whitespace-nowrap">
                  {member}
                </p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Fecha */}
        <div className="bg-indigo-500 bg-opacity-70 px-8 py-1.5 rounded-lg border-2 border-indigo-300 border-opacity-70 shadow-lg transform hover:scale-[1.05] transition-transform duration-300 mb-2">
          <p className="text-white text-lg font-bold">{data.date || "April 8, 2025"}</p>
        </div>
      </div>
      
      <Handle type="source" position={Position.Bottom} id="a" />
    </div>
  );
};

export default CryptoTitleNode; 