 'use strict'

function sum(...superArray) {
// console.log(a);
// console.log(b);
console.log(superArray);
}


sum(1, 2, 5, 6, 7)


const sumOfAllArguments = (...restArray) => restArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);


console.log(sumOfAllArguments(3, 4 ,5, 6, 7, 8, 9));