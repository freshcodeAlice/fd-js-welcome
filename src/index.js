 'use strict'


 /*
class User

Властивості:
- ім'я
- прізвище
- вік
- мейл

Методи:
- getFullName
- sayHello
 */

class User {
    constructor(firstName, lastName, age, mail){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.mail = mail;
    }


    getFullName() {
        return `${this.firstName} ${this.lastName}`
    }

    sayHello() {
        console.log(`${this.name} say: 'Hello!`);
    }
}


/*
Клас Fuel
Властивості:
- об'єм (volume)
- щільність (density)
Метод, який рахує вагу палива


Клас Auto
Властивості:
- власну вагу 
- паливо

Метод, який вирахує всю вагу автомобіля разом з паливом

*/

class Fuel {
    constructor(volume, density) {
        this.volume = volume;
        this.density = density;
    }

    getWeight() {
        return this.volume * this.density;
    }
}

/**
 * @param {Number} ownWeight
* @param {Fuel} fuel
*/

class Auto {
    constructor(ownWeight, fuel) {
        this.ownWeight = ownWeight;
        this.fuel = fuel;
    }

    getFullWeight() {
        return this.ownWeight + this.fuel.getWeight();
    }
}

const fuel = new Fuel(5, 0.9);

const auto = new Auto(900, fuel);