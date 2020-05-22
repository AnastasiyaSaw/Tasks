//Удалите лишние пробелы из строки. Пробелы лишние если они в начале или в конце строки, а также если между словами больше одного пробела. Считается, что строка состоит только из букв и пробелов.
//  node L8/7.js 

const readlineSync = require("readline-sync");
let str = readlineSync.question("str\n> ");
let text = str.split(" ");

console.log(text.join(" "));