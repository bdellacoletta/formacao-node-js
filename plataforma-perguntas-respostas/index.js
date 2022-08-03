const express = require("express");
const app = express();

app.set('view engine', 'ejs'); //dizendo para o express usar o EJS como view engine

app.get("/", (req, res) => {
  res.send("Bem vindo ao meu site!");
});

app.listen(8080, () => {
  console.log("servidor rodando...");
});
