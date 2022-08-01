const express = require("express"); //Importando o express
const app = express(); //Iniciando o express

app.get("/", function(req, res){
  res.send("<h1>Bem-vindo!</h1>")
});

app.get("/blog", function(req, res){
  res.send("<h1>Bem-vindo ao meu blog!</h1>")
});

app.get("/canal/youtube", function(req, res){
  res.send("<h1>Bem-vindo ao meu canal!</h1>")
});

app.listen(8080, function(erro) {
  if(erro){
    console.log("Ocorreu um erro!");
  } else{
    console.log("Servidor iniciado com sucesso");
  }
});
