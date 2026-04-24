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
            <mark>${i.price}</mark>
            <br>
        <mark>${i.rating}</mark>

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


let three = document.getElementById('three')
let four = document.getElementById('four')
let priceR = document.getElementById('priceR')
let valueP = document.getElementById('valueP')


function allFillter(params) {

    let filterP = [...apiProducts]

    let maxPrice = Number(priceR.value) || 100

    valueP.innerHTML = maxPrice

    filterP = filterP.filter(p=> p.price >= 0 && p.price <=maxPrice)

    let selectP = []

    if (three.checked) {
        selectP.push(3)
    }

       if (four.checked) {
        selectP.push(4)
    }

    if (selectP.length >= 0) {
        filterP = filterP.filter(p=> selectP.includes(Math.floor(p.rating)))
    }

    renderProducts(filterP)

}

three.addEventListener('change',allFillter)
four.addEventListener('input',allFillter)
priceR.addEventListener('input',allFillter)






// addProduct


function AddProduct(pro){

    let temp = apiProducts.find(p => p.id == pro)
    alert(`Product ${temp.title} Added`)
    cart.push(temp)
    count.innerHTML = cart.length
    localStorage.setItem('cart',JSON.stringify(cart))
    
}

window.AddProduct = AddProduct



