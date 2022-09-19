/* Логічні оператори */

//!true = false
// !false = true
// !!true = true;
// !!false = false;

/// Порівняння
// > - більше
// < - менше
// >= - більше або дорівнює
// <= - менше або дорівнює

// Логічне І (AND) - кон'юнкція
true && true 
true
true && false
false
false && true
false
false && false
false

// Повертає перший false або останній true, якщо всі true

const res = 2 && 'a' && {}; // {}
const res2 = 1 && true && null;

const res3 = 2+2 && 3+3 && 0 && 5;


// Логічне АБО - диз'юнкція
// повертає true, коли хоча б один операнд - true
true || true
true
true || false
true
false || true
true
false || false
false

// перший true-операнд, якого зустріне, або останнє false


const res5 = undefined || '' || 2;
const res6 = '' || 1 || 0;