const express = require('express');
const app = express();
const database = require("./models/db");

app.get("/", async(req, res) => {
    res.send("<h1>Servidor na porta 8080</h1> <i>Página inicial.</i>");
});
app.listen(8080, () => {
    console.log("Servidor iniciado na porta 8080. http://localhost:8080");
});