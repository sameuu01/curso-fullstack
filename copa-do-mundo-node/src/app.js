import express from "express";

const app = express();

// Indicar para express ler o body com json
app.use(express.json());
import conexao from "../infra/conexao.js";

// Rota principal
app.get("/", (req, res) => {
    res.send("Olá copa do mundo!");
})

// Buscar todas seleções
app.get('/selecoes', (req, res) => {
    const sql = "select * from selecoes";

    conexao.query(sql, (erro, result) => {
        res.json(result);
    })
})

export default app;