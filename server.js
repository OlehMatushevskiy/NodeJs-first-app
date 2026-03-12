
const http = require('http');

const server = http.createServer((req,res) => {

    console.log(req.method);
    console.log(req.headers['user-agent']);
    res.end('Server is running on 3000 port');
});

server.listen(3000);