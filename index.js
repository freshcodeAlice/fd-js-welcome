 'use strict'



 function sumAllArguments() {
    console.log(arguments)
 }


 const sum2 = () => {
    console.log(arguments); // ARROW FUNCTION HAS NOT ARGUMENTS
 }


 sumAllArguments(3, 2, 1, 2, 3, 4);


 sum2(3, 2, 1, 2, 3, 4)