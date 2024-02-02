const {readFile, writeFile} = require('fs').promises;
//const util = require('util');

// const readFilePromise = util.promisify(readFile)
// const writeFilePromis = util.promisify(writeFile);

/* approach 1 */

const start = async () => {
    try {
        const first = await readFile('./content/first.txt','utf8');
        const second = await readFile('./content/second.txt','utf8');
        await writeFile('./content/dileep.txt', 
        `This is awesome : ${first} ${second}`)
        console.log(first,second)
    }
    catch (err) {
        console.log(err);
    }
}
start()
/* approach 2 */

/*
const getText = (path) => {
    return new Promise((resolve,reject) => {
        readFile(path,'utf8',(err,data) => {
            if(err)
                reject(err);
            else
                resolve(data);
        })
    })
}

const start = async () => {
    try {
        const first = await getText('./content/first.txt');
        const second = await getText('./content/second.txt');
        
        console.log(first,second)
    }
    catch (err) {
        console.log(err);
    }
}
start()

// getText('./content/result-async.txt').
// then(res => console.log(res)).
// catch(err => console.log(err))

*/