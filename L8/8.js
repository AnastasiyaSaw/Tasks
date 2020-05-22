// Дана строка, сделайте букву каждого слова прописной (большой).
//  node L8/8.js  node L8/8.js 

const readlineSync = require("readline-sync");
let str = readlineSync.question("str\n> ");
let alph = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
let strNew = "";

for (let i = 0; i < str.length; ++i) {
if ((((i === 0 )  && (alph.includes(str[i])))) || ((str[i-1] === " ")  && (alph.includes(str[i]))))   {
strNew += str[i].toUpperCase();
}
else {strNew += str[i];
}
}
console.log(strNew);

// (((alph.includes(str[0]))) || 
// ((str[i-1] === " ")  && (alph.includes(str[i]))) 
