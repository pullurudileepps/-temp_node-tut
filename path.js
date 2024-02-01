const path = require('path');
console.log(path.sep);

const filepath = path.join('/content', 'folder','text.txt');
console.log(filepath);

const base = path.basename(filepath);
console.log(base); //text.txt

const absolute = path.resolve(__dirname,'content', 'folder','text.txt')
console.log(absolute);
