//HTTP
const http = require('http');

const server = http.createServer((req,res) => {

    if(req.url === '/'){
        res.end('Welcome to out Home Page')
        return
    }
    if(req.url === '/about'){
        res.end('Here is our short history')
        return;
    }
    res.end(`
    <h1>Ooops!</h1>
    <p>we can't seem to find the page you are looking for</p>
    <a href="/">back home</a>
    `);
})

server.listen(3000);