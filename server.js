
const http = require('http');

const server = http.createServer((req,res) => {

    console.log(req.method);
    console.log(req.headers['user-agent']);

    const memoryData = process.memoryUsage();
    
    console.log(`Used heap: ${(memoryData.heapUsed / 1024 / 1024).toFixed(2)} MB`);
    res.end('Server is running on 3000 port');
});

server.listen(3000);