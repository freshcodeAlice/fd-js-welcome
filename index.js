 'use strict'

// const obj = {
//     key: 'value',
//     testMethod: test
// }




// const test2 = function () {
//     console.log(this);
// }

// const arrowFunction = () => {
//     console.log(this);
// }


// // obj.testMethod();
// // test();
// // test2();
// // arrowFunction();


// // console.log(this);


const newspaper = {
    title: 'Super Yellow Press',
    articles: [
        {
            author: 'John Doe',
            text: 'Lorem ipsum',
            date: 'today'
        },
        {
            author: 'Jane Doe',
            text: 'Dollor sit amet',
            date: 'today'
        },
        {
            author: 'Alex Doe',
            text: 'Today is the day',
            date: 'today'
        },
        {
            author: 'Sandy Doe',
            text: 'Lorem ipsum',
            date: 'today'
        }
    ],
    showArticles: function () {
        this.articles.forEach((function (article) {
            console.log(`${this.title}. ${article.author}: ${article.text}`);
        }).bind(this));
    }
}

function test() {
    console.log(this);
}


const newTestFunction = test.bind(newspaper);
newTestFunction();
test();