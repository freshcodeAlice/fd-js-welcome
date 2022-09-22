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
    }
}

/*
Доступ
*/

cat.breed; // властивості
cat.eat(); // методи


/* Зміна */

cat.breed = 'Dvorovaya';


/* Видалення */

delete cat.breed; // властивості
delete cat.sleep;// методи
