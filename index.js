/*
Написати калькулятор

сума
різниця
множення
ділення

Отримуємо від користувача за допомогою prompt 
перше число 
друге число
символ дії - +, -, *, /

*/
let num1 = Number(prompt('Enter first num'));
let num2 = Number(prompt('Enter second number'));
let oper = prompt('Enter the operator');

calculator(num1, num2, oper);

function sum(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function multy(a, b) {
    return a * b;
}

function div(a, b){
    return a / b;
}

function calculator(firstNum, secondNum, operator) {
    switch(operator) {
        case '+':
            return sum(firstNum, secondNum);
        case '-':   
            return sub(firstNum, secondNum);
        case '*':
            return multy(firstNum, secondNum);
        case '/':
            return div(firstNum, secondNum);
        default: 
            return 'Unexpected operation'
    }
}
