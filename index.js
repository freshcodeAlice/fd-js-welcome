function square(b) {
    return b*b;
}


function superFunction(number, fn) { // функція вищого порядку (High Order Function - HOF)
    // отут може бути купа роботи самої функції superFunction
    fn(number); // callback - функція зворотнього виклику

}

superFunction(5, square);



