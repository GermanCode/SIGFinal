var http = require("http");
function peticionservidor(req, resp){
	console.log("peticion creada...");
	resp.writeHead(200,{"Content-Type" : "text/html"});
	resp.write("<h1>Bienvenido a node.js</h1>")
	resp.end();

}
http.createServer(peticionservidor).listen(8888);
console.log("Servidor creado");
