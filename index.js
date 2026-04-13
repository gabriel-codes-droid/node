const {readFile,readFileSync} = require('fs');
const txt = readFileSync('./hello.txt','utf-8');
console.log(txt);
const generateNumber =require('./utils');
console.log(`Your random number is : ${generateNumber()}`);