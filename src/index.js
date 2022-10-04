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

/*
Клас Друг
Властивості:
- має ім'я
- має власні кошти
- має друга, який теж має власні кошти.
- друг може мати друга, або не мати (null)

Метод класу
countMoney() 
Порахувати загальну кількість грошей у вас і вашого друга (і друга вашого друга)

*/


class Friend{
    constructor(name, ownAmount, friend) {
        this.name = name;
        this.ownAmount = ownAmount;
        this.friend = friend;
    }

    countMoney() {
        if(this.friend === null) {
            return this.ownAmount;
        }
        if(Array.isArray(this.friend)) {
            return this.ownAmount + this.friend.reduce((money, friend)=>(money + friend.countMoney()), 0)
        }
        return this.ownAmount + this.friend.countMoney();
    }
}

const friend0 = new Friend('Jane', 50, null);

const friend1 = new Friend('Alex', 20, null);

const friend2 = new Friend('John', 10, friend1);

const friend3 = new Friend('Tony', 20, [friend2, friend0]);