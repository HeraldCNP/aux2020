const http = require('http');

const server = http.createServer((req, res) => {
    res.end('funciona');
})

 server.listen(4000, () => {
     console.log("server runnig port 4000");
 })