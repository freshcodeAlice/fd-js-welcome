'use strict'

const NATIONALITIES = [
    'Ukraine',
    'Great Britain',
    'Germany',
    'France',
    'Spain'
];

/*
Створити функцію-конструктор для об'єкта User.
User має властивості:
- firstName
- lastName
- age
- mail
- isSubscribe
- nationality

*/

function User(firstName, lastName, age, mail, isSubscribe = false, nationality){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.mail = mail;
    this.isSubscribe = isSubscribe;
    this.nationality = nationality;
}

/*
Створити функцію, яка створює 1 користувача.
1. Відбудовує об'єкт Юзера, передає йому дані
`Name 1`, `LastName 1`, 20, `mail1@com`, true
2. Повернути об'єкт користувача

*/


function getRandomArbitrary(min, max) {
    return Math.round(Math.random() * (max - min) + min);
  }

function createArrayOfUsers(quantity) {
    const userArr = [];
    for (let i = 0; i < quantity; i++) {
        const us = new User(`Name ${i}`, `LastName ${i}`, getRandomArbitrary(1, 100), `mail${i}@com`, Boolean(Math.round(Math.random())), NATIONALITIES[getRandomArbitrary(0, 4)])
        userArr.push(us);
    }
   
    return userArr;
}


const arrUsers = createArrayOfUsers(50); // [] (50)
//console.table(arrUsers);

/* 
Отримати масив повних імен юзерів 
*/


const fNameArray = arrUsers.map(function(userObj) {
   return `${userObj.firstName} ${userObj.lastName}`;
});

arrUsers.sort(function (usA, usB) {
    return usA.age - usB.age;
})

console.table(arrUsers);


/* filter */


/*
Отримати масив всіх повнолітніх користувачів, які підписані на новини

*/

const filtered = arrUsers.filter(function (elem) {
    return elem.age > 20 && elem.isSubscribe
})


/*
Отримати масив емейлів всіх повнолітніх користувачів, які підписані

*/

const mail = arrUsers
                .filter(function (elem) {
                    return elem.age > 18 && elem.isSubscribe
                }).map(function(user){
                    return user.mail
                })

/*
Зробити масив з повних імен (ім'я + прізвище) користувачів з України, які підписані на наші новини

*/

const fullNamesOfUkrainian = arrUsers
                                .filter( function (user) {
                                    return (user.nationality === 'Ukraine') && user.isSubscribe
                                })
                                .map( function (user){
                                    return `${user.firstName} ${user.lastName}`
                                })

/* forEach */

/*
Підпишіть на новини ВСІХ користувачів старше 18 років
*/

arrUsers.forEach(function(user){
    if(user.age >= 18) {
        user.isSubscribe = true;
    }
})

console.table(arrUsers)