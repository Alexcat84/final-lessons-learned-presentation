import React, { useState, useEffect } from 'react';
import { Handle, Position } from 'reactflow';

const ThankYouNode = ({ data }) => {
  // Estados para animaciones
  const [animate, setAnimate] = useState(false);
  const [showParticles, setShowParticles] = useState(false);
  
  // Efecto para iniciar animaciones después de montar el componente
  useEffect(() => {
    const timer1 = setTimeout(() => setAnimate(true), 500);
    const timer2 = setTimeout(() => setShowParticles(true), 1000);
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  // Partículas decorativas animadas
  const particles = Array(15).fill().map((_, i) => ({
    size: 5 + Math.random() * 8,
    left: Math.random() * 100,
    top: Math.random() * 100,
    duration: 3 + Math.random() * 7,
    delay: Math.random() * 2
  }));

  return (
    <div className="p-6 rounded-xl shadow-xl bg-gradient-to-br from-sky-600 via-blue-700 to-indigo-800 w-[650px] h-[500px] relative overflow-hidden">
      <Handle type="target" position={Position.Top} />
      
      {/* Elementos decorativos estáticos */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-sky-200 opacity-20 rounded-full -mr-32 -mt-32 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-200 opacity-20 rounded-full -ml-24 -mb-24"></div>
      
      {/* Círculos decorativos con animación en espiral */}
      <div className="absolute inset-0 opacity-20">
        {animate && (
          <>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border-4 border-sky-300 rounded-full animate-[spin_15s_linear_infinite]"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 border-2 border-blue-300 rounded-full animate-[spin_20s_linear_infinite_reverse]"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-indigo-300 rounded-full animate-[spin_25s_linear_infinite]"></div>
          </>
        )}
      </div>
      
      {/* Partículas flotantes */}
      {showParticles && particles.map((particle, index) => (
        <div 
          key={index}
          className="absolute rounded-full bg-white opacity-70 z-10"
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            animation: `float ${particle.duration}s ease-in-out ${particle.delay}s infinite alternate`,
            boxShadow: '0 0 10px rgba(255, 255, 255, 0.8)'
          }}
        ></div>
      ))}
      
      {/* Iconos decorativos */}
      <div className="absolute top-8 left-8 w-12 h-12 text-sky-200 opacity-30 transform rotate-12 animate-bounce-slow">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
      
      <div className="absolute bottom-8 right-8 w-12 h-12 text-sky-200 opacity-30 transform -rotate-12 animate-pulse">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
      
      {/* Contenido principal con animación de aparición */}
      <div className={`flex flex-col h-full justify-center items-center text-white relative z-10 transition-opacity duration-1000 ${animate ? 'opacity-100' : 'opacity-0'}`}>
        {/* Logo estilizado o símbolo */}
        <div className={`transform transition-all duration-1000 ${animate ? 'scale-100 translate-y-0' : 'scale-50 translate-y-10'}`}>
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-400 to-sky-600 flex items-center justify-center mb-6 mx-auto shadow-xl">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
          </div>
        </div>
        
        {/* Título con animación de aparición */}
        <div className={`text-center transition-all duration-1000 delay-300 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-5xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-100 drop-shadow-lg tracking-wide">
            {data.title || "Thank You"}
          </h1>
          <div className="w-64 h-1 bg-gradient-to-r from-sky-300 via-blue-400 to-sky-300 opacity-90 mx-auto rounded-full shadow-lg"></div>
        </div>
        
        {/* Subtítulo con animación retrasada */}
        <div className={`mt-8 text-center max-w-lg transition-all duration-1000 delay-500 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-2xl font-light text-blue-100 leading-relaxed">
            {data.subtitle || "For your attention and feedback"}
          </p>
        </div>
        
        {/* Detalles de equipo con animación retrasada */}
        <div className={`mt-12 transition-all duration-1000 delay-700 ${animate ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <div className="bg-blue-600 bg-opacity-30 backdrop-blur-sm px-6 py-2 rounded-xl border border-sky-300 border-opacity-50 shadow-lg">
            <p className="text-white text-xl font-medium">
              {data.teamName || "Team Symphony"}
            </p>
          </div>
        </div>
      </div>
      
      <Handle type="source" position={Position.Bottom} id="a" />
      
      {/* Estilos para la animación float */}
      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0) translateX(0) rotate(0); }
          50% { transform: translateY(-20px) translateX(10px) rotate(5deg); }
          100% { transform: translateY(10px) translateX(-10px) rotate(-5deg); }
        }
        
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0) rotate(12deg); }
          50% { transform: translateY(-15px) rotate(12deg); }
        }
      `}</style>
    </div>
  );
};

export default ThankYouNode; 