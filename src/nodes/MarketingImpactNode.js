import React from 'react';
import { Handle, Position } from 'reactflow';
// Importar la imagen directamente (método preferido en React)
import marketingGraphImage from '../Pictures/Marketing campaign results - Copy.png';

const MarketingImpactNode = ({ data }) => {
  // Función directa para intentar abrir la carpeta (solución final)
  const openMarketingFolder = (e) => {
    e.stopPropagation();
    
    // Crear un mensaje con instrucciones claras
    const instructions = "Para ver el contenido de marketing, por favor:\n\n" +
                         "1. Abre el explorador de archivos\n" +
                         "2. Navega a: C:\\Users\\HP\\Desktop\\Lessons Learned Presentation\\src\\Marketing";
    
    alert(instructions);
    
    // Intento adicional: abrir la carpeta del proyecto GitHub si está hospedado allí
    window.open('https://github.com/YOUR_USERNAME/Lessons-Learned-Presentation/tree/main/src/Marketing', '_blank');
  };

  return (
    <div className="p-0 rounded-xl shadow-xl bg-gradient-to-br from-sky-400 to-blue-700 w-[650px] h-[500px] relative overflow-hidden">
      <Handle type="target" position={Position.Top} />
      
      {/* Decorative elements with lower opacity */}
      <div className="absolute top-0 right-0 w-60 h-60 bg-blue-200 opacity-10 rounded-full -mr-20 -mt-20"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-200 opacity-10 rounded-full -ml-16 -mb-16"></div>
      
      {/* Chart icon aligned to top right */}
      <div className="absolute top-6 right-8 w-12 h-12 text-white opacity-20">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      </div>
      
      <div className="flex flex-col h-full text-white p-6 relative z-10">
        {/* Title - Reducido espaciado */}
        <div className="mb-3 text-center">
          <h2 className="text-3xl font-bold text-white">
            {data.title || "Marketing Campaign Impact"}
          </h2>
          <div className="w-80 h-1 bg-white opacity-40 mx-auto mt-2 rounded-full"></div>
        </div>
        
        {/* Marketing Visuals - Espacio reducido */}
        <div className="flex-grow flex flex-col items-center justify-center space-y-4">
          {/* Daily Social Media Engagement */}
          <div className="relative bg-blue-600 p-4 rounded-2xl border border-blue-300 border-opacity-30 shadow-lg w-full">
            {/* Título y contador de vistas en la misma línea con justificación entre ellos */}
            <div className="flex justify-between items-center mb-2 px-2">
              <h3 className="text-white font-semibold text-lg">Daily Social Media Engagement</h3>
              <div className="bg-blue-500 bg-opacity-60 px-3 py-1 rounded-lg border border-blue-300 border-opacity-30 flex items-center shadow-lg transform hover:scale-105 transition-transform duration-200">
                {/* Icono de flecha ascendente/tendencia positiva */}
                <div className="mr-2 text-green-300 animate-pulse">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-white font-bold text-sm">5.1K views in total</span>
              </div>
            </div>
            
            {/* Imagen estática del gráfico con altura reducida */}
            <div className="relative bg-white rounded-2xl overflow-hidden flex justify-center items-center" style={{ height: '220px' }}>
              {/* Usar la imagen importada */}
              <img 
                src={marketingGraphImage} 
                alt="Daily Social Media Engagement Graph" 
                className="w-full h-full object-contain"
              />
            </div>
          </div>
          
          {/* Key Insights con altura reducida */}
          <div className="grid grid-cols-3 gap-3 w-full px-2">
            {/* Bilingual Content - Con un enfoque directo */}
            <div className="bg-blue-600 rounded-xl border border-blue-300 border-opacity-30 shadow-lg p-3 text-center relative group hover:translate-y-[-2px] transition-all duration-300">
              <p className="text-blue-100 font-semibold mb-0">Bilingual</p>
              
              {/* Botón explícito en lugar de una tarjeta clickeable */}
              <button 
                onClick={openMarketingFolder}
                className="mt-1 w-full bg-gradient-to-r from-green-400 to-blue-500 text-white font-bold rounded-lg py-1 px-3 shadow-md focus:outline-none hover:shadow-lg transition-all duration-300 flex items-center justify-center"
              >
                Content
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M2 6a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1H8a3 3 0 00-3 3v1.5a1.5 1.5 0 01-3 0V6z" clipRule="evenodd" />
                  <path d="M6 12a2 2 0 012-2h8a2 2 0 012 2v2a2 2 0 01-2 2H2h2a2 2 0 002-2v-2z" />
                </svg>
              </button>
              
              {/* Añadir un enlace de descarga alternativo que podría funcionar en algunos contextos */}
              <a 
                href="src/Marketing" 
                className="hidden"
                download
                target="_blank"
                rel="noopener noreferrer"
              >
                Backup Link
              </a>
              
              {/* Tooltip claro */}
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-1 w-48 bg-gray-800 text-white text-xs font-bold rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-lg border border-green-300">
                Click to see marketing materials
              </div>
            </div>
            <div className="bg-blue-600 rounded-xl border border-blue-300 border-opacity-30 shadow-lg p-3 text-center">
              <p className="text-blue-100 font-semibold mb-0">Multi-Platform</p>
              <p className="text-xl font-bold">Strategy</p>
            </div>
            <div className="bg-blue-600 rounded-xl border border-blue-300 border-opacity-30 shadow-lg p-3 text-center">
              <p className="text-blue-100 font-semibold mb-0">Community</p>
              <p className="text-xl font-bold">Engagement</p>
            </div>
          </div>
        </div>
      </div>
      
      <Handle type="source" position={Position.Bottom} id="a" />
    </div>
  );
};

export default MarketingImpactNode; 