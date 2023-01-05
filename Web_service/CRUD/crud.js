const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 8080;

var livros = [];

app.use(cors());
app.use(bodyParser.urlencoded({extend: false}));
app.use(bodyParser.json());

app.get('/livros/todos', (req, res)=>{
    res.status(200).send(livros);
});

app.get('/livros/:id', (req, res)=>{
    let id = req.params.id;
    if (id > 0 && id <= artigos.length){
        res.status(200).send(livros[id - 1]);
    }
    else {
        res.status(404).send('Livro não encontrado!');
    }
});

app.post('/livros/add', (req, res)=>{
    let Livro = req.body;
    let idx = Livro.length + 1;
    livros.push(Livro);
    Livro.idx = idx;
    res.status(201).send('Livro adicionado com sucesso.');
});

app.put('/livros/editar/:id', (req, res)=>{
    let id = req.params.id;
    if (id > 0 && id <= artigos.length){
        let Livro = req.body;
        livros[id - 1] = Livro;
        res.status(200).send(Livro);
    }
    else {
        res.status(404).send('Livro não encontrado!');
    }
});

app.delete('/livros/remover/:id', (req, res)=>{
    let id = req.params.id;
    if (id > 0 && id <= artigos.length){
        livros.splice(id - 1, 1);
        res.status(200).send('Livro removido.');
    }
    else {
        res.status(404).send('Livro não encontrado!');
    }
});

app.all('*', (req, res)=>{
    res.status(404).send('Página não encontrada.');
})

app.listen(port, ()=>{
    console.log('Server running at port 8080...');
});