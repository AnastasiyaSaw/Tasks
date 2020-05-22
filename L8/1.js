// node L8/1.js, дубли ответов
const readlineSync = require("readline-sync");

let word1 = readlineSync.question("First word \n> ");
console.log(word1);
let word2 = readlineSync.question("Second word \n> ");
console.log(word2);
let word3 = readlineSync.question("Third word \n> ");
console.log(word3);
console.log(word3 + ", " + word2 + ", " + word1 );