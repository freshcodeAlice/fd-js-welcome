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


// const pow2 = (base, power) => (power === 1) ? base : pow2(base, power - 1);


/*
Дан масив: [2, 3, 2, 1, [4, 2, 3, [6, 3,2, [3], 3, 3], 2]]
Задача - порахувати суму всіх елементів масива і вкладених масивів
Не використовувати методи масивів

*/

const arr = [2, 3, 2, 1, [4, 2, 3, [6, 3,2, [3], 3, 3], 2]];

function sumOfArrays(array){
        let sum = 0;
        for (let i=0; i< array.length; i++) {
                if(Array.isArray(array[i])) {
                        sum += sumOfArrays(array[i]);
                } else {
                         sum += array[i];
                }
        }

        return sum;
}


console.log(sumOfArrays(arr));


const arr2 = [5, 1, 3, 4, [5, 3, 2, [2, 10]]];

console.log(sumOfArrays(arr2));



/*
Вивести на консоль перші 100 членів ряду Фібоначчі

F(n) = F(n-1) + F(n-2)

F(1) = 1
F(2) = 1

*/


function fn(n) {
        if(n === 0 ) {
                return 0;
        }
        if(n===2 || n===1) {
                return 1
        }
        return fn(n-1) + fn(n-2)
}

for (let i = 0; i<10; i++) {
        console.log(fn(i));
}


/*

var f = [0, 1]; //Первые значения

if (n <= 2) { //если n <= 2

    var result = f.slice(0, n); //записываем в результат срез f от 0 до n

} else {

    for (i = 0; i < n - 2; i++) { // повторяем n-2 раза, т.к. 2 элемента уже есть
        f.push(f[f.length - 1] + f[f.length - 2]); //заполняем (n+2)-й элемент
    }

    var result = f; //записываем в result наш массив f

}

alert(result); //вывод result на экран (через алерт)




*/