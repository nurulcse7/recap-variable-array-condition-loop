/* 
------------------
LOOP
------------------
1. Display "Ajke amar mon valo nei" for 39 times
2. Display numbers between 58 to 98
3. Show all even numbers from 412 to 456
4. Show all odd numbers 581 to 623
5. Difference between while loop and for loop
6. Declare an array for all the topics that you have learned last few days
display then as output
7. Create an array for all the mobile phones. Display all the elements of the array
by using a while loop
8. Run a loop from 30 to 86. this loop will stop if the values get higher than 44
9. Write the price of the books that you have. 
Display the prices if the prices is lower than 200

*/


// 1. Display "Ajke amar mon valo nei" for 39 times
//Ans.
//Displaying with while loop
var number = 1;
while (number < 40) {
    // console.log(number, "Ajke amar mon valo nei")
    number++
}
// /Displaying with while loop
for (var number = 1; number < 40; number++) {
    // console.log(number, "Ajke amar mon valo nei")
}


// 2. Display numbers between 58 to 98
for (var number = 58; number <= 98; number++) {
    // console.log(number)
}

// 3. Show all even numbers from 412 to 456
for (var number = 412; number <= 456; number += 2) {
    // console.log(number);
}

// 4. Show all odd numbers 581 to 623
for (var i = 581; i <= 623; i += 2) {
    // console.log(i);
}

/* 5. Difference between while loop and for loop
Ans.
The while loop loops through a block of code as long as the specified condition evaluates 
to true. As soon as the condition fails, the loop is stopped. The generic syntax of the while loop is:
while(condition) {
    // Code to be executed
}

The for loop repeats a block of code as long as a certain condition is met. It is typically 
used to execute a block of code for certain number of times. Its syntax is:
for(initialization; condition; increment) {
    // Code to be executed
}
*/

/* 6. Declare an array for all the topics that you have learned last few days
display then as output
// Answer
// Declare Array
var numbers = [45, 68, 78, 56, 89, 98];

// 0. Number of elements in an Array
var numbers = [45, 68, 78, 56, 89, 98];
var element = numbers.length;
console.log(element) // print: 6

// 1. get element value by index
var numbers = [45, 68, 78, 56, 89, 98];
var element = numbers[1];
console.log(element); // print 68

// 2. set element value by index
var numbers = [45, 68, 78, 56, 89, 98];
numbers[1] = 77;
console.log(numbers); // print [ 45, 77, 78, 56, 89, 98 ]

// 3. find index of an element
var numbers = [45, 68, 78, 56, 89, 98];
var positionIndex = numbers.indexOf(89);
console.log(positionIndex); // print  4



// 3.1 If not found index of an element
var numbers = [45, 68, 78, 56, 89, 98];
var positionIndex = numbers.indexOf(46);
console.log(positionIndex); // print  -1
// The indexOf() method returns -1 if the value is not found.

// 4. Adding an element to an array as the last element array.
var numbers = [45, 68, 78, 56, 89, 98];
numbers.push(63);
console.log(numbers); // print [ 45, 77, 78, 56, 89, 98, 63]

// 5. Adding an element to an array as the fast element array.
var numbers = [45, 68, 78, 56, 89, 98];
numbers.unshift(64);
console.log(numbers); // print [ 64, 45, 77, 78, 56, 89, 98, 63]

// 6. Deleting an element to an array as the last element array.
var numbers = [45, 68, 78, 56, 89, 98, 63];
numbers.pop();
console.log(numbers); // print [64, 45, 77, 78, 56, 89, 98]

// 7. Deleting an element to an array as the fast element array.
var numbers = [64, 45, 68, 78, 56, 89, 98];
numbers.shift(64);
console.log(numbers); // print [ 45, 77, 78, 56, 89, 98] 
*/

/*7. Create an array for all the mobile phones. Display all the elements of the array
by using a while loop */
// Answer:
var phones = ['iPhone', 'Samsung', 'OnePlus', 'Xiaomi', 'Nokia']

var i = 0;
while (i < phones.length) {
    var phone = phones[i];
    // console.log(phone)
    i++
}

// 8. Run a loop from 30 to 86. this loop will stop if the values get higher than 44
// Answer:
var numbers = [30, 35, 40, 41, 42, 43, 44, 45, 46, 50, 60, 70, 80, 85, 86]
for (var i = 0; i < numbers.length; i++) {
    var number = numbers[i];
    if (number > 44) {
        break;
    }
    // console.log(number);
}

// 9. Write the price of the books that you have. Display the prices if the prices is lower than 200
// Answer:
var bookPrices = [100, 130, 150, 180, 200, 220, 250, 300]

for (var i = 0; i < bookPrices.length; i++) {
    var price = bookPrices[i];
    if (price > 200) {
        continue;
    }
    console.log(price);
}