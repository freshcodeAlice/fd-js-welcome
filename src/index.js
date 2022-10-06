const obj = {
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    length: 5,
    [Symbol.iterator]: function () {
        let i = 1;
        return {
            next: () => {
                return {
                    value: this[i++],
                    done: i > this.length+1
                }
            }
        }
    }
}

