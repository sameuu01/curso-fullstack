const express = require("express");
const app = express();

const PORT = 3000;  //Executar na porta 3000

//Rota Principal
app.get('/', (req, res) => {
    res.send("Rota principal");
});

// Rota teste
app.get('/teste', (req, res) => {
    res.send("Rota teste");
});

app.listen(PORT, () => {
    console.log(`Servidor rodando no endereço http://localhost:${PORT}`)
})