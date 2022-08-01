const express = require("express"); //Importando o express
const app = express(); //Iniciando o express

// REQ => DADOS ENVIADOS PELO USUÁRIO
// RES => RESPOSTA QUE VAI SER ENVIADA PARA O USUÁRIO

app.get("/", function(req, res){  //Criando rota de home(localhost:8080/)
  res.send("<h1>Bem-vindo!/h1>")
});

app.get("/blog", function(req, res){  //Criando rota de blog(localhost:8080/blog)
  res.send("<h1>Bem-vindo ao meu blog!</h1>")
});

app.get("/canal/youtube", function(req, res){  //Criando rota de canal/youtube(localhost:8080/canal/youtube)
  res.send("<h1>Bem-vindo ao meu canal!</h1>")
});

app.get("/ola/:nome/:empresa", function(req, res){  //Criando rota de ola com parâmetros 'nome' e 'empresa' (localhost:8080/ola/:nome/:empresa)
  var nome = req.params.nome;
  var empresa = req.params.empresa;
  res.send(`<h1>Olá ${nome} da empresa ${empresa}</h1>`)
});

app.listen(8080, function(erro) { //adicioando número da porta para acesso ao localhost
  if(erro){
    console.log("Ocorreu um erro!");
  } else{
    console.log("Servidor iniciado com sucesso!");
  }
});
