//Если оно является перевёртышем выведете true иначе false. Слово-перевёртыш - это слово, которое одинаково читается с начала и с конца.
//  node L8/6.js 

const readlineSync = require("readline-sync");
let str = readlineSync.question("str\n> ");
let a = "";

for (let i = str.length - 1; i >= 0; --i) {
a += str[i];
}
if ((a === str) === true) {
    console.log(true);
}
else {console.log(false)
};  