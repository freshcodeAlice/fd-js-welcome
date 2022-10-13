
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


