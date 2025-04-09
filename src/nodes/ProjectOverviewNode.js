import React from 'react';
import { Handle, Position } from 'reactflow';

const ProjectOverviewNode = ({ data }) => {
  const overviewPoints = data.overviewPoints || [
    { 
      label: 'Campaign goal', 
      value: 'Raise funds for Make-A-Wish Canada through a karaoke event',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    { 
      label: 'Initial fundraising target', 
      value: '$1,000',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    { 
      label: 'Event location', 
      value: 'Sonnys Bar & Grill, Ottawa',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    { 
      label: 'Original event date', 
      value: 'March 28, 2025',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    },
    { 
      label: 'Rescheduled date', 
      value: 'April 1, 2025 (due to severe weather)',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      )
    }
  ];

  return (
    <div className="p-4 rounded-xl shadow-xl bg-gradient-to-br from-sky-500 to-blue-700 w-[650px] h-[500px] relative overflow-hidden">
      <Handle type="target" position={Position.Top} />
      
      {/* Minimal decorative elements */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-sky-200 opacity-20 rounded-full -mr-32 -mt-32 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-200 opacity-20 rounded-full -ml-24 -mb-24"></div>
      
      {/* Music note icon with animation */}
      <div className="absolute top-4 right-4 w-12 h-12 text-white opacity-30 transform animate-pulse-slow">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
        </svg>
      </div>
      
      <div className="flex flex-col h-full text-white py-0.5 relative z-10">
        {/* Compact title */}
        <div className="mb-2 text-center">
          <h2 className="text-3xl font-bold mb-0.5 text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-100 drop-shadow-lg">
            {data.title || "Project Overview"}
          </h2>
          <div className="w-44 h-0.5 bg-gradient-to-r from-sky-300 via-blue-400 to-sky-300 opacity-90 mx-auto rounded-full shadow-lg"></div>
        </div>
        
        {/* Ultra-compact overview points */}
        <div className="flex-grow px-1">
          <div className="grid grid-cols-1 gap-1.5 max-w-2xl mx-auto">
            {overviewPoints.map((point, index) => (
              <div 
                key={index} 
                className="bg-gradient-to-r from-blue-900/40 to-sky-900/40 backdrop-blur-sm p-1.5 rounded-lg border border-sky-300 border-opacity-30 shadow-md"
              >
                <div className="flex items-center space-x-2.5">
                  <div className="h-7 w-7 bg-gradient-to-br from-sky-400 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-md shadow-blue-500/20">
                    {point.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-sky-200 text-sm leading-tight">{point.label}</h3>
                    <p className="text-white font-medium leading-tight">
                      {index === 5 ? (
                        <span className="flex flex-col">
                          <span>April 1, 2025</span>
                          <span className="text-xs text-sky-200">(Rescheduled due to severe weather)</span>
                        </span>
                      ) : (
                        point.value
                      )}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Simplified Make-A-Wish mention */}
        <div className="text-center mb-1">
          <div className="inline-block bg-gradient-to-r from-sky-500 to-blue-600 px-3 py-1 rounded-lg shadow-md border border-sky-300 border-opacity-30">
            <div className="flex items-center">
              <span className="text-xs font-medium text-sky-100">Supporting</span>
              <span className="text-white font-bold ml-1.5 text-sm">Make-A-Wish Canada</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 ml-1.5 text-sky-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      
      <Handle type="source" position={Position.Bottom} id="a" />
    </div>
  );
};

export default ProjectOverviewNode; 