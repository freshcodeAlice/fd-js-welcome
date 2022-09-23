'use strict'

const user1 = {
    firstName: 'Alex',
    lastName: 'Grow',
    age: 15,
    getName: function () {
        console.log(this.firstName + this.lastName);
    }
}


const user2 = {
    firstName: 'John',
    lastName: 'Doe',
    age: 15,
    getName: function () {
        console.log(this.firstName + this.lastName);
    }
}

