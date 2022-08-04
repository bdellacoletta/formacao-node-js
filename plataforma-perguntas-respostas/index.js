const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.set('view engine', 'ejs'); //dizendo para o express usar o EJS como view engine
app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.render('index'); //redireciona a página para o arquivo de html
});

app.get("/perguntar", (req, res) => {
  res.render('perguntar');
});

app.post("/salvarpergunta", (req, res) => {
  res.send("formulário recebido");
});

app.listen(8080, () => {
  console.log("servidor rodando...");
});
