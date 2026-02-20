//Functions:
//==> A function is a block of code that runs when you call it.
//It helps you reuse code instead of writing the same code again and again.
//Function syntax:
// let greet = function() {
//   console.log("Good morning");
// };

// greet();

// Types of function:
//1️⃣ Function Declaration
//2️⃣ Function with Parameters
//3️⃣ Function with Return Value
//4️⃣ Function Expression
//5️⃣  Method Object Function
//4️⃣ Arrow Function (ES6)
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

// 2️⃣ Function with Parameters

//                          a, b → parameters

//                          5, 3 → arguments
function add(a, b) {
  console.log(a + b);
}

add(5, 3);

//    (or)

add(5, 3);
function add(a, b) {
  console.log(a + b);
}

//3️⃣ Function with Return Value
//                                
// without return
function naveen( a,b){
    console.log(a+b);      
    
}
let result =naveen(10,11)
console.log(result);

//                                    * with return
//                                     * Return sends value back. 

function babi(c,d){
    return c-d;
}
 value=babi(10,5)
console.log(value);    // 5 output
console.log(value+10);  // 15 output


//4️⃣ Function Expression

//                                   Function stored inside variable. 

let addition = function(naveen,raju){
console.log(`my name is ${naveen} my friend name is ${raju}`);

}
addition('naveen',' raju')







//5️⃣  Method Object Function
//                                      👉 When a function is written inside an object, it is called a method

let phone = {
    brand1 : 'iphone',
    cost   :  150000,
    brand2 :  'google pixel',
    cost2  :   100000,
mobile : function(){
        console.log(`i have  the phone like ${this.brand1} and its cost is ${this.cost} and my friend have phone like ${this.brand2} and its cost is ${this.cost2}`);
        
    }
}
phone.mobile()

// hoisting && scopes




// function test(){
//     var b = 1;
   
//     var a = 2;
   
// }
// test();
//  console.log(a);
// console.log(b);
myFunction();
 var num ='enter the number'
function myFunction() {
    console.log(num);

    let localVar = "I am local";
    console.log(localVar); // Output: I am local
}





 
