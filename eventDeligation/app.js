let fruits = document.getElementById('fruits')
// console.log(fruits);

// fruits.forEach(item =>{
//     console.log(item);
    
//     item.addEventListener('click',(e)=>{
//         alert(`${e.target.textContent}`)
//     })
// })


// fruits.addEventListener('click',(e)=>{

//     if (e.target.tagName == 'LI') {
//         alert(`${e.target.textContent}`)
//     }

// })


let btn = document.getElementById('btn')

btn.addEventListener('click',()=>{

    let newLi = document.createElement('li')
    newLi.innerHTML = document.getElementById('inp').value

    fruits.append(newLi)
    
document.getElementById('inp').value = ''
})



