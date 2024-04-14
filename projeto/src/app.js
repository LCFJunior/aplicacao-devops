const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.sendFile('views/index.html', { root: __dirname });
});

const data = {
    'integrantes': [
        {'nome': 'Luiz Carlos Francisco Junior'},
        {'nome': 'Aline Santos Ferreira'},
        {'nome': 'Juan Fernando Lovera Saume'},
        {'nome': 'Lucas Pereira de Barros'}
    ]
};

app.get('/integrantes', (req, res) => {
    res.json(data);
});

app.listen(PORT, () => {
    console.log('Servidor rodando na porta ${PORT}');
});
