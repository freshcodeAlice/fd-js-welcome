class Queue {
    constructor(...args){
        this._head = 0;
        this._tail = 0; 

        for (const value of args) {
            this.enqueue(value);
        }
    }

    get size() {
        return this._tail - this._head;
    }

    enqueue(value) {
        this[`_${this._tail}`] = value;
        this._tail++;

        return this.size
    }

    dequeue() {
        if(this.size) {
            const firstItem = this[`_${this._head}`];
            delete this[`_${this._head}`];
            this._head++;
            return firstItem;
        }
    }
}
