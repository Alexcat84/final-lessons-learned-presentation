import React from 'react';
import { Handle, Position } from 'reactflow';

const AccomplishmentsNode = ({ data }) => {
  const accomplishments = data.accomplishments || [
    'Exceeded fundraising goal by over 20%',
    'Successfully implemented bilingual (English/French) marketing videos',
    'Developed and executed a 3-week social media campaign',
    'Arranged donation collection points at multiple locations:',
    ['Connor & Kennedy\'s No Frills', 'Sonny Bar & Grill', 'Online platform'],
    'Successfully rescheduled event during ice storm emergency (Risk Assessment)'
  ];

  // Create customized icons for each accomplishment
  const icons = [
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 11l3 3L22 4" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>,
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
    </svg>,
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
    </svg>,
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>,
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
    </svg>
  ];

  return (
    <div className="p-4 rounded-xl shadow-xl bg-gradient-to-br from-sky-600 to-blue-800 w-[650px] h-[500px] relative overflow-hidden">
      <Handle type="target" position={Position.Top} />
      
      {/* Minimal decorative elements */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-sky-200 opacity-20 rounded-full -mr-32 -mt-32 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-200 opacity-20 rounded-full -ml-24 -mb-24"></div>
      
      {/* Trophy icon with enhanced animation */}
      <div className="absolute top-3 right-4 w-12 h-12 text-white opacity-30 transform rotate-6 animate-pulse-slow">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      </div>
      
      <div className="flex flex-col h-full text-white relative z-10">
        {/* Title with enhanced styling - made more compact */}
        <div className="mb-1 text-center">
          <h2 className="text-3xl font-bold mb-0.5 text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-100 drop-shadow-lg">
            {data.title || "Project Accomplishments"}
          </h2>
          <div className="w-60 h-1 bg-gradient-to-r from-sky-300 via-blue-400 to-sky-300 opacity-90 mx-auto rounded-full shadow-lg"></div>
        </div>
        
        {/* Accomplishments with ultra-compact design */}
        <div className="flex-grow px-2 overflow-visible">
          <div className="grid grid-cols-1 gap-1.5 text-base">
            {accomplishments.map((item, index) => {
              if (Array.isArray(item)) {
                return (
                  <div key={index} className="pl-6 relative mt-0.5">
                    <div className="grid grid-cols-1 gap-1">
                      {item.map((subitem, subindex) => (
                        <div 
                          key={subindex} 
                          className="flex items-center pl-5"
                        >
                          <div className="absolute left-0 top-2 h-2 w-2 bg-gradient-to-br from-sky-300 to-blue-400 rounded-full"></div>
                          <span className="text-sky-100 bg-blue-900/40 px-2 py-0.5 rounded-lg shadow-md border border-sky-300 border-opacity-30">
                            {subitem}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              } else {
                return (
                  <div 
                    key={index} 
                    className="bg-gradient-to-r from-blue-900/40 to-sky-900/40 backdrop-blur-sm rounded-lg p-1.5 transform hover:translate-x-1 border border-sky-300 border-opacity-20 shadow-md"
                  >
                    <div className="flex items-center space-x-2">
                      <div className="flex-shrink-0 h-8 w-8 bg-gradient-to-br from-sky-400 to-blue-500 rounded-full flex items-center justify-center shadow-md shadow-blue-500/20">
                        {icons[index % icons.length]}
                      </div>
                      <span className="text-white font-medium flex-grow">
                        {index === 5 ? (
                          <div className="flex flex-col">
                            <span>Successfully rescheduled event</span>
                            <span className="text-sm text-sky-200">(Ice storm emergency response)</span>
                          </div>
                        ) : (
                          item
                        )}
                      </span>
                    </div>
                  </div>
                );
              }
            })}
          </div>
        </div>
        
        {/* Super compact badge */}
        <div className="text-center mt-1">
          <div className="inline-block bg-gradient-to-r from-sky-500 to-blue-600 px-4 py-1 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 border border-sky-300 border-opacity-30">
            <span className="text-white font-bold">120% of Target Goal Achieved!</span>
          </div>
        </div>
      </div>
      
      <Handle type="source" position={Position.Bottom} id="a" />
    </div>
  );
};

export default AccomplishmentsNode; 