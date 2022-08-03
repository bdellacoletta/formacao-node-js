const express = require("express");
const app = express();

app.set('view engine', 'ejs'); //dizendo para o express usar o EJS como view engine

app.get("/:nome/:language", (req, res) => {
  var nome = req.params.nome;
  var language = req.params.language;
  res.render('index', { //redireciona a página para o arquivo de html
    nome: nome,
    language: language,
    empresa: "Guia do programador",
    inscritos: 8000
  });
});

app.listen(8080, () => {
  console.log("servidor rodando...");
});
