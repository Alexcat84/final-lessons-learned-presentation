import React from 'react';
import { Handle, Position } from 'reactflow';

const ProjectExecutionNode = ({ data }) => {
  return (
    <div className="p-0 rounded-xl shadow-xl bg-gradient-to-br from-sky-600 to-blue-800 w-[650px] h-[500px] relative overflow-hidden">
      <Handle type="target" position={Position.Top} />
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-sky-200 opacity-20 rounded-full -mr-32 -mt-32 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-200 opacity-20 rounded-full -ml-24 -mb-24"></div>
      
      {/* Icono de cámara */}
      <div className="absolute top-6 right-6 w-14 h-14 text-white opacity-30">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      </div>
      
      <div className="flex flex-col h-full text-white p-4 relative z-10">
        {/* Título */}
        <div className="mb-3 text-center">
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-100 drop-shadow-lg">
            {data.title || "Project Execution"}
          </h2>
          <div className="w-60 h-1 bg-gradient-to-r from-sky-300 to-blue-300 opacity-90 mx-auto mt-1 rounded-full shadow-lg"></div>
        </div>
        
        {/* Contenido principal */}
        <div className="flex-grow flex flex-col">
          {/* Texto superior */}
          <div className="text-center mb-3">
            <p className="text-sky-100 font-medium text-xl">
              {data.description || "Fundraising Event and Contingency Plan Execution"}
            </p>
          </div>
          
          {/* Collage de imágenes */}
          <div className="grid grid-cols-3 grid-rows-2 gap-3 h-64 w-full max-w-2xl mx-auto mb-4">
            {/* Imagen 1 */}
            <div className="rounded-lg overflow-hidden border-2 border-sky-300 border-opacity-50 shadow-xl">
              <div className="w-full h-full bg-blue-700 bg-opacity-50 flex flex-col items-center justify-center text-white text-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white opacity-60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                </svg>
              </div>
            </div>
            
            {/* Imagen 2 */}
            <div className="rounded-lg overflow-hidden border-2 border-sky-300 border-opacity-50 shadow-xl">
              <div className="w-full h-full bg-blue-700 bg-opacity-50 flex flex-col items-center justify-center text-white text-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white opacity-60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                </svg>
              </div>
            </div>
            
            {/* Imagen 3 */}
            <div className="rounded-lg overflow-hidden border-2 border-sky-300 border-opacity-50 shadow-xl">
              <div className="w-full h-full bg-blue-700 bg-opacity-50 flex flex-col items-center justify-center text-white text-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white opacity-60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            
            {/* Imagen 4 */}
            <div className="rounded-lg overflow-hidden border-2 border-sky-300 border-opacity-50 shadow-xl">
              <div className="w-full h-full bg-blue-700 bg-opacity-50 flex flex-col items-center justify-center text-white text-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white opacity-60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
            
            {/* Video */}
            <div className="rounded-lg overflow-hidden border-2 border-sky-300 border-opacity-50 shadow-xl">
              <div className="w-full h-full bg-blue-800 bg-opacity-70 flex flex-col items-center justify-center text-white text-center">
                <div className="rounded-full h-16 w-16 bg-white bg-opacity-80 flex items-center justify-center shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
            </div>
            
            {/* Imagen 6 */}
            <div className="rounded-lg overflow-hidden border-2 border-sky-300 border-opacity-50 shadow-xl">
              <div className="w-full h-full bg-blue-700 bg-opacity-50 flex flex-col items-center justify-center text-white text-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white opacity-60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76" />
                </svg>
              </div>
            </div>
          </div>
          
          {/* Banner de éxito */}
          <div className="text-center mt-auto">
            <div className="inline-block bg-gradient-to-r from-sky-500 to-blue-600 px-6 py-2 rounded-lg shadow-lg transform hover:scale-[1.02] transition-transform duration-300">
              <span className="text-white font-bold text-lg">Event Successfully Executed Despite Weather Challenges!</span>
            </div>
          </div>
        </div>
      </div>
      
      <Handle type="source" position={Position.Bottom} id="a" />
    </div>
  );
};

export default ProjectExecutionNode; 