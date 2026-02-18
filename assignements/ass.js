// Write a function to generate Fibonacci sequence up to n terms.
// let a=0
// let b=1
// for (i=0; i<=10; i++){
//     let next= a+b
//     console.log(next);
//     a=b
//     b=next
// }


// 2. using the functions Fibonacci sequence
// function fib(n){
//     let a=0 
//     let b=2
//     for(let i=0; i<=n; i++){
//         next =a+b
//         console.log(next);
//         a=b;
//         b=next;  
//     }
// }
// fib(10)

// Write a recursive function to calculate factorial

// function factorial(p){
//   if(p === 0 || p === 1){
//     return 1;
//   }
//   return p * factorial(p-1);
// }

// console.log(factorial(5));

//Write a function to count vowels in a string.

// function letters(str){
//     count =0
//     vowels='aeiouAEIOU'
//    for( let a=0; a<=vowels.length; a++){
//     if(vowels.includes(str[a])){
//     count++
//    }
// }
// return count;
// }
// console.log( letters('hello  i am naveen'));

//  Write a function to reverse a string.

//  function raju(letters){
// return letters.split('').reverse().join('')
    
//  }
//  console.log(raju('hello'));
 
// Write a function to check if a number is even or odd.

// let a = Number(prompt('enter the number'))
// for (let i =0; i<=a; i++){
//     if(i%2==0){
//         alert(i+ 'even')
//     }else{
//         alert(i+ 'odd')
//     }
// }


//2.Create a JavaScript program that calculates electricity bills based on the following criteria:

let units = 210; // units consumed
let bill = 0;

if(units <= 50){
    bill = units * 1;
}
else if(units <= 100){
    bill = 50 * 1 + (units - 50) * 2;
}else if(units<=150){
    bill =50*1+50*2+(units-100)*3
}
else if(units<=200){
    bill =50*1+50*2+50*3+(units-150)*4
}else {
    bill =50*1+50*2+50*3+50*4+(units-200)*5
    bill = bill-(bill*0.10)
}



console.log("Total Electricity Bill: ₹" + bill);