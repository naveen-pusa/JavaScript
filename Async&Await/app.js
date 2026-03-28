// async and await 


// async which is used to return before function to create async function
// await which is a keyword it is used to return before a promise 

let p1 = new Promise((reslove,reject)=>{
  setTimeout(()=>{
reslove('this promise one taking time  ')
  },10000)
})

let p2 = new Promise((reslove,reject)=>{
  setTimeout(()=>{
reslove('this promise two taking time  ')
  },20000)
})




async function dataA() {
   console.log('this is js');
   
    let a = await p1
    console.log(a);
    console.log('this is js default');

       
    let a1 = await p2
    console.log(a1);
      console.log('this is js 2 default');
    
}

console.log(dataA());


// function dataB() {
   
//     p1.then(res=> console.log(res)).then(()=> console.log('this is js p') )  
// }
// console.log(dataB());
