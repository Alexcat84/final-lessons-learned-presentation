import React from 'react';
import { Handle, Position } from 'reactflow';

const SmartAgriSolicitationNode = ({ data }) => {
  const methods = data.methods || [
    { name: "Request for Information (RFI)", description: "Gathering market information" },
    { name: "Request for Proposal (RFP)", description: "Detailed technical and commercial proposal" },
    { name: "Request for Quotation (RFQ)", description: "Price-focused for well-defined items" }
  ];

  const contents = data.contents || [
    "Technical specifications for IoT devices and sensors",
    "Data management requirements and integration specifications",
    "Service level agreements and performance metrics",
    "Acceptance criteria and testing protocols",
    "Training and knowledge transfer requirements",
    "Maintenance and support expectations"
  ];

  const phases = [
    { name: "Planning", status: "complete", icon: "📋" },
    { name: "Development", status: "complete", icon: "✏️" },
    { name: "Review", status: "active", icon: "🔍" },
    { name: "Release", status: "upcoming", icon: "🚀" },
    { name: "Evaluation", status: "upcoming", icon: "⚖️" }
  ];
  
  // Helper function to get status color class
  const getStatusColorClass = (status) => {
    if (status === 'complete') return 'text-green-300 font-bold';
    if (status === 'active') return 'text-yellow-300 font-bold';
    return 'text-white font-medium';
  };
  
  // Helper function to get background color class for method
  const getMethodBgClass = (index) => {
    if (index === 0) return 'bg-blue-500';
    if (index === 1) return 'bg-green-500'; 
    return 'bg-orange-500';
  };
  
  // Helper function to get method status text
  const getMethodStatusText = (index) => {
    if (index === 0) return 'Information Gathering';
    if (index === 1) return 'Selected for this procurement';
    return 'Alternative option';
  };
  
  // Helper function to get gradient class
  const getGradientClass = (index) => {
    if (index === 0) return 'from-blue-500 to-blue-600';
    if (index === 1) return 'from-green-500 to-green-600';
    return 'from-orange-500 to-orange-600';
  };

  return (
    <div className="p-2 rounded-xl shadow-xl bg-gradient-to-br from-green-600 to-emerald-800 w-[900px] h-[600px] relative overflow-hidden">
      <Handle type="target" position={Position.Top} />
      
      {/* Enhanced decorative elements */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-green-300 opacity-20 rounded-full -mr-32 -mt-32"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-green-300 opacity-20 rounded-full -ml-24 -mb-24"></div>
      
      {/* Document pattern decoration */}
      <div className="absolute inset-0">
        <svg width="100%" height="100%" className="absolute opacity-10">
          <pattern id="document-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <rect x="0" y="0" width="80" height="90" rx="5" fill="none" stroke="white" strokeWidth="1" />
            <line x1="10" y1="15" x2="70" y2="15" stroke="white" strokeWidth="1" />
            <line x1="10" y1="25" x2="70" y2="25" stroke="white" strokeWidth="1" />
            <line x1="10" y1="35" x2="40" y2="35" stroke="white" strokeWidth="1" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#document-pattern)" />
        </svg>
      </div>
      
      <div className="flex flex-col h-full text-white">
        <h2 className="text-4xl font-bold mb-2 text-center text-white drop-shadow-lg">
          Solicitation Process
        </h2>
        
        {/* Solicitation phases progress bar */}
        <div className="mb-2">
          <div className="flex justify-between">
            {phases.map((phase, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center"
              >
                <div className={`h-11 w-11 rounded-full flex items-center justify-center text-xl 
                  ${phase.status === 'complete' ? 'bg-green-500 border-2 border-white border-opacity-50' : 
                    phase.status === 'active' ? 'bg-yellow-500 border-2 border-white border-opacity-50' : 
                    'bg-white bg-opacity-30 border-2 border-white border-opacity-20'}`}>
                  {phase.icon}
                </div>
                <div className="text-base font-bold text-white mt-1">
                  {phase.name}
                </div>
                <div className={`text-sm ${getStatusColorClass(phase.status)}`}>
                  {phase.status === 'complete' ? 'Completed' : 
                    phase.status === 'active' ? 'In Progress' : 
                    'Upcoming'}
                </div>
              </div>
            ))}
          </div>
          
          <div className="h-2 bg-white bg-opacity-30 rounded-full w-full mt-1 mb-2 relative">
            <div className="absolute h-full bg-gradient-to-r from-green-400 to-yellow-400 rounded-full" style={{width: '50%'}}></div>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-3 flex-grow">
          {/* Left column - Solicitation methods */}
          <div className="bg-green-700 bg-opacity-40 rounded-lg shadow-lg overflow-hidden">
            <div className="flex items-center px-4 py-2 bg-green-600 bg-opacity-30">
              <span className="bg-white bg-opacity-20 w-7 h-7 inline-flex items-center justify-center rounded-full mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4.5 w-4.5 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                </svg>
              </span>
              <h3 className="text-xl font-bold text-white">Solicitation Methods</h3>
            </div>
            
            <div className="space-y-3 p-3">
              {methods.map((method, index) => (
                <div 
                  key={index} 
                  className="bg-green-400 bg-opacity-20 rounded-lg overflow-hidden"
                >
                  <div className="p-2">
                    <div className="flex items-center">
                      <div className={`h-10 w-10 rounded-full flex items-center justify-center ${getGradientClass(index)} mr-3`}>
                        {index === 0 ? (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                          </svg>
                        ) : index === 1 ? (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                          </svg>
                        ) : (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1.323l3.954 1.582 1.599-.8a1 1 0 01.894 1.79l-1.233.616 1.738 5.42a1 1 0 01-.285 1.05A3.989 3.989 0 0115 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.715-5.349L11 6.477V16h2a1 1 0 110 2H7a1 1 0 110-2h2V6.477L6.237 7.582l1.715 5.349a1 1 0 01-.285 1.05A3.989 3.989 0 015 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.738-5.42-1.233-.617a1 1 0 01.894-1.788l1.599.799L9 4.323V3a1 1 0 011-1z" clipRule="evenodd" />
                          </svg>
                        )}
                      </div>
                      <div>
                        <h4 className="font-bold text-white text-lg">{method.name}</h4>
                        <p className="text-white text-base">{method.description}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className={`px-4 py-1.5 ${getMethodBgClass(index)} text-white text-center font-medium w-min whitespace-nowrap rounded-full ml-3 mb-2`}>
                    {getMethodStatusText(index)}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right column - Solicitation contents */}
          <div className="flex flex-col gap-3">
            <div className="bg-green-700 bg-opacity-40 rounded-lg shadow-lg overflow-hidden flex-grow">
              <div className="flex items-center px-4 py-2 bg-green-600 bg-opacity-30">
                <span className="bg-white bg-opacity-20 w-7 h-7 inline-flex items-center justify-center rounded-full mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4.5 w-4.5 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                    <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                  </svg>
                </span>
                <h3 className="text-xl font-bold text-white">RFP Key Contents</h3>
              </div>
              
              <div className="relative p-3">
                <div className="absolute left-7 top-3 bottom-3 w-1 bg-green-500 bg-opacity-40"></div>
                
                <div className="space-y-2 pl-9">
                  {contents.map((content, index) => (
                    <div 
                      key={index} 
                      className="relative bg-green-400 bg-opacity-20 rounded-lg p-2 shadow-md"
                    >
                      <div className="absolute left-0 top-1/2 w-7 h-7 bg-green-500 rounded-full flex items-center justify-center -ml-11 -mt-3.5">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      
                      <div className="text-white text-sm">{content}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="bg-green-700 bg-opacity-40 rounded-lg shadow-lg overflow-hidden p-3">
              <div className="flex items-center justify-between">
                <div className="text-xl font-bold text-white flex items-center">
                  <span className="inline-block bg-yellow-500 w-3 h-3 rounded-full mr-2"></span>
                  Current Status
                </div>
                <div className="text-yellow-300 font-bold text-xl">Under Review</div>
              </div>
              <div className="flex justify-between">
                <div className="text-base text-white">Time remaining:</div>
                <div className="text-base text-white font-bold">3 days</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Handle type="source" position={Position.Bottom} id="a" />
    </div>
  );
};

export default SmartAgriSolicitationNode; 