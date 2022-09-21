// console.log('1');


// while (умова = true) {
// блок коду, який буде виконуватись, поки умова = true
// }

let i = 0;
while (i < 10) {
    i++;
    console.log('1');
}


// do {
//    блок коду
// } while(умова)

let j = 0;
do {
    console.log('2')
} while (j++ < 3);


/*
Задача. 
Маємо змінну з рядком 'GoodPassword'
 Запитайте у юзера через prompt пароль, порівняйте його з цим рядком, якщо користувач ввів неправильний пароль - запитайте ще раз. Якщо правильний - виведіть на консоль "Пароль правильний"


*/

const password = 'GoodPassword';
  

// let userValue = '';
// do {
//     userValue = prompt('Type your password');
// } while (userValue !== password);
// console.log('Password correct');



/*
Вивести на консоль всі парні числа від 1 до 10


*/
let k = 0;
let sum = 0;
while (k++ < 5) {
    debugger;
    if(k % 2) {
        continue;
    }
    sum += k;
}


console.log(sum);