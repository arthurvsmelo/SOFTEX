const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 8080;

var registros = [];

app.use(cors());
app.use(bodyParser.urlencoded({extend: false}));
app.use(bodyParser.json());

app.get('/registros/todos', (req, res)=>{
    res.status(200).send(registros);
});

app.get('/registros/:id', (req, res)=>{
    let id = req.params.id;
    if (id > 0 && id <= artigos.length){
        res.status(200).send(registros[id - 1]);
    }
    else {
        res.status(404).send('Registro não encontrado!');
    }
});

app.post('/registros/add', (req, res)=>{
    let registro = req.body;
    let idx = registro.length + 1;
    registros.push(registro);
    registro.idx = idx;
    res.status(201).send('Registro adicionado com sucesso.');
});

app.put('/registros/editar/:id', (req, res)=>{
    let id = req.params.id;
    if (id > 0 && id <= artigos.length){
        let registro = req.body;
        registros[id - 1] = registro;
        res.status(200).send(registro);
    }
    else {
        res.status(404).send('Registro não encontrado!');
    }
});

app.delete('/registros/remover/:id', (req, res)=>{
    let id = req.params.id;
    if (id > 0 && id <= artigos.length){
        registros.splice(id - 1, 1);
        res.status(200).send('Registro removido.');
    }
    else {
        res.status(404).send('Registro não encontrado!');
    }
});

app.all('*', (req, res)=>{
    res.status(404).send('Página não encontrada.');
})

app.listen(port, ()=>{
    console.log('Server running at port 8080...');
});