const express = require('express');
const app = express();
app.listen(5000, console.log('Server rodando na porta 5000...'));
app.get('/', (request, response) => {return response.send('Hello World!');
});