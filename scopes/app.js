// let num =100;

// {
// const num =101;
// }
// console.log(num);



// if (true) {
//     const num =102;
// }
 
// for (let i = 0; i < 10; i++) {
//     const num =103;
    
// }


// console.log(num);
// function data() {
//     const num =104;
// }

 

// data()


// lexicalScope


// function outer() {
//     let a = 100;
    
//     function inner() {
//         let b =200;
//         console.log(a);
//         console.log(b);        
//     }
//     inner()
// }

// outer()

// hoisting


// data()
// function data() {
//     console.log('namaste javascript');
// } 

// function greet(){
//     var a=10;
// console.log(a);
// {
//     // var a = 20
//     let b= 30
//     const c =40
// }
// console.log(a);
// // console.log(b);
// // console.log(c);

// }
// greet()

// console.log(a);


  // var 
//   var a; // decleration
//   var a=10 // assing
//   var a=20 // reassing and redecleration
//   console.log(a); // output 
  
// // let 
// let x; // decleration
// x= 20; //redeclare and assing 
//         // but we can't be reassing
// console.log(x);
// // const

// const y=20;
// console.log(y); // we cant reassing and redeclear


// let name = "xy"
//  name = "xp"






//  a = 10 
// //  console.log(a++);
// console.log(++a);

 
// for in
 let num = [10, 20, 30];

       for (let index in num) {
       console.log(index); 
       }
       for(let vu of num){
        console.log(vu);
        
       }

var phones = [ 
    {id: 10, brand:'vivio', cost: 25000 },
    {id: 10, brand:'iphone', cost:15000  },
    {id: 10, brand:' oppo', cost: 10000 }
    ]
    console.log(phones);
    console.log(phones[0]);
    console.log(phones[1].brand);
    
    let person ={
        name :'Naveen',
        class : 'Js',
        mode :'online'
    }
    console.log(person);
    for(let nm in person){
        console.log(nm);
        
    }

    for(let keys of Object.keys(person)){
        console.log(keys);
        
    }
    for(let value of Object.values(person)){
        console.log(value);
        
    }
    for(let [k,v] of Object.entries(person)){
        console.log(k);
        console.log(v);
        console.log(`Keys ${k} : Values ${v}`);  
    }
    
    