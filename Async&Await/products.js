// let apidata = fetch('https://dummyjson.com/products')

// console.log(apidata);


let cont = document.querySelector(".container")
async function dataApi() {
let productsapi = await fetch('https://dummyjson.com/products')
let {products} =   await productsapi.json()
console.log(products);
let data = products.map(product =>{
    return `
       <div id="card">
        <img src="${product.thumbnail}" alt="">
        <h2>${product.title}</h2>
        <p>${product.description}</p>
    </div>    
    `
}).join('')
cont.innerHTML = data;

}
dataApi()