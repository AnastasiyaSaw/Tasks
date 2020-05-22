//Спросите n (количество слов), затем спросите по очереди эти слова, а затем выведете их через запятую. node L8/2.js

const readlineSync = require("readline-sync");

let count = readlineSync.question("Words count? \n> ");
console.log(count);
let words = [];

for (i=0; i < count; ++i)  {
    let answer = readlineSync.question(((i+1) + " " + "Word? \n> "));
    console.log(answer);
    words.push(answer);
}
console.log(words.join(","));