//loops
// for loop, while loop, do while loop


// for loop
// for (let i = 0; i <= 3; i++) {
//     for (let j = 0; j <= 3; j++) {
//       document.body.innerHTML+=`
//       ${'*'}`
//     } 
//    document.body.innerHTML+=`
//    <br>`
    
// }
// even numbers
// for (let i=0; i<=10; i++){
//     console.log(i++);
    
// }
//odd numbers
// let i=3
// for (let i=0; i<=30; ++i){
//     console.log(i++);
    
// }

//while loop
// let j=0;
// while(j<=10){
//     console.log(j);
// j++
    
// }


//while loop with cards
// let courses =['java','python','javascript','html','sql', 'pythonfullsatck']
// let j=0;
// while(j<courses.length){
//     document.body.innerHTML+=`
//    <div id=card>
//         <h1>${courses[j]}</h1>
//         <img src="data:image/png;base64,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" alt="">
//         <p> java is for code to creat web applications</p>
//     </div>`
//     j++;
    
// }

// do while loop
// var i=0;
// do{
//     console.log(i);
//     i++
// }
// while(i<=5)


// do while loop with cards
// let subjects =['maths','telugu','hindi','java','python',]
// var i=0;
// do{
//     document.body.innerHTML+=`
//     <div id=card>
//         <h1>${courses[j]}</h1>
//         <img src="data:image/png;base64,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" alt="">
//         <p> java is for code to creat web applications</p>
//     </div>`
//     `
//     i++
// }
// while(i<=5)



//triangle 

// for (let i = 1; i <= 5; i++) {
//   console.log('*'.repeat(i));
  
// }

//cards using the while loop

// both odd and even numbers

let i;
for (i=1; i<=30; i++){
    if(i%3 == 0 || i%2==0){
        console.log(i);
        
    }
    
}

