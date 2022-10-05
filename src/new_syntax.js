class MyNewArray {
    constructor() {
        this.length = 0;
    }

    push() {
        for (let i = 0; i < arguments.length; i++) {
            this[this.length] = arguments[i];
            this.length++;
        }
        return this.length;
    }

    pop() {
        const lastItem = this[this.length-1];
        delete this[this.length-1];
        this.length--;
        return lastItem;
    }

    forEach(callback) {
        for (let i = 0; i < this.length; i++) {
            callback(this[i], i, this);
        }
    }

    map(fn) {
        const arr = new MyArray();
        for (let i = 0; i < this.length; i++) {
            arr.push(fn(this[i]));
        }
        return arr;
    }

    static isMyNewArray(obj) {
        return obj instanceof MyNewArray;
    }

}


const myarr = new MyNewArray();

MyNewArray.isMyNewArray(myarr) //true
