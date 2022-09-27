'use strict'

/*

Реалізуйте метод map


*/

const arrNative = [2, 3, 4, 5];


function multyElem(num) {
    return num*2;
}

///[4, 6, 8, 10];

const arr = [];
for (let i = 0; i < arrNative.length; i++) {
    arr.push(multyElem(arrNative[i]));
}

console.log(arr);