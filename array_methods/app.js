// Array methods:
//Array methods are built-in functions used to work with arrays (add, remove, loop, search, etc.).

//1.Add elements:

// lenght
var phones=['redmi','vivo','poco','apple']
console.log(phones.length);


//push() → add at end

var nam=['raju','rakesh','nani','jp','babi','naveen']
nam.push('rani')
console.log(nam); 

//unshift() → add at start

var nam=['raju','rakesh','nani','jp','babi','naveen']
nam.unshift('rani')
console.log(nam); 

//2. Remove elements

//pop() → remove last

var nam=['raju','rakesh','nani','jp','babi','naveen']
nam.pop()
console.log(nam); 
//shift() → remove first

var nam=['raju','rakesh','nani','jp','babi','naveen']
nam.shift()
console.log(nam);


//------------------------------------------------------------------------------------------------------------------------------

//2. Searching

//includes()
let product =['phones','laptops','bags','dress']
console.log(product.includes('laptops'));           // if the give value is there then it will be true or false


//indexOf()

let numbers = [10, 20, 30, 40];
console.log(numbers.indexOf(20)); // it will give the index value for the given values

//by using the include:
//with using the include:
// let birthday = prompt('Enter the id names 😎')
//  let id =['rajesh', 'nani','raju','babi','naveen','jp']

//  if(id.includes(birthday.toLowerCase())){
//     alert('welcome to the party 🤩')
//  }
//  else{
//     alert('you are not invited to the party 😒')
//  }

//--------------------------------------------------------------------------------------------------------------------------

// 3. Sorting / order
//     *Sorts elements in order (alphabet or number).

//sort()
let arr = [5, 3, 8, 1];

arr.sort();
console.log(arr);

//reverse()

let num = [5,4,3,2,1];

arr.reverse();
console.log(num);

//-------------------------------------------------------------------------------------------------------------------------------

//4. Copy & modify

//slice()

//splice()

//concat()
// it will join the values:
let a = [1, 2];
let b = [3, 4];

let c = a.concat(b)
console.log(c);



 

