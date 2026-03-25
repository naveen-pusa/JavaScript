


// function dat1() {
   
// }

// let p = new Promise((reslove,reject)=>{
// setTimeout(()=>{
// console.log('task2');
// reslove()
// },2000)
// }).then(()=>{
//  console.log('task3')
// })
// console.log(p);



// apis 

// fetch()

// fetch gives promises
// fetch returns data once only promise get resloved

function randomQuotes() {

//   let quotation = document.getElementById('quotation')
//   let author = document.getElementById('author')  
  let pr = document.getElementById('pr')
  let rp = document.getElementById('rp')

  let randomNum = Math.floor(Math.random()*501)
  console.log(randomNum);
  

let apiQuotes = fetch('https://dummyjson.com/quotes?limit=500')
.then((res)=>{
    // console.log(res.json());   
    return res.json() 
})
.then(({quotes})=>{
    console.log(quotes);
    pr.innerHTML=`<h3>${quotes[randomNum].quote}</h3>`
   rp.innerText =quotes[randomNum].author



    
    // console.log(quotes[randomNum].quote);
    // console.log(quotes[randomNum].author);


    
})




}

// randomQuotes()




