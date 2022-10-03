 'use strict'


 /* 
Задача - написати рекурсивну функцію, яка обчислює факторіал числа

5! = 1*2*3*4*5
5! = 4! * 5 = 3! * 4 * 5

 */


function factorial(number) {
        debugger;
        if(number === 1) {
                return 1;
        }
        return number * factorial (number - 1);
}

/*
Написати функцію, яка зводить у ступінь передане їй число

pow(base, power)

*/


function pow(base, power) {
        if(power === 1) {
                return base
        }
        return base * pow(base, power-1);
}