const fs = require('fs');
const path = require('path');

try {
    console.log('🔍 Iniciando script de corrección de build...');
    
    // Ruta al index.html generado y a la plantilla
    const indexPath = path.resolve(__dirname, 'build', 'index.html');
    const templatePath = path.resolve(__dirname, 'public', 'index-netlify.html');
    
    console.log(`📁 Buscando archivos necesarios...`);
    
    if (!fs.existsSync(indexPath)) {
        throw new Error(`⛔ No se encontró el archivo index.html en ${indexPath}`);
    }
    
    if (!fs.existsSync(templatePath)) {
        throw new Error(`⛔ No se encontró la plantilla en ${templatePath}`);
    }
    
    // Leer el archivo build generado y la plantilla
    let generatedHtml = fs.readFileSync(indexPath, 'utf8');
    let templateHtml = fs.readFileSync(templatePath, 'utf8');
    
    console.log(`📄 Contenido original del build:\n${generatedHtml.slice(0, 200)}...`);
    
    // Extraer scripts y estilos del build generado
    const scriptMatch = generatedHtml.match(/<script defer="defer" src="[^"]+"><\/script>/g);
    const styleMatch = generatedHtml.match(/<link href="[^"]+" rel="stylesheet">/g);
    
    if (!scriptMatch) {
        console.warn('⚠️ No se encontraron scripts en el HTML generado');
    }
    
    if (!styleMatch) {
        console.warn('⚠️ No se encontraron estilos en el HTML generado');
    }
    
    // Extraer los scripts y estilos
    const scripts = scriptMatch ? scriptMatch.join('\n') : '';
    const styles = styleMatch ? styleMatch.join('\n') : '';
    
    // Corregir las rutas relativas
    const fixedScripts = scripts.replace(/src="\.\//g, 'src="/');
    const fixedStyles = styles.replace(/href="\.\//g, 'href="/');
    
    console.log(`✓ Scripts y estilos extraídos y corregidos`);
    
    // Insertar scripts y estilos en la plantilla
    let newHtml = templateHtml.replace('<!-- Los scripts y estilos se agregarán dinámicamente -->', 
        `${fixedStyles}\n    ${fixedScripts}`);
    
    // Escribir el archivo modificado
    fs.writeFileSync(indexPath, newHtml);
    console.log(`✓ Archivo index.html reemplazado con la versión corregida`);
    console.log(`📄 Nuevo contenido:\n${newHtml.slice(0, 200)}...`);
    
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
    console.log(`✓ Archivo 404.html creado`);
    
    // Crear archivo _redirects
    const redirectsPath = path.resolve(__dirname, 'build', '_redirects');
    fs.writeFileSync(redirectsPath, '/* /index.html 200');
    console.log(`✓ Archivo _redirects creado`);
    
    // Crear archivo _headers
    const headersPath = path.resolve(__dirname, 'build', '_headers');
    const headersContent = `/*
  Cache-Control: no-cache, no-store, must-revalidate
  Pragma: no-cache
  Expires: 0

/static/*
  Cache-Control: public, max-age=31536000`;
    
    fs.writeFileSync(headersPath, headersContent);
    console.log(`✓ Archivo _headers creado`);
    
    console.log('✅ Build corregido exitosamente!');
} catch (error) {
    console.error('🛑 ERROR al corregir build:', error);
    process.exit(1); // Salir con error para que Netlify muestre el fallo
} 