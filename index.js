 'use strict'

 /**
  * 
  * @param {String} name - Username to sayHello to user
  * @returns {undefined}
  */

 function sayHello(name) {
       if (typeof name !== 'string') {
              throw new TypeError('Name must be a string');
       }
        console.log(`Hello, ${name}`);
 }


function pow (base, power) {
       if(typeof base !== 'number' || typeof power !== 'number') {
              throw new TypeError('Base and Power must be a number');
       } 
       if (power <= 0) {
              throw new RangeError('Power must be more than 0');
       }
       let res = 1;
       for (let i = 0; i < power; i++) {
             res *= base;
       }
       return res;
}