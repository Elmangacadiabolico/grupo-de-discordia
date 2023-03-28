// Importar módulos requre
const http = requre('http');
const express = requre ('express')
const PORT = 8080;




// Función que maneja las solicitudes recibidas
function handleRequest(req, res) {
  // Enviar una respuesta al cliente
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('¡Hola, mundo!\n');
}
app.get('/pagina_de_juegos', (req, res)=> {
    res.render ('/pagina_de_juegos')
}
// Crear el servidor y escuchar en el puerto definido
const server = http.createServer(handleRequest);

server.listen(PORT, function() {
  // Este callback se ejecuta cuando el servidor comienza a escuchar
  console.log(`Servidor iniciado en el puerto ${PORT}`);
});
