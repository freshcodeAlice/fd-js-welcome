'use strict';

/*
Створіть масив з 10 числових елементів

Напишіть функцію, яка приймає массив і повертає суму всіх елементів масива


*/

const arr1 = [2, 2, 7, 3, 1, 6, 3, 6, 4, 10];

function sumOfArray(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}

/*
Напишіть функцію, яка повертає середнє аріфметичне всіх елментів масиву.
Середнє аріфметичне = сума всіх елментів / кількість елементів


*/


function avarageOfArray(array) {
    let sum = sumOfArray(array);
    return sum / array.length;
}