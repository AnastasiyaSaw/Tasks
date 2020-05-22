//Выведете самое длинное слово в предложении (слова разбиты пробелами). node L8/4.js
// вопрос с натыканием
// Не решено

const readlineSync = require("readline-sync");
let str = readlineSync.question("str\n> ");
let text = str.split(" ");
let a = "";
let b = "";

for (let word of text) {
    a = word;
    if (a.length > b.length) {
    b = a;
    a = "";
    }
    else a = "";
}
console.log(b) 
