/*
const userAvatar = 'http://.....';
const imagePlaceholder = './';



let imageSrc = userAvatar ? userAvatar : imagePlaceholder;
<img src="" />
*/


/*
Спитайте у юзера, як його звуть, і виведіть на консоль "Hello " + userName
Якщо користувач нічого не ввів - виведіть "Hello, Anonym"

*/

const userName = prompt('What is your name?');

function sayHello(name = 'Anonym'){
    console.log('Hello ' + name);
}


sayHello('Alex');


sayHello('John');

sayHello(userName);

sayHello();