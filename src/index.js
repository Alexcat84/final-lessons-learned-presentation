import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// Función para manejar errores globales
window.addEventListener('error', function(e) {
  console.error('Error global:', e);
  // Puedes agregar algún tipo de notificación visual aquí si lo deseas
});

// Renderizar la aplicación directamente
try {
  console.log('Iniciando renderizado de McKinsey 7-S Model');
  const rootElement = document.getElementById('root');
  
  if (!rootElement) {
    throw new Error('No se encontró el elemento root');
  }
  
  // Renderizamos directamente la aplicación sin pantalla de carga
  ReactDOM.render(<App />, rootElement);
  
} catch (error) {
  console.error('Error crítico al inicializar:', error);
  
  // Si falla completamente, mostramos un mensaje de error
  document.body.innerHTML = `
    <div style="text-align: center; padding: 50px; font-family: Arial, sans-serif;">
      <h1>Error al inicializar la presentación McKinsey 7-S Model</h1>
      <p>Error: ${error.message}</p>
      <button onclick="window.location.reload()" style="background-color: #2563eb; color: white; border: none; padding: 10px 20px; border-radius: 4px; cursor: pointer; font-size: 16px; margin-top: 20px;">
        Intentar nuevamente
      </button>
    </div>
  `;
}
