/* 
--------------------
CONDITIONALS
--------------------
1. meaning of: >, <, >=, <=, ==, !=, ===, !==, 
2. Meaning of &&
3. Meaning of ||
4. Let's say you have x amount of money. if you have more than 80,000, then you will by a mac
if more than 60,000 then you will by gaming laptop
if you more than 40,000 then  you will by Lenovo Yoga
if you have more than 20, 000 then  you will by an used laptop
otherwise, you will use you mobile phone
*/


/*
1. meaning of: >, <, >=, <=, ==, !=, ===, !==, 
2. Meaning of &&
3. Meaning of ||
Answer to the question no 1, 2, 3

var num1 = 56;
var num2 = 89;
console.log( num1 < num2); // print  true
console.log( num1 > num2); // print  false
console.log( num1 === num2); // print  false
console.log( num1 !== num2); // print  true
console.log( num1 >= num2); // (greater than or equal)// print  false
console.log( num1 <= num2); // (less than or equal) // print true

// multiple conditions
money1 > money2 && result1 > result2 && height1 > height2
money1 > money2 || result1 > result2 || height1 > height2

Comparison Operators https://www.w3schools.com/js/js_comparisons.asp 

Given that x = 5, the table below explains the comparison operators:

Operator	     Description	              Comparing	Returns	
==	         equal to	                      x == 8	false	
                                              x == 5	true	
                                              x == "5"	true	
===	  equal value and equal type              x === 5	true	
                                              x === "5"	false	
!=	    not equal	                          x != 8	true	
!==	not equal value or not equal type	      x !== 5	false	
                                              x !== "5"	true	
                                              x !== 8	true	
>	greater than 	                           x > 8	false	
<	less than	                               x < 8	true	
>=	greater than or equal to	              x >= 8	false	
<=	less than or equal to	                  x <= 8	true	
&&	and	                           (x < 10 && y > 1) is true	
||	or	                          (x == 5 || y == 5) is false	
!	not	                                   !(x == y) is true
*/

// 4. Let's say you have x amount of money. 
//if you have more than 80,000, then you will by a mac
// if more than 60,000 then you will by gaming laptop
// if you more than 40,000 then  you will by Lenovo Yoga
// if you have more than 20, 000 then  you will by an used laptop
// otherwise, you will use you mobile phone

var money = x; // time to time will be change
var macPrice = 80000;
var gamingLaptopPrice = 60000;
var lenovoYogaPrice = 40000;
var usedLaptopPrice = 20000;

if(macPrice > 80000){
    console.log('I wanna go to buy mac')
}
else if(gamingLaptopPrice > 60000){
    console.log('I wanna go to buy Gaming Laptop')
}
else if(lenovoYogaPrice > 40000){
     console.log('I wanna go to buy Lenovo Yoga')
}
else if(usedLaptopPrice > 20000){ 
    console.log('I wanna go to buy Used Laptop')
}
else{
    console.log('I wanna go to buy Mobile Phone')
}
