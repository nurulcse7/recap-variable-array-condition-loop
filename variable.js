/* 
------------------
VARIABLE
-------------------
1. What is JavaScript?
2. How does JS Works?
3. What is Variable?
4. Declare a variable
5. Types of Variable? How can you find out type of a variable
6. Primitive and non-primitive data types
7. Naming Convention of JS variables
8. Math Operation +, -, *, /, %
9. Short hand: +=, -=, *=, /=
10. ++, --
11. parseInt, ParseFloat
12. toFixed


1. What is JavaScript?
Ans. JavaScript is a interpreted, scripting language that enables you to create dynamically 
updating content, control multimedia, animate images, and pretty much everything else. 

2. How does JS Works?
Ans. JS is a single threaded and single concurrent programming language which means 
it can handle one task at a time or, in other words, a piece of code at a time. 
It's an interpreted programming language, and like most scripting languages, 
it uses dynamic typing, where type safety is verified at the runtime.

3. What is Variable?
Variable means anything that can vary. 
In JavaScript, a variable stores the data value that can be changed later on. 
Use the reserved keyword var, let or const to declare a variable in JavaScript.
*/
4. // Declare a variable
let money = 100;


5.// Types of Variable? How can you find out type of a variable

var price = 100;
console.log(typeof price); // print number

var price = '100';
console.log(typeof price);  // print string

var isHappy = true;
console.log(typeof isHappy); // print boolean

var romantic;
console.log(typeof romantic); //print undefined

/*
6. Primitive and non-primitive data types

S/N	Primitive	        Non-Primitive
01.	Number / Numeric	 Array
02.	String	             Object
03.	Boolean	             Function
04.	Undefined	         RegEx
05.	Null	             Date
06.	Symbol	             Map
07.	BigInt	             Set
*/

// 7. Naming Convention of JS variables

// 1. variable name can not be any keywords /reserved word
var false = 96; // variable declare not ok
var return = true;  // variable declare not ok

// 2. variable name can not starts with a number but can ends with a number
var 99Club = 1964;  // variable declare not ok
var club25 = 2025;  // variable declare ok

// 3. variable name can not have quotation/string
var "name" = "Tom Hanks"; // variable declare not ok
var name = "Tom Hanks"  // variable declare ok

// 4. variable name has to be in one work. No space
var my home address = "New California"; // variable declare not ok

// 5. variable name can not use dash
var user-name = "raj bappa"; // variable declare not ok
var user_name = "bappa raj"; // variable declare ok

// 6. How to use long names
var usercurrenthomeaddress = "andor killa bandor ban"; // variable declare not ok
var user_home_address = "andor killa bandor ban"; // snake case
var userHomeAddress = "andor killa bandor ban"; // camel case: we will use this one
var UserHomeAddress = "andor killa bandor ban"; // pascal case

// 7. variable name is case sensitive (keyword same but different variable name)
var person = 25;
var Person = 35;

/*
8. Math Operation +, -, *, /, %
Normal	        Full Form (various 1)	Shorthand	Full Form (various 10)	     Shorthand
price1+ price2	price1 = price1 + 1	    price1++	var price1 = price1 + 10	var price1 +=  10
price1- price2	price1 = price1 - 1	p    rice1--	var price1 = price1 - 10	var price1 -=  10
price1* price2			                            var price1 = price1 * 10	var price1 *=  10
price1/ price2			                            var price1 = price1 / 10	var price1 /=  10

Remainder / Modulus
var mangoes = 19;
var person = 7;
var remainder = mangoes % person;
console.log(remainder); // print 5
// / this means quotient (ভাগফল )
// % this means remainder (ভাগশেষ)


9. Short hand: +=, -=, *=, /=
10. ++, --
*/

// 11. parseInt, ParseFloat
// Two-string addition
var firstName = 'Nurul';
var secondName = 'Islam';
console.log(firstName + ' ' + secondName) // print Nurul Islam

var price1 = '30';
var price2 = '10';
var price1Number = parseInt(price1);
var price2Number = parseInt(price2);
console.log(price1Number + price2Number) // print 40

// one string addition
var price1 = '30';
var price2 = 10;
var price1Number = parseInt(price1);
console.log(price1Number + price2) // print 40

// string (decimal) to integer conversion
var gpa = '4.67';
var gpaNumber = parseInt(gpa);
console.log(gpaNumber); // print 4

// string (decimal) to float conversion
var cgpa = '3.41';
var cgpaNumber = parseFloat(cgpa);
console.log(cgpaNumber);  // print 3.41


// 12. toFixed

var num1 = 0.1;
var num2 = 0.2;
var sum = num1 + num2;
sum = sum.toFixed(1);
sum = parseFloat(sum);
console.log(sum); // print 0.3

