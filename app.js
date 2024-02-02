// npm - global command, comes with node
// npm --version

// local dependency - use it only in this particular project
// npm i <packageName>

// global dependency - use it any project 
// npm install -g <packageName>
// sudo npm install -g <packageName> (mac)

// package.json - manifest file (stores important info about project/package)
// manual approach (create package.json in the root, create properties etc)
// npm init (step by step, press enter to skip)
// npm init -y (everything default)

//dev packages (npm i nodemon (--save-dev or -D))

/*
const {writeFileSync} = require('fs')
for (let i = 0; i < 10000; i++) {
    writeFileSync('./content/big.txt', `Here is your ID ${i}\n`,{flag: 'a'})
}
*/

const http = require('http');
const fs = require('fs');

/*http.createServer((req,res) => {
    const first = fs.readFileSync('./content/big.txt', 'utf8');
    res.end(first);
}).listen(5000)
*/

http.createServer((req, res) => {
    const stream = fs.createReadStream('./content/big.txt', 'utf8');
    stream.on('open', () => {
        stream.pipe(res);
    })
    stream.on('error', (er) => {
        res.end(er);
    })
}).listen(5000)