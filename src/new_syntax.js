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
        const arr = new MyNewArray();
        for (let i = 0; i < this.length; i++) {
            arr.push(fn(this[i]));
        }
        return arr;
    }

    concat(arr2) {
        for (let i = 0; i < arr2.length; i++) {
            this.push(arr2[i])  
        }
        return this;
    }

    flat() {
        const res = new MyNewArray();
        for (let i = 0; i < this.length; i++) {
            if(MyNewArray.isMyNewArray(this[i])){
               res.concat(this[i].flat());
            } else {
                res.push(this[i])
            }
        }
        return res;
    }


    reverse() {
        let len = this.length-1;
        for (let i = 0; i <= len/2; i++) {
            let tmp = this[i];
            this[i] = this[len - i];
            this[len-i] = tmp;
        }
       return this;
    }

    static isMyNewArray(obj) {
        return obj instanceof MyNewArray;
    }

}


const myarr = new MyNewArray();

MyNewArray.isMyNewArray(myarr) //true

myarr.flat();

/*
Реалізувати метод .flat()


[3, 2, 1, [2, 1, [2, 5]]] // [3, 2, 1, 2, 1, 2, 5]

*/