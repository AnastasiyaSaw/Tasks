//Пользователь вводит строку str, индекс начала куска строки p и длину l. Выведете эту строку, вырезав из неё кусок длинной l начиная с индекса p.
//  node L8/5.js

const readlineSync = require("readline-sync");

let str = readlineSync.question("str\n> ");
let p = parseInt(readlineSync.question("p\n> "));
let l = parseInt(readlineSync.question("l\n> "));

console.log(str.slice(str, p);
 