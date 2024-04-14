const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.sendFile('views/index.html', { root: __dirname })
    })

data = {'integrantes':[
    {'nome':'Luiz Carlos Francisco Junior'},
    {'nome':'Aline Santos Ferreira'},
    {'nome':'Juan Fernando Lovera Saume'},
    {'nome':'Lucas Pereira de Barros'},
]}
    
app.get('/integrantes', (req, res) => {
    res.json(data)
})