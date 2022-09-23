let user = {
    firstName: 'Alex',
    lastName: 'Doe',
    age: 20,
    email: 'test@mail.com'
}

for (let prop in user) {
    console.log(prop + '----->' + user[prop]);
}



/*
Знайти суму числових значень об'єкта


*/


const obj = {
    a: 1,
    b: 2,
    y: 'hello',
    c: 5,
    u: true,
    d: 7,
    e: 9,

} 

let sum = 0;
for (const key in obj) {
    if(typeof obj[key] === 'number') {
        sum += obj[key];
    }
}

console.log(sum);



/*

Написати функцію, яка приймає об'єкт і повертає true, якщо об'єкт пустий (тобто не має властивостей або методів) і false, якщо не пустий


*/

function isEmpty(obj) {
    for (const key in obj) {
        if (key) {
            return false;
        }
    }
    return true;
}



/*

Напишіть функцію, яка поверхнево порівнює два об'єкти

const a = {
    key: 'value',
    key2: 'value2'
}
const b = {
    key: 'value',
    key2: 'value2'
}  //true



const b = {
    key5: 123,
    key2: 'value2'
} //false
*/


function isEqual(obj1, obj2) {
    for (const key in obj1) {
       if (obj1[key] !== obj2[key]) {
            return false
       }
    }
    for (const key in obj2) {
        if (obj1[key] !== obj2[key]) {
             return false
        }
     }
    return true
}