const http = require('http');

let server = http.createServer((req, res) => {
    res.end('Hello Word');
});

server.listen(3500, function() {
    console.log("Tu servidor está en: " + this.address().port);
});