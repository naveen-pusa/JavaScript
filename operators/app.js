//OPERATORS:
//An operator is a symbol that tells JavaScript to do some action on values or variables.
// types of operators:
//1.Arithmetic Operators
//2.Assignment Operators
//3.Comparison Operators
//4.Logical Operators
//5.String Operators
//6.Type Operators
//7.Ternary Operator
//8.Coercion Operator

//1.Arithmetic Operators: it performs operation like  +, -, *, /, %, **, ++, --
//+
let a = 20
let b = 10
console.log(a + b);
console.log(a + b + 10);
console.log(a + '10' + b); // only in the + operator it will join the give value either inthe string. 
console.log(5 + 10);
//_
console.log(a - b);
console.log(a - b - '1');   // we have given the number in the strings it will works any operator but not in (+) operator
console.log(a - b - 'a');  // it will give NaN because it we are given the value (a)  so it was given the value like NaN
//*
console.log(a * b);
console.log(a * b * '5');
console.log(a * b * 'n');
console.log(5 * 10 * 100);
//  /
console.log(a / b);
console.log(a / b + 10);
console.log(a / b / '5');
console.log(a / b / 'd');  // it will give NaN because it we are given the value (a)  so it was given the value like NaN
// %
console.log(a % b);
console.log(b % a);
// **
console.log(a ** b);

// Increment operator
let num1 = 10
let num2 = 8
console.log(++num1 + num2);
console.log(num1 + num2++);
console.log(num1 + num2);
//Decrement operator
console.log(--num1 - num2);
console.log(num1 - num2--);
console.log(num1 - num2);
// both increment and decrement
console.log(++num1 - --num2);

//                 2.Assignment Operators   =, += ,-=, *= ,/= ,%=, **=
//                         They are used to store or update values in a variable.

//    =
let x = 10
console.log(x);

//    +=
x += 15
console.log(x);  // x+15=25

//    -=
let y = 20
    y -= 10
console.log(y);  // y-10=10

//    *=
let n = 10
    n *= 5
console.log(n); // n*5=50

//     /=   
let z = 50
    z /= 10
console.log(z);

//     %=  
let c = 10
    c %= 5
console.log(c);

//   **=
let d = 2
    d **= 6
console.log(d);


//                     3. Comparison Operators     ==,===,!=,!==,>,<,>=,<=  true(or)false
//                        Used to compare values
//                        Always return true or false

//   ==

let num3 = 100
    num4 = 50
console.log(num3 == num4); // false
// ===
console.log(10===10);  // true
console.log(20==='20'); // false because it will check the all the value and data we have given 
// !=
console.log(5 != '5'); //false
// !===
console.log(6 !== 6);
console.log(6 !== '6');
//  >
console.log(10>5);
//  <
console.log(10<5);
// >=
console.log(10>=5);
// <=
console.log(10<=5);


let babi = 100
naveen =  50
console.log(prompt(babi+naveen));















    
























