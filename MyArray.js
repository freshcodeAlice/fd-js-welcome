
function MyArray() {
    this.length = 0;

    this.push = function() {
        for (let i = 0; i < arguments.length; i++) {
            this[this.length] = arguments[i];
            this.length++;
        }
        return this.length;
    }

    this.pop = function() {
        const lastItem = this[this.length-1];
        delete this[this.length-1];
        this.length--;
        return lastItem;
    }

    this.forEach = function(callback) {
        for (let i = 0; i < this.length; i++) {
            callback(this[i], i, this);
        }
    }

    this.map = function(fn) {
        const arr = new MyArray();
        for (let i = 0; i < this.length; i++) {
            arr.push(fn(this[i]));
        }
        return arr;
    }
}
