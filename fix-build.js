const fs = require('fs');
const path = require('path');

// Ruta al index.html generado
const indexPath = path.resolve(__dirname, 'build', 'index.html');

// Leer el archivo
let htmlContent = fs.readFileSync(indexPath, 'utf8');

// Reemplazar todas las rutas relativas que comienzan con ./ por rutas absolutas 
htmlContent = htmlContent.replace(/href="\.\//g, 'href="/');
htmlContent = htmlContent.replace(/src="\.\//g, 'src="/');

// Añadir la etiqueta base después de la etiqueta head
htmlContent = htmlContent.replace(/<head>/, '<head>\n  <base href="/" />');

// Agregar script para manejar redirecciones SPA
const redirectScript = `
  <script>
    // Verificar si hay una redirección almacenada
    (function() {
      var redirect = sessionStorage.redirect;
      delete sessionStorage.redirect;
      if (redirect && redirect !== location.href) {
        history.replaceState(null, null, redirect);
      }
    })();
  </script>
`;

// Insertar el script antes del cierre de head
htmlContent = htmlContent.replace('</head>', `${redirectScript}\n</head>`);

// Escribir el archivo modificado
fs.writeFileSync(indexPath, htmlContent);

// Crear archivo 404.html
const notFoundPath = path.resolve(__dirname, 'build', '404.html');
const notFoundContent = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Redireccionando...</title>
  <script>
    // Redireccionamiento para aplicaciones SPA en Netlify
    sessionStorage.redirect = location.href;
  </script>
  <meta http-equiv="refresh" content="0;URL='/'">
</head>
<body>
  <h1>Redireccionando...</h1>
  <p>Si no eres redirigido automáticamente, <a href="/">haz clic aquí</a>.</p>
</body>
</html>`;

fs.writeFileSync(notFoundPath, notFoundContent);

// Crear archivo _redirects
const redirectsPath = path.resolve(__dirname, 'build', '_redirects');
fs.writeFileSync(redirectsPath, '/* /index.html 200');

console.log('✅ Build corregido exitosamente!'); 