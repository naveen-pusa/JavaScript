// setTimeOut 
// clearTimeOut

// SetInterval

// clearInterval

// setTimeOut(()=>{} , time , arguments)


// let timeDelay =   (time)=>{
// console.log('this is function exceuts after ' + time);

// }

// let a  = setTimeout(timeDelay , 3000 , "3secs")

// document.getElementById('btn').addEventListener('click',()=>{
//     console.log("timedelay stops");
    
//     clearTimeout(a)
// })


// let intervalTIme = ()=>{
// console.log('this function excutees fr every 2 secs');
// }

// let a = setInterval(intervalTIme,2000)

// document.getElementById('btn').addEventListener('click',()=>{
//     console.log('interval times stops');
    
//     clearTimeout(a)
// })


// let caro = [
// "https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg",
// 'https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg',
// 'https://images.pexels.com/photos/167699/pexels-photo-167699.jpeg',
// ]


// let count =0 ;

// setInterval(()=>{

//     if (caro.length > count) {
//         document.getElementById('img').src = caro[count]
//       count++
//     }else{
          
//         count = 0
//     }

// },1000)