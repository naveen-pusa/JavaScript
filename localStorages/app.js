// webstorages

// localStorge
        // data will stored untill unless user deletes it
// sessionStorge
    // data will be stored at aparticular period of time only 


// setItem
// getItem
// removeItem
// clear


// localStorage.setItem('name','naveen')
// localStorage.setItem('age','naveen')
// localStorage.setItem('rolee',"DEV")
// localStorage.setItem('loc','jp')
// localStorage.removeItem('age')
// localStorage.clear()

// stringfy
// parse




// getItem

// let data= ['jp','naveen' , 'raghav']


// localStorage.setItem('data',JSON.stringify(data))


// let c = JSON.parse(localStorage.getItem('data'))
// console.log(c);


// let fruits;


// if (localStorage.getItem('fruits')) {
//     fruits = JSON.parse(localStorage.getItem('fruits'))
// } else {
//     fruits =[]
// }


// console.log(fruits);
// fruits.push('grapes')
// localStorage.setItem('fruits',JSON.stringify(fruits))


let input = document.getElementById('input')
let btn = document.getElementById('btn')
let ul = document.getElementById('data')

let fruitsList = JSON.parse(localStorage.getItem('furitsList')) || []


function renderList() {

ul.innerHTML = ''

    fruitsList.map(x =>{
        let li = document.createElement('li')
        li.innerHTML = x
        ul.append(li)
    })


}

btn.addEventListener('click',()=>{
    let inpData = input.value
    if (inpData) {
      fruitsList.push(inpData)
    }
    localStorage.setItem('furitsList',JSON.stringify(fruitsList))
     renderList()
input.value = ""

    
})

renderList()