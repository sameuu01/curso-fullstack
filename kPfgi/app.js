const express = require("express");
const app = express();
const port = 3000;

//Middleware
app.use(express.static('public'));

//Variável com os dados 
const alimentos = [
    {id: 1, nome: "Feijão", preco: 10},
    {id: 2, nome: "Carne", preco: 50},
    {id: 3, nome: "Frutas", preco: 70},
    {id: 4, nome: "Sopas", preco: 40}
];

// Criar uma função
// Rota principal
app.get('/', (req, res) => {
    res.send("Bem vindo ao meu projeto de Alimentos");
});

//Produtos
app.get('/produtos', (req, res) => {
    res.send(alimentos)
});

//Rota home
app.get('/home', (req, res) => {
    // console.log("Olá", __dirname)
    res.sendFile(__dirname + '/public/index.html');
});

//Executando o servidor
app.listen(port, () => {
    console.log(`Servidor do projeto rodando em http://localhost:${port}`)
});