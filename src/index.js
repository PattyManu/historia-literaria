const express = require('express');
const app = express();


app.get('/', (req, res) => {
    res.send('ola.. este é meu primeiro servidor com o express')
});



