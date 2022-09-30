 'use strict'

// for(let i = 1; i < 5; i++) {
//     for (let j = 1; j < 5; j++) {
//         console.log(`${j} * ${i} = ${j*i}`);
//     }
//  console.log('-----------------');
// }

/*
Написати функцію, яка приймає два числа - діапазон значень.
Вивести на консоль масив дільників кожного числа з цього діапазону

divDiap(2, 10) 
        // 2 - [1, 2]
        // 3 - [1, 3]
        // 4 - [1, 2, 4]
        // 5 - [1, 5]
        // 6 - [1, 2, 3, 6]
        // 7 - [1, 7]
        // 8 - [1, 2, 4, 8]
        // 9 - [1, 3, 9]
        // 10 -[1, 2, 5, 10]
*/

function divDiap(start, end){
        for (let i = start; i <= end; i++) {
            const divArray = [];
            for (let j=1; j <= i; j++) {
                if(i % j === 0) {
                        divArray.push(j);
                }
            }
              console.log(i + ' - ', divArray)   
        // console.log(`${i} - ${divArray.join(' ')}`)
        }
}

