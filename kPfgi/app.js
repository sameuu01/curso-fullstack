const express = require("express");
const app = express();
const port = 3000;

//Variável com os dados 
const alimentos = [
    {id: 1, nome: "Feijão", preco: 10},
    {id: 2, nome: "Carne", preco: 50},
    {id: 3, nome: "Frutas", preco: 70},
    {id: 4, nome: "Sopas", preco: 40}
];

const tiposPratos = [
    {id: 1, tipo: "Prato Executivo" prato: "Feijão com farinha"},
    {id: 2, tipo: "Prato feito" prato: "Carne de burro"},
    {id: 3 tipo: "Sobremesas" prato: "Bolo de Morango"},
    {id: 4, tipo: "Adicional" prato: "Sopa de abóbora"}

]

// Criar uma função
// Rota principal
app.get('/', (req, res) => {
    res.send("Bem vindo ao meu projeto de Alimentos");
});

//Produtos
app.get('/produtos', (req, res) => {
    res.send(alimentos)
})

app.get('/pratos', (req, res) => {
    res.send(tiposPratos)
})

//Executando o servidor
app.listen(port, () => {
    console.log(`Servidor do projeto rodando em http://localhost:${port}`)
})