import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Configuración para capturar errores en producción
const ErrorBoundary = ({ children }) => {
  const [hasError, setHasError] = React.useState(false);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    // Manejador global de errores
    const errorHandler = (event) => {
      console.error('Error no capturado:', event.error);
      setHasError(true);
      setError(event.error);
      event.preventDefault();
    };

    window.addEventListener('error', errorHandler);
    return () => window.removeEventListener('error', errorHandler);
  }, []);

  if (hasError) {
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
          {error && (error.stack || error.message || String(error))}
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

  return children;
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);

// Para medir el rendimiento
reportWebVitals(console.log);
