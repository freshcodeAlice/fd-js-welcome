'use strict'


/*
Створити функцію-конструктор для об'єкта User.
User має властивості:
- firstName
- lastName
- age
- mail
- isSubscribe

*/

function User(firstName, lastName, age, mail, isSubscribe = false){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.mail = mail;
    this.isSubscribe = isSubscribe;
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
        const us = new User(`Name ${i}`, `LastName ${i}`, getRandomArbitrary(1, 100), `mail${i}@com`, Boolean(Math.round(Math.random())))
        userArr.push(us);
    }
   
    return userArr;
}