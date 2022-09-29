 'use strict'

// for(let i = 1; i < 5; i++) {
//     for (let j = 1; j < 5; j++) {
//         console.log(`${j} * ${i} = ${j*i}`);
//     }
//  console.log('-----------------');
// }


/*

Намалювати в консолі прямокутний трикутник висотою в 8 рядків

*
**
***
****
*****
******
*******
********

*/
// let stars = '';
// for (let i=1; i<8; i++) {
//         for (let j = 0; j < i; j++) {
//         stars += '*';
//         }
//         stars += '\n';
//     }

//     console.log(stars);



    /*
Намалювати прямокутник з діагоналлю

***************
**            *
* *           *
*   *         *
*     *       *
*      *      *
*        *    *
*          *  *
***************



***************
*           * *
*          *  *
*         *   *
*        *    *
*       *     *
*      *      *
*     *       *
*    *        *
*   *         *
*  *          *
* *           *
**            *
***************


    */

function drawSquare(dimension) {
    let square = '';
    for (let i = 0; i <= dimension; i++) {
        for (let j = 0; j <= dimension; j++) {
            if(i === 0 || i === dimension || j === 0 || j === dimension || i === j) {
                square += '*';
            } else {
                square += ' ';
            }

        }
        square += '\n';
    }
    console.log(square)
}


drawSquare(8);