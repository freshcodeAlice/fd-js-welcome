'use strict'

const obj1 = {
    key: 'value'
};


const obj2 = {
    method: function() {
        console.log('hi')
    }
}

obj1.__proto__ = obj2;