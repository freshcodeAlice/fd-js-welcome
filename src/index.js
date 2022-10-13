
const vocabulary = new Map();
vocabulary.set('cat', 'кіт');
vocabulary.set('dog', 'пес');
vocabulary.set('eat', 'їсти');
vocabulary.set('meat', `м'ясо`);


function translater(str, vocabulary) {
     const wordArray = str.toLowerCase().split(' ');
     const resArray = [];
     for (const word of wordArray) {
        if(vocabulary.has(word)) {
            resArray.push(vocabulary.get(word));
        } else {
            resArray.push(word);
        }
     }
     return resArray.join(' ');
}


/*




*/


const user1 = {
    firstName: 'John',
    lastName: 'Doe',
    age: 20,
    email: 'test@mail1'
}

const user2 = {
    firstName: 'Jane',
    lastName: 'Snow',
    age: 25,
    email: 'test2@mail2'
}


const johnMessages = ['hello', 'how are u', 'go to walk'];
const janeMessage = ['hi','Im fine', 'Go!'];

const mapMessage = new Map();
mapMessage.set(user1, johnMessages);
mapMessage.set(user2, janeMessage);



/*
Написати функцію, яка перевіряє, чи можна відтворити рядок за допомогою іншого рядка.

Функція приймає два рядки, і перевіряє, чи можна з літер одного рядка створити інший.

compare('test', 'sett') //true
compare('love', 'evol') //true
compare('test', 'love') // false

*/