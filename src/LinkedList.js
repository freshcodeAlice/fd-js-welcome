class ListItem {
    constructor(value){
        this.value = value;
        this.next = null;
        this.prev = null;
    }

    get value() {
        return this._value
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

    deleteHeadElement () {
            const nextElement = this.head.next;
            nextElement.prev = null;
            this.head = nextElement;
            this.length--;
    }


    deleteTailElement() {
            const prevElement = this.tail.prev;
            prevElement.next = null;
            this.tail = prevElement;
            this.length--;
    }

    deleteElement(value) {
        for (const item of this) {
            if(item.value === value) {
                const nextElement = item.next;
                const prevElement = item.prev;
                nextElement.prev = prevElement;
                prevElement.next = nextElement;
            }
        }
        this.length--;
        
    }


    /*
    deleteElement(value){} видаляє елемент зі списку за прийнятим value



    */

    [Symbol.iterator]() {
        return new LinkedListIterator(this)
    }


}


class LinkedListIterator {
    constructor(list) {
        this.list = list;
        this.currentNode = null;
    }

    next(){
        this.currentNode = this.currentNode ? this.currentNode.next : this.list.head;
        return {
            value: this.currentNode,
            done: !this.currentNode,
        }
    }
}

