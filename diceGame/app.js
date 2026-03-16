

function diceGame() {
    let dice = document.getElementById('dice')
    let h2  = document.getElementById('h2')
   
    h2.innerHTML = ''
     dice.classList.add('addRotate')
    setTimeout(()=>{
         let randomNum = Math.floor(Math.random()*7)
        h2.innerHTML = randomNum
        dice.classList.remove('addRotate')
    },2000)


}




