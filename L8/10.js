// На вход подаётся строка вида “12+23-4*5/10+11”. Выведете на экран результат выражения. Приоритет знаков не имеет значения.
// node L8/10.js 

const readlineSync = require("readline-sync");
let str = readlineSync.question("str\n> ");
let digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
let a = '';
let b = 0;
let c = 0;
let result = 0;

for (let i = 0; i < str.length; ++i) {
    if (digits.includes(str[i]))  {
        a += str[i];  
    }
    if (i === '+') {b = parseInt(a);
        c = b;
        a = ''; 
        result = b + c;
    }
    if (i === '-') {b = parseInt(a);
        c = b;
        c = b - c;
        a = ''; 
        
    }
    if (i === '*') {b = parseInt(a);
        c = b;
        a = ''; 
        
    }
    if (i === '/') {b = parseInt(a);
        c = b;
        a = ''; 
       
    }
}
console.log(result);