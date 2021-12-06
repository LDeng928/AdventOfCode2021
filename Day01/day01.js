const fs = require('fs');

let input = fs.readFileSync('./input01.txt', {encoding: 'utf-8'}).split('\n').map(n => Number(n));

//console.log(input);

let count = 0;

for (let i = 0; i < input.length; i++) {
    if (input[i] > input[i - 1]) {
        count++;
    }
}

console.log(count);