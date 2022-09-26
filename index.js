'use strict'

const userTel1 = '43234234234';
const userTel2 = '4323423423423';
const userHomeTel = '32423423422';


const obj = {
    0: '43234234234',
    1: '4323423423423',
    2: '32423423422',
}


//obj.1 // not working
obj[1] // works!


const arr = [2, 1, 4, 2, 4, 1];


/*
Створіть масив з 10 числових елементів

Напишіть функцію, яка приймає массив і повертає суму 3го і 5го елементів




*/

const array = [2, 2, 7, 3, 1, 6, 3, 6, 4, 10];


function sum3and5elemen(array) {
    return array[2] + array[4];
}