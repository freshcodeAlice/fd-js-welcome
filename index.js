/* For */

// for (ініціалізація; умова; інкрементація) {
//     блок коду
// }


for (let i = 0; i < 10; i++) {
    console.log(i);
//    break;
}


/*

Написати функцію, яка приймає числовий аргумент та повертає факторіал числа
5! = 1*2*3*4*5
8! = 1*2*3*4*5*6*7*8

*/

function factorial(number) {
    let res = 1;
    for (let i = 1; i <= number; i++) {
        res *= i;
    }
    return res;
}


/*
Функція приймає число і ступінь, в який треба звести число і повертає число у вказаному ступені

pow(base, power)
5^3 = 5*5*5
*/

function pow(base, power) {
    let res = base;
    for (let i = 1; i < power; i++) {
        res *= base;
    }
    return res;
}


/*

1. Дана висота прямокутника і його ширина. Написати функцію, що обчислює площу прямокутника.

2. Написати функцію, що обчислює довжину кола за його діаметром.


*/


const PI = 3.14;

//1
function square(a, b) {
    return a*b;
}


//2 

function circleLength(d) {
    return Math.PI * d;
}


/*
Реалізувати гру FizzBuzz від 1 до 100


*/


function fizzBuzz(number) {
    for (let i = 1; i < number; i++) {
        if( !(i % 5) && !(i % 3)) {
            console.log(' FizzBuzz');
        } else if (!(i % 3)) {
            console.log('Fizz');
        } else if (!(i % 5)) {
            console.log('Buzz');
        } else {
            console.log(i);
        }
        

    }
}


/*
Вивести всі дільники переданого числа


*/