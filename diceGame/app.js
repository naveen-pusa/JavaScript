

function diceGame() {
    let dice1 = document.getElementById('dice1')
    let h2  = document.getElementById('h2')
   
    h2.innerHTML = ''
     dice1.classList.add('addRotate')
    setTimeout(()=>{
         let randomNum = Math.floor(Math.random()*7)
        h2.innerHTML = randomNum
        dice1.classList.remove('addRotate')
    },2000)


}




