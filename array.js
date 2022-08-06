/* 
---------------------
ARRAY
-----------------------
1. What is the purpose?
2. How to declare an array in JS
3. Number of elements in an Array
4. What is index? 
5. Find the value of an element by index
6. Change an element by index
7. get the index of an element by the value
8. what does it mean when you get undefined while getting the value of an element by index
9. How can you add an element to an array at the last position
10. How can you remove the last element from array
11. Add an element at the first position of an array
12. Remove the first element of an array
*/


/* 1. What is the purpose of array in js?
Ans. 
An array in JavaScript is a type of global object used to store data.
Arrays can store multiple values in a single variable, which can condense and organize our code. 
JavaScript provides many built-in methods to work with arrays, including mutator, accessor, and iteration methods.
*/

// 2. How to declare an array in JS?
var numbers = [45, 68, 78, 56, 89, 98];

// 3. Number of elements in an Array
var numbers = [46, 67, 79, 55, 88, 99];
var element = numbers.length;
console.log(element)

/*
4. What is index? 
Ans.
The indexOf() method returns the first index (position) of a specified value. 
The indexOf() method returns -1 if the value is not found.
*/
var numbers = [45, 68, 78, 56, 89, 98];
var positionIndex = numbers.indexOf(46);
console.log(positionIndex); // print  -1


// 5. Find the value of an element by index
// get element value by index
var numbers = [45, 68, 78, 56, 89, 98];
var element = numbers[1];
console.log(element); // print 68

// 6. Change an element by index
//  set element value by index
var numbers = [45, 68, 78, 56, 89, 98];
numbers[1] = 77;
console.log(numbers); // print [ 45, 77, 78, 56, 89, 98 ]

// 7. get the index of an element by the value
//  find index of an element
var numbers = [45, 68, 78, 56, 89, 98];
var positionIndex = numbers.indexOf(89);
console.log(positionIndex); // print  4



// 8. what does it mean when you get undefined while getting the value of an element by index?
//  If not found index of an element
var numbers = [45, 68, 78, 56, 89, 98];
var positionIndex = numbers.indexOf(46);
console.log(positionIndex); // print  -1
// *** The indexOf() method returns -1 if the value is not found.


// 9. How can you add an element to an array at the last position?
var numbers = [45, 68, 78, 56, 89, 98];
numbers.push(63);
console.log(numbers); // print [ 45, 77, 78, 56, 89, 98, 63]

// 10. How can you remove the last element from array?
// Deleting an element to an array as the last element array.
var numbers = [45, 68, 78, 56, 89, 98, 63];
numbers.pop();
console.log(numbers); // print [64, 45, 77, 78, 56, 89, 98]


// 11. Add an element at the first position of an array
// Adding an element to an array as the fast element array.
var numbers = [45, 68, 78, 56, 89, 98];
numbers.unshift(64);
console.log(numbers); // print [ 64, 45, 77, 78, 56, 89, 98, 63]

// 12. Remove the first element of an array
// Deleting an element to an array as the fast element array.
var numbers = [64, 45, 68, 78, 56, 89, 98];
numbers.shift(64);
console.log(numbers); // print [ 45, 77, 78, 56, 89, 98]
