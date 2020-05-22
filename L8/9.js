// На вход подаётся строка вида “12+23=35”. Выведете на экран true если выражение верно или false если выражение не верно.
//  node L8/9.js  

const readlineSync = require("readline-sync");
let str = readlineSync.question("str\n> ");

let digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let a = '';
let sum = 0;
let result = 0;

for (let i = 0; i < str.length; ++i) {
    if (digits.includes(str[i]))  {
        a += str[i];
    }
    if ((str[i] === "+") || (str[i] === "=")) {
        let b = parseInt(a);
        sum += b;
        a = '';
    }
    if (i=== str.length - 1) {
        result = parseInt(a);
        a = '';
    }
}

console.log(sum === result);
