import { productsApi } from "./Logic.js";


let cart = JSON.parse(localStorage.getItem('cart')) || []
let count =  document.getElementById('count')
count.innerHTML= cart.length

let cont = document.getElementById('container')

let apiProducts = await productsApi()

 function renderProducts(p) {

    let loadP = p.map(i=>{
        return `
            <div id="card">
            <img src="${i.thumbnail}" alt="">
            <h1>${i.title}</h1>
            <p>${i.description}</p>
            <button onclick="AddProduct(${i.id})">Add Cart</button>
        </div> 
        `
    })
    cont.innerHTML = loadP.join('')
    console.log(cont);
}

renderProducts(apiProducts)    

let search = document.getElementById('search')
console.log(search);

search.addEventListener('input',(e)=>{
    let value = search.value
    let temp = apiProducts.filter(p => p.title.toLowerCase().includes(value.toLowerCase()))
    renderProducts(temp)
})


// addProduct


function AddProduct(pro){

    let temp = apiProducts.find(p => p.id == pro)
    alert(`Product ${temp.title} Added`)
    cart.push(temp)
    count.innerHTML = cart.length
    localStorage.setItem('cart',JSON.stringify(cart))
    
}

window.AddProduct = AddProduct



