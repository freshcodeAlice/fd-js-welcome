
function getValueFromUser() {
    let userName = prompt('Як Вас звати?');
    sayHello(userName);
}


function sayHello(abracadabra){
    debugger;
    console.log('Hello ' + abracadabra);
}

getValueFromUser();


/*

Написати функцію, яка приймає число і якщо воно парне, повертає true, в іншому випадку повертає false

*/


function isEven(number){
    return number % 2 === 0
}