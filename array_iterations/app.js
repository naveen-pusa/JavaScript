//Array iteration:
//  means going through each item in an array one by one and doing something with it (print, change, sum, etc.).
//types:

//for loop
var fruits = ['mango','apple', 'bananna','graphs']

for (i=0; i<=fruits.length-1; i++){
    console.log(fruits[i]);
}

// for...of loop

var animals = ['cat','dog','ant','elephant']
for( i of animals){
    console.log(i);   // it shows in  the output animales one by one 
}
//for in loop
var products=['phone','laptop','dress','vegetables','fruits']

for (i in products){
    console.log(i); // in for in loop is shows in the output index values
    
}

//forEach() method (most used):

// let fruits = ["apple", "banana", "mango"];

// fruits.forEach(function(item) {
//   console.log(item);
// });


//map() (creates new array)

//  Used when you want a new array after changing values.

let numbers = [1, 2, 3, 4];

let doubled = numbers.map(n => n * 2);
console.log(doubled);

for (let a = 1; a <= 10; a++) {
  console.log(5 * a);
}