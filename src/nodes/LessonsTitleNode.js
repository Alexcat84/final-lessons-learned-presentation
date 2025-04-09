import React from 'react';
import { Handle, Position } from 'reactflow';

const LessonsTitleNode = ({ data }) => {
  // Define team members outside JSX to avoid rendering issues
  const teamMembers = data.teamMembers || [
    'Team Symphony'
  ];

  return (
    <div className="p-4 rounded-xl shadow-xl bg-gradient-to-br from-sky-600 via-blue-700 to-indigo-800 w-[650px] h-[500px] relative overflow-hidden">
      <Handle type="target" position={Position.Top} />
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-sky-200 opacity-20 rounded-full -mr-32 -mt-32 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-200 opacity-20 rounded-full -ml-24 -mb-24"></div>
      
      {/* Additional background patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute h-full w-1/5 left-0 bg-white opacity-10"></div>
        <div className="absolute h-full w-1/5 left-[20%] bg-white opacity-5"></div>
        <div className="absolute h-full w-1/5 left-[40%] bg-white opacity-10"></div>
        <div className="absolute h-full w-1/5 left-[60%] bg-white opacity-5"></div>
        <div className="absolute h-full w-1/5 left-[80%] bg-white opacity-10"></div>
      </div>
      
      {/* Music-themed icon */}
      <div className="absolute top-6 right-6 w-16 h-16 text-white opacity-40">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
        </svg>
      </div>

      <div className="absolute bottom-6 right-6 w-16 h-16 text-white opacity-40">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
      
      {/* Smaller decorative icons */}
      <div className="absolute top-16 left-8 w-8 h-8 text-sky-200 opacity-30 transform rotate-12">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
      
      <div className="absolute bottom-16 left-10 w-8 h-8 text-sky-200 opacity-30 transform -rotate-12">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
        </svg>
      </div>
      
      <div className="flex flex-col items-center justify-between h-full text-white text-center py-3 relative z-10">
        {/* Course code */}
        <div className="bg-blue-600 bg-opacity-70 px-4 py-1.5 rounded-lg shadow-lg">
          <p className="text-white text-lg font-bold">{data.courseCode || "25W_MGT4209_300 Applied Project Management"}</p>
        </div>
        
        {/* Title */}
        <div className="relative">
          <h1 className="text-3xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-100 drop-shadow-lg">
            {data.title || "Sing for Wishes: Karaoke Fundraiser for Make-A-Wish Canada"}
          </h1>
          <div className="w-60 h-1 bg-gradient-to-r from-sky-300 to-blue-400 opacity-90 mx-auto mt-1 mb-2 rounded-full shadow-lg"></div>
          <h2 className="text-2xl font-semibold mb-2 text-white">
            {data.subtitle || "Team Symphony - Lessons Learned Presentation"}
          </h2>
        </div>
        
        {/* Professor information */}
        <div className="bg-white bg-opacity-20 backdrop-blur-sm px-6 py-1.5 rounded-lg mb-2 max-w-md border-2 border-sky-300 border-opacity-30 shadow-lg">
          <p className="text-white text-lg font-medium">{data.professor || "Professor: David Salomon"}</p>
        </div>
        
        {/* Team members section */}
        <div className="bg-white bg-opacity-20 backdrop-blur-sm px-6 py-3 rounded-lg mb-2 max-w-md border-2 border-sky-300 border-opacity-30 shadow-lg">
          <h3 className="text-lg font-bold mb-2 text-white">Team:</h3>
          <div className="flex justify-center">
            {teamMembers.map((member, index) => (
              <div key={index} className="flex items-center bg-blue-600 bg-opacity-40 px-2 py-1 rounded-md shadow-md">
                <div className="h-2.5 w-2.5 rounded-full bg-sky-300 mr-2 flex-shrink-0"></div>
                <p style={{color: 'white', fontWeight: 'normal', opacity: 1}} className="text-white text-sm whitespace-nowrap">
                  {member}
                </p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Date */}
        <div className="bg-blue-600 bg-opacity-70 px-8 py-1.5 rounded-lg border-2 border-sky-300 border-opacity-50 shadow-lg transform hover:scale-[1.05] transition-transform duration-300 mb-2">
          <p className="text-white text-lg font-bold">{data.date || "April 9, 2025"}</p>
        </div>
      </div>
      
      <Handle type="source" position={Position.Bottom} id="a" />
    </div>
  );
};

export default LessonsTitleNode; 