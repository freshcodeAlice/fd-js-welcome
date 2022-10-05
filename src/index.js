 'use strict'


 class Worker {
    #rate;

    constructor(name, rate, days) {
        this.name = name;
        this.rate = rate;
        this.days = days;
    }

    set rate(value){
        if(value < 0 ) {
            throw new RangeError('rate must be > 0');
        }
        this.#rate = value;
    }

    get rate() {
        return this.#rate;
    }


    set days(value) {
        if(typeof value !== 'number') {
            throw new TypeError('Days must be a number');
        }

        this._days = value;
    }

    get days() {
        return this._days;
    }
    

    getSalary() {
        return this.rate*this.days;
    }
 }


