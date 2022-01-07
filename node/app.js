const http = require('http');
const host = 'localhost';
const port = 8080;


const server = http.createServer(async (req, res) => {
    var message = [];
    message.push('банан', 'яблоко', 'персик','банан', 'яблоко', 'персик');
if (req.method === 'GET'){
        if (message.length < 5) {
            message.push();
        }
        else {
            message.shift(); 
        }
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end(console.log(message));
    }
});

server.listen(port, host, () => {
    console.log(`http://${host}:${port}`);
});

