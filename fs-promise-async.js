const {readFile} = require('fs');
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
        const first = await getText('./content/result-async.txt');
        console.log(first)
    }
    catch (err) {
        console.log(err);
    }
}
start()
// getText('./content/result-async.txt').
// then(res => console.log(res)).
// catch(err => console.log(err))