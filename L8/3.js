//Подсчитайте количество строчных и прописных букв в строке. Считается, что в строке могут быть только английские буквы и пробелы. node L8/3.js
// хрень с единичкой ++  и =+  lc += 1;
const readlineSync = require("readline-sync");

let str = readlineSync.question("str\n> ");
let lc = 0;
let uc = 0;

for (let x of str) {
    if (x === x.toUpperCase()) {
       ++ uc;
    }  
    if (x === x.toLowerCase()) {
        ++ lc;
}
}

console.log("Big " + (uc-1) + "\n" );
console.log("Small " + (lc-1) + "\n" );