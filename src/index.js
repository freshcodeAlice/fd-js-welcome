class Figure {
    constructor(type) {
        this.sideQuantity = type;
    }

    getArea() {
    }
}

class Triangle extends Figure {
    constructor(a, b, angle) {
        super(3);
        this.a = a;
        this.b = b;
        this.angle = angle;
    }

    getArea() {
        return 0.5*this.a*this.b*Math.sin(this.angle)
    }
}

class Square extends Figure {
    constructor(a) {
        super(4);
        this.a = a;
    }

    getArea() {
        return this.a*this.a
    }
}

class Circle extends Figure {
    constructor(d) {
        super(Infinity);
        this.d = d;
    }


    getArea() {
        return Math.PI * (this.d * this.d / 4)
    }
}

/**
 * @param {Figure} figure
 */

function calculateArea(figure) {

    return figure.getArea();
}

const crlc = new Circle(10);

calculateArea(crlc);


/*
class User 
властивості
- мейл
- пароль
- isBanned

метод
- sayHello()

class Moderator
- мейл
- пароль

метод
- забанити Юзера (прийняти об'єкт юзера і зробити isBanned = true)


*/

class User {
    constructor(mail, pass) {
        this.mail = mail;
        this.pass = pass;
        this.isBanned = false;
    }


    sayHello() {
        return `${this.mail} say hello`
    }
}

class Moderator extends User {
    constructor(mail, pass) {
        super(mail, pass);

    }

    banUser(user) {
        user.isBanned = true;
    }
}