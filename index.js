'use strict'


function printElement(num, i) {
    console.log(`${i} - ${num}`);
}

const arr = [2, 3, 1, 2, 4, 2, 1, 2];

arr.forEach(printElement);