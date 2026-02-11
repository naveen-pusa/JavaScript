// let text = prompt('Enter the text')
// let msg = text.length
// if ( msg>0 && msg<25  ){
//    alert('You have the typed the 25 words only you have space for another 25 letters')
// }else if (msg>=25 && msg<=50 ) {
//     alert('You are reached 50 letters there no space for type the letters')
// }else if(msg>50){
//     alert(' You have reached to 50 letters there no sapce to type the letters')
// }else{
//     alert('Type somthing in the box')
// }


// let text = prompt('hello world')
// result = text[0].toUpperCase() + text.slice(1), text.toLowerCase()
// alert(result)
// console.log(result);



// for (i=1; i<=5; i++){
//     console.log(i);
    
// }

//conditional statements
//Conditional statements are used to make decisions in code.
//They run different blocks of code depending on a condition (true or false).

//Types:
//if statement
// let a=20;
// if (a>=30){
//     console.log('you are age is 30'); // if the given statement if false it will not print
// }

//if else
// let age =20;
// if (age>=25){
//     console.log('you can vote');}
// else{
// console.log('you are unable to vote'); 

// }


// if else if
// let a = prompt('enter the a value');
// let b =prompt('enter b value')
// if(a>b){
//     alert('a value is big')
// }else{
//     alert('b value is big')
// }

// usig the two numbers

// let c=prompt('enter the number')
// if (c%5==0){
//     if (c%2==0){
//         alert(' it is divided by both 5 and 2')
// }else{
//     alert(' is only divided by 5')
// }
// }if (c%2==0){
//     alert(' it is divided by 2')
// }else{
//     alert('it is not dvided by both 5 and 2')
// }



 // Conditional Statements :
//      Conditional statements are used to make decisions in a program.
//      They execute different blocks of code based on conditions (true or false).
//                        if → Single condition
//                        if-else → Two choices
//                        if-else if → Multiple conditions
//                        switch → Many fixed values
//                        ternary → Short form

// ------------------------------------------------------------------------------------------------------------


// 1. if Statement: Executes code only if the condition is true.

// Syntax:
//       if (condition) {
//           code to execute
//       }

// Example:
let agee = 18;
if (agee >= 18) {
    console.log("You are eligible to vote");
}

// ------------------------------------------------------------------------------------------------------------


// 2. if...else Statement :    Executes one block if condition is true, otherwise another block.

//  Syntax:
//         if (condition) {
//             // true block
//         } else {
//             // false block
//         }

// Example:
let number = 5;
if (number % 2 === 0) {
    console.log("Even number");
} else {
    console.log("Odd number");
}

// ------------------------------------------------------------------------------------------------------------


// 3. if...else if...else Statement :  Used when checking multiple conditions.

//  Syntax:
//         if (condition1) {
//             // block 1
//         } else if (condition2) {
//             // block 2
//         } else {
//             // default block
//         }

// Example: 
let marks = 75;
if (marks >= 90) {
    console.log("Grade A");
} else if (marks >= 70) {
    console.log("Grade B");
} else if (marks >= 50) {
    console.log("Grade C");
} else {
    console.log("Fail");
}

// ------------------------------------------------------------------------------------------------------------


// 4. Nested if Statement:     An if statement inside another if.
//  Example:
let ageee = 20;
let hasID = true;

if (ageee >= 18) {
    if (hasID) {
        console.log("Entry allowed");
    } else {
        console.log("ID required");
    }
} else {
    console.log("Not eligible");
}

// ------------------------------------------------------------------------------------------------------------


// 5. switch Statement: Used when checking multiple values of the same variable.

//  Syntax:
// switch (expression) {
//     case value1:
//         // code
//         break;
//     case value2:
//         // code
//         break;
//     default:
//         // default code
// }

// Example:
let day = 2;

switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    default:
        console.log("Invalid day");
}

// ------------------------------------------------------------------------------------------------------------


// 6. Ternary Operator (Short if-else):    Short form of if-else.

//  Syntax:
//           condition ? trueValue : falseValue;

// Example
let age = 16;
let result = (age >= 18) ? "Adult" : "Minor";
console.log(result);

