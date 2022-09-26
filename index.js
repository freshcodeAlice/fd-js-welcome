'use strict'


function printElement(num, i) {
    console.log(`${i} - ${num}`);
}

const arr = [2, 3, 1, 2, 4, 2, 1, 2];

//arr.forEach(printElement);




//////

function multyTwo(num) {
    return num*2
}

// const resultArray = [];

// for (let i = 0; i < arr.length; i++) {
//     let element = multyTwo(arr[i]);
//     resultArray.push(element);
// }

const resultArray = arr.map(multyTwo);