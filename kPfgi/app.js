const express = require("express");
const app = express();
const port = 3000;

// Criar uma função
// Rota principal
app.get('/', (req, res) => {
    res.send("Bem vindo ao meu projeto de Alimentos");
});

//Executando o servidor
app.listen(port, () => {
    console.log('Servidor rodando em http://localhost:${port}')
})