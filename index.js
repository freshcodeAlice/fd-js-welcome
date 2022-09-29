 'use strict'

function sum(a, b, c, ...rest) {
    return a+b+c;
}


const numbers = [1, 2, 5, 7, 10];

console.log(sum(...numbers));

