import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Solución para el error del ResizeObserver
const fixResizeObserverIssue = () => {
  const originalConsoleError = console.error;
  console.error = function(msg) {
    if (msg.toString().includes('ResizeObserver') || 
        msg.toString().includes('ResizeObserver loop limit exceeded')) {
      return;
    }
    originalConsoleError.apply(console, arguments);
  };
};

// Arreglar problemas conocidos
fixResizeObserverIssue();

// Configuración para capturar errores en producción
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error capturado por boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ 
          padding: '20px', 
          backgroundColor: '#f8d7da', 
          color: '#721c24',
          borderRadius: '4px',
          margin: '20px',
          fontFamily: 'Arial, sans-serif'
        }}>
          <h1>Algo salió mal :(</h1>
          <p>Ha ocurrido un error en la aplicación.</p>
          <pre style={{ 
            backgroundColor: '#f1f1f1', 
            padding: '10px',
            borderRadius: '4px',
            overflowX: 'auto'
          }}>
            {this.state.error && (this.state.error.stack || this.state.error.message || String(this.state.error))}
          </pre>
          <button 
            onClick={() => window.location.reload()}
            style={{
              backgroundColor: '#007bff',
              color: 'white',
              border: 'none',
              padding: '10px 15px',
              borderRadius: '4px',
              cursor: 'pointer',
              marginTop: '10px'
            }}
          >
            Recargar página
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

// Renderizar la aplicación con manejo de errores
try {
  const root = document.getElementById('root');
  if (!root) {
    throw new Error('No se pudo encontrar el elemento root');
  }
  
  const reactRoot = ReactDOM.createRoot(root);
  reactRoot.render(
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  );
} catch (error) {
  console.error('Error fatal durante la inicialización:', error);
  document.body.innerHTML = `
    <div style="padding: 20px; background-color: #f8d7da; color: #721c24; border-radius: 4px; margin: 20px; font-family: Arial, sans-serif">
      <h1>Error de inicialización</h1>
      <p>No se pudo iniciar la aplicación:</p>
      <pre style="background-color: #f1f1f1; padding: 10px; border-radius: 4px; overflow-x: auto">
        ${error.message || String(error)}
      </pre>
      <button onclick="window.location.reload()" style="background-color: #007bff; color: white; border: none; padding: 10px 15px; border-radius: 4px; cursor: pointer; margin-top: 10px">
        Recargar página
      </button>
    </div>
  `;
}

// Para medir el rendimiento
reportWebVitals(console.log);
