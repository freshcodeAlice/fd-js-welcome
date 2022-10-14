const arr = [2, 1, 1, 1, 2, 4, 5, 6];
//undefined
[...new Set(arr).keys()]
//(5) [2, 1, 4, 5, 6]
const set1 = new Set(arr)
//undefined
set1;
//Set(5) {2, 1, 4, 5, 6}[[Entries]]0: 21: 12: 43: 54: 6size: 5[[Prototype]]: Set
set1.has(1)
//true
set1.has(7)
//false
set1.clear()
//undefined
set1;
//Set(0) {size: 0}[[Entries]]Немає властивостейsize: 0[[Prototype]]: Set
set1.add(3)
//Set(1) {3}
set1.add(4)
//Set(2) {3, 4}
set1.add(5)
//Set(3) {3, 4, 5}
set1.delete(1)
//false
set1.delete(3)
//true
set1;
//Set(2) {4, 5}[[Entries]]0: 41: 5size: 2[[Prototype]]: Set
set1.delete(3)
//false


/*
Дані два масива:

const arr1 = [2, 7, 5, 1, 9, -10];
const arr2 = [4, 2, 7, 10];

// [2, 7, 5, 1, 9, -10, 4, 10];


*/

 const arr1 = [2, 7, 5, 1, 9, -10];
 const arr2 = [4, 2, 7, 10];

const res = [...new Set([...arr1, ...arr2])]