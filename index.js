let cat = {
    breed: 'Blue Cheshire',
    name: 'Murzik',
    age: 3,
    weight: 10,
    color: 'grey',
    sleep: function() {
        console.log('I am sleeping')
    },
    eat: function() {
        console.log('I am eating')
    },
    'key': 'value',
    2: 'newValue'
}

/*
Оператор доступу за ІМʼЯМ властивості - .
*/

cat.breed; // властивості
cat.eat(); // методи


/* Зміна */

cat.breed = 'Dvorovaya';


/* Видалення */

delete cat.breed; // властивості
delete cat.sleep;// методи


let murka = {
    breed: 'British',
    name: 'Murka',
    age: 2,
    weight: 5,
    color: 'red',
    sleep: function() {
        console.log('I am sleeping')
    },
    eat: function() {
        console.log('I am eating')
    }
}


cat.girlfriend = murka;

/* Оператор доступу до обчислюваної властивості (ЗА ЗНАЧЕННЯМ властивості) */

cat['2']; // 'newValue'
cat[2]; // 'newValue'


let num = 2;
let variable = 'color';

cat[num];
cat[variable];