class ListItem {
    constructor(value){
        this.value = value;
        this.next = null;
        this.prev = null;
    }

    get value() {
        this._value
    }

    set value(v) {
        this._value = v;
    }
}


class LinkedList {
    constructor(...args){
        this.length = 0;
        this.head = null;
        this.tail = null;

        for (const item of args) {
            this.push(item);
        }
    }

    push(v) {
        const newItem = new ListItem(v);
        if (this.length === 0) {
            this.head = newItem;
            this.tail = newItem;
        } else {
            this.tail.next = newItem;
            newItem.prev = this.tail;
            this.tail = newItem;
        }
        return ++this.length
    }
}

/*
Реалізувати додавання будь-якої кількості елементів у зв'язаний список при створенні його.
*/