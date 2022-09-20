/*
Задача. Відобразити користувачу меню у вигляді prompt

1 - Чай
2 - Кава
3 - Сік
4 - Вода
5 - Лимонад


*/


const userDrink = prompt('Виберіть напій: \n1 - Чай \n2 - Кава \n3 - Сік \n4 - Вода \n5 - Лимонад');
// debugger;

// if (userDrink === '1') {
//     console.log('Чай')
// } else if (userDrink === '2') {
//     console.log('Кава')
// } else if (userDrink === '3') {
//     console.log('Сік')
// } else if (userDrink === '4') {
//     console.log('Вода')
// } else if (userDrink === '5') {
//     console.log('Лимонад')
// } else {
//     console.log('Напій мені невідомий')
// }




switch (userDrink) {
    case '1': 
    case '2':
        console.log('Кава');
        break;
    case '3':
        console.log('Сік');
        break;
    case '4':
        console.log('Вода');
        break;
    case '5':
        console.log('Лимонад');
        break;
    default:
        console.log('Напій мені невідомий');
}

/*

Задача. Маємо число місяця, вивести в яку декаду воно попадає
Приклад: день 23, декада - друга
день 30 - декада - третя

*/


const currentDay = 23;

switch(currentDay) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
        console.log('Перша декада');
        break;
    case 11:
    case 12:
    case 13:
    case 14:
    case 15:
    case 16:
    case 17:
    case 18:
    case 19:
    case 20:
        console.log('Перша декада');
        break;
    case 21:
    case 22:
    case 23:
    case 24:
    case 25:
    case 26:
    case 27:
    case 28:
    case 29:
    case 30:
    console.log('Перша декада');
}