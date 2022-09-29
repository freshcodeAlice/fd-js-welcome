'use strict'

const obj = {
    key: 'value',
    testMethod: test
}

function test() {
    console.log(this);
}


const test2 = function () {
    console.log(this);
}

const arrowFunction = a => a*a;


obj.testMethod();
test();
test2();
arrowFunction();


console.log(this);