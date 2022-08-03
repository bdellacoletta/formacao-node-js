const express = require("express");
const app = express();

app.set('view engine', 'ejs'); //dizendo para o express usar o EJS como view engine

app.get("/", (req, res) => {
  res.render('index'); //redireciona a página para o arquivo de html
});

app.listen(8080, () => {
  console.log("servidor rodando...");
});
