const express = require("express");
const app = express();

app.set('view engine', 'ejs'); //dizendo para o express usar o EJS como view engine
app.use(express.static('public'));

app.get("/:nome/:language", (req, res) => {
  var nome = req.params.nome;
  var language = req.params.language;
  var exibirMensagem = false;

  var produtos = [
    {nome: "doritos", preco: 3.14},
    {nome: "coca-cola", preco: 5},
    {nome: "leite", preco: 1.45},
    {nome: "carne", preco: 50},
    {nome: "redbull", preco: 9}
  ];

  res.render('index', { //redireciona a página para o arquivo de html
    nome: nome,
    language: language,
    empresa: "Guia do programador",
    inscritos: 8000,
    mensagem: exibirMensagem,
    produtos: produtos
  });
});

app.listen(8080, () => {
  console.log("servidor rodando...");
});
