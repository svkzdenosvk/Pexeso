
const express = require('express');

//express app
const app = express();

// register view engine
app.set('view engine', 'ejs');

app.listen(3000);

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) =>{
    //res.sendFile('./view/index.html', { root: __dirname });
    res.render('index');
});

