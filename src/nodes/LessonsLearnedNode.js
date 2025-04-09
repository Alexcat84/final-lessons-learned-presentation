import React from 'react';
import { Handle, Position } from 'reactflow';

const LessonsLearnedNode = ({ data }) => {
  const lessons = data.lessons || [
    { 
      title: 'Weather Risk Planning', 
      description: 'Winter events require specific contingency plans',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      )
    },
    { 
      title: 'Multi-Channel Marketing', 
      description: 'Combining online and in-person approaches yields best results',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
        </svg>
      )
    },
    { 
      title: 'Community Support', 
      description: 'Ottawa residents showed exceptional generosity for noble causes',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )
    },
    { 
      title: 'Stakeholder Coordination', 
      description: 'Effective management of all parties was crucial for success',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    { 
      title: 'Decisive Action', 
      description: 'Quick response to opportunities directly led to exceeding our goals',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    }
  ];

  return (
    <div className="p-4 rounded-xl shadow-xl bg-gradient-to-br from-violet-600 via-purple-700 to-indigo-800 w-[650px] h-[500px] relative overflow-hidden flex flex-col">
      <Handle type="target" position={Position.Top} />
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-pink-300 opacity-20 rounded-full -mr-32 -mt-32 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-300 opacity-20 rounded-full -ml-24 -mb-24"></div>
      
      {/* Light bulb icon */}
      <div className="absolute top-6 right-6 w-14 h-14 text-pink-200 opacity-40">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      </div>
      
      <div className="flex flex-col h-full text-white relative z-10">
        {/* Title - Más compacto */}
        <div className="mb-3 text-center">
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-200 to-indigo-100 drop-shadow-lg">
            {data.title || "Personal Lessons Learned"}
          </h2>
          <div className="w-60 h-1 bg-gradient-to-r from-pink-400 to-fuchsia-500 opacity-90 mx-auto mt-1 rounded-full shadow-lg"></div>
        </div>
        
        {/* Contenedor principal que ocupa todo el espacio disponible */}
        <div className="flex-1 flex flex-col justify-between pb-4">
          {/* Primera fila con 4 lecciones - distribuidas uniformemente */}
          <div className="grid grid-cols-2 gap-4 px-2 mb-5">
            {lessons.slice(0, 4).map((lesson, index) => (
              <div 
                key={index} 
                className="bg-gradient-to-br from-purple-900 to-indigo-900 p-3 rounded-lg border border-pink-400 border-opacity-30 shadow-lg flex items-start space-x-3"
              >
                <div className="flex-shrink-0 text-pink-300">
                  {lesson.icon}
                </div>
                <div>
                  <h3 className="font-bold text-base text-pink-200">{lesson.title}</h3>
                  <p className="text-white font-medium text-sm">{lesson.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Última lección centrada - posicionada en la parte inferior */}
          {lessons.length >= 5 && (
            <div className="px-2 flex justify-center">
              <div 
                className="bg-gradient-to-br from-purple-900 to-indigo-900 p-3 rounded-lg border border-pink-400 border-opacity-30 shadow-lg flex items-start space-x-3 max-w-[80%]"
              >
                <div className="flex-shrink-0 text-pink-300">
                  {lessons[4].icon}
                </div>
                <div>
                  <h3 className="font-bold text-base text-pink-200">{lessons[4].title}</h3>
                  <p className="text-white font-medium text-sm">{lessons[4].description}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      
      <Handle type="source" position={Position.Bottom} id="a" />
    </div>
  );
};

export default LessonsLearnedNode; 