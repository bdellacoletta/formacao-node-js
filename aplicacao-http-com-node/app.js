var http = require("http");

http.createServer(function(req, res) {
  res.end("<h1>Bem-vindo!</h1>");
}).listen(8080);

console.log("o servidor está rodando...");
