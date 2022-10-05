 /*
Реалізувати клас Validator
Має властивості:
- від (from)
- до (to)
(обидві властивості - числа)
Полі приватні (_from, _to)

Методи:
- реалізувати геттери і сеттери для обох властивостей
- реалізувати метод range у вигляді геттера, який повертає масив чисел від одного числа до другого (в цьому діапазоні)
- метод, який приймає одне число в якості аргументу і перевіряє, чи це число міститься в цьому діапазоні. 



 */


class Validator{
    constructor(from, to) {
        this.from = from;
        this.to = to;
    }


    set from(v) {
        if(this.checkValue(v)) {
            this._from = v;
        }
    }

    set to(v) {
        if(this.checkValue(v) && v > this._from) {
            this._to = v;
        } else {
            throw new Error('Value is not correct')
        }
    }

    checkValue(v) {
        if (typeof v !== 'number') {
            throw new TypeError('From and To must be a number');
        }
        return true;
    }

    get from () {
        return this._from
    }

    get to() {
        return this._to
    }


    get range() {
       const arr = [];
       for (let i = this._from; i <= this._to; i++) {
            arr.push(i);        
       }
       return arr;
    }

    checkIncludes(num) {
       return this.range.includes(num);
    }

}


