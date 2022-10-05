 class Animal {
    constructor(name, amountOfLegs, type) {
        this.name = name;
        this.amountOfLegs = amountOfLegs;
        this.type = type;
    }

    static isAnimal(anim) {
        return anim instanceof Animal;
    }

    run() {
        return `${this.name} is running`
    }

    eat() {
        return 'Yummm!)'
    }
 }


 class Cat extends Animal {
    constructor(name, amountOfLegs, color) {
        super(name, amountOfLegs, 'Cat');
        this.color = color;
    }

    sleep() {
        return `${this.name} is sleeeeeeeping`
    }
 }


 class Kitten extends Cat {
    constructor(name, amountOfLegs, color) {
        super(name, amountOfLegs, color);
    }

    makeNoize() {
        return `${this.name} says: 'Piiiiiiiiiii`
    }

    sleep() {
        return `${this.name} is noizy sleeping`
    }
 }