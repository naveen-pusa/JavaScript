//Functions:
//==> A function is a block of code that runs when you call it.
//It helps you reuse code instead of writing the same code again and again.
//Function syntax:
let greet = function() {
  console.log("Good morning");
};

greet();

// Types of function:
// 1️⃣ Function Declaration
//2️⃣ Function Expression
// 3️⃣ Arrow Function (ES6)
//4️⃣ Function with Parameters
//5️⃣ Function with Return Value
//6️⃣ Anonymous Function
//7️⃣ Callback Function


// 1️⃣ Function Declaration
//  (a and b are values passed into the function.)
// function add(a,b){
//     console.log(a+b);
    
// }
// add(5,3)

// var add = function(a, b) {
//   console.log(a + b);
// }

// add(5, 3);

//other way
// function add(a,b){
//     console.log(a+b);
    
// }
// add(2,8)


let num = prompt("Enter number");

if (num % 3 == 0 && num % 5 == 0) {
  alert("FizzBuzz");
}
else if (num % 3 == 0) {
  alert("Fizz");
}
else if (num % 5 == 0) {
  alert("Buzz");
}
else {
  alert("Not divisible by 3 or 5");
}