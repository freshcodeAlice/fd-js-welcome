 'use strict'

 function doSomeStuff(a, b) {
        return a+square(b);
 }


 function square(b) {
        return b*b;
 }


 function consoleResult(){
        debugger;
        console.log(doSomeStuff(2,2))
 }

 consoleResult();


 console.log('End of script')