const http = require('http');
const port = 3000;

const server = http.createServer((req, res) => { 
    console.log(req);
    console.log(req.url, req.method, req.headers);
});

server.listen(port);