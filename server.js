
const express = require('express');

const app = express();

app.listen(3000);

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) =>{
    res.sendFile('./view/index.html', { root: __dirname });
})