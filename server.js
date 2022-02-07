const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) =>{

    res.setHeader('Content-Type', 'text/html');

    fs.readFile('./index.html', (err, data) => {
        if (err){
            console.log(err);
            res.end();
        } else {
            res.end(data);
            res.statusCode = 200;
        }
     })
});

server.listen(3002, 'localhost', () => {
    console.log(' yeah');
})