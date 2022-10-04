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
/**
 * 
 * @param {Number} base
 * @param {Number} power - More than 0
 * @returns {Number} base on power
 * @throws {TypeError}
 * @throws {RangeError}
 */



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


try {
       console.log('start');
        pow(2, -2);
      // pow (2,2);
       console.log('end');
} catch(error) {
       console.log(error);
}


console.log('our code is alive');