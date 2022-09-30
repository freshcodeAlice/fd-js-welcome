 'use strict'


 /* String methods */

const a = 'Шевченко';
// console.log(a[3]);
//a.charCodeAt(3);
//a.endsWith('ев') //false
//a.includes('Шев') //true
//a.indexOf('я');
//a.repeat(3);
//a.replace('чен', 'ЯМ');
//a.slice(2, 4);
/*
'abracadabra'.split(); //['abracadabra']
'hi hi hi'.split(' '); //(3) ['hi', 'hi', 'hi']
'my*my*my'.split('*') // (3) ['my', 'my', 'my']
'abracadabra'.split(''); // (11) ['a', 'b', 'r', 'a', 'c', 'a', 'd', 'a', 'b', 'r', 'a']
*/

/*
const b = 'hello';
const c = 'hELlO';
b === c; // false
b.toLowerCase() === c.toLowerCase() //true


'     fds    '.trim() // 'fds'
*/






/*
Даний рядок "Я!вчу!джаваскрипт!"
Замініть ! на пробіл, і в кінці рядка пробілу не має бути

*/
const str1 = 'Я!вчу!джаваскрипт!';
 const strRes = str1.replaceAll('!', ' ').trim();



/*

Напишіть функцію, яка приймає рядок і повертає цей же рядок з першою великою літерою

'hello' --- 'Hello'
'abracadabra' - 'Abracadabra'

*/


function capitalize(str) {
        return str.at(0).toUpperCase().concat(str.slice(1));
}


/*

НАписати функцію, яка перевіряє переданий рядок на спам. Спамом вважаємо  'viagra', 'XXX', 'buy' 
За наявності "забороненого" слова функція видає true, якщо рядок спаму не містить - false

*/

function isSpam(str) {
        const spamWords = ['viagra', 'XXX', 'buy'];
       for (let i = 0; i<spamWords.length; i++) {
        if(str.toLowerCase().includes(spamWords[i].toLowerCase())) {
                return true;
        }
       } 
       return false
}

/*
Написати функцію truncate(str, maxLength). Якщо рядок довший ніж максимальна довжина, його треба обрізати на вказану довжину і в кінці рядка додати "..."
Функція повертає обрізаний рядок з "..."
Якщо довжина більша, ніж рядок, то нічого не робимо, повертаємо оригінальний рядок

*/


const truncate = (str, maxLength) => (str.length > maxLength) ? (str.slice(0, maxLength).concat('...')) : str;


/*
Написати функцію, яка перевіряє рядок, чи є він паліндромом. Паліндром - це рядок, який з обох сторін читається однаково

'Hannah' - true
'Namman' - true
'Mama' - false

*/

function isPalindrom(str) {
     return str.toLowerCase().split('').reverse().join('') === str.toLowerCase()
}


/*
Написати функцію, яка приймає рядок і повертає кількість голосних літер в рядку
Голосними є
['a', 'e', 'i', 'o', 'u']

*/


function countVocalsV1(str) {
     const vocals = ['a', 'e', 'i', 'o', 'u'];
     let counter = 0;
     for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < vocals.length; j++) {
                if(str[i] === vocals[j]) {
                        counter++;
                } 
        }
     }
     return counter;
}



/*
1. Перетворити рядок на масив символів
2. За допомогою методу filter прибрати все, що не є голосними літерами (тобто не міститься в масиві голосних)
3. Повернути довжину цього масива

*/

const countVocalsV2 = (str) => str.split('').filter((letter)=> ['a', 'e', 'i', 'o', 'u'].includes(letter)).length