let cart = JSON.parse(localStorage.getItem('cart')) || []

let cont = document.getElementById('container')
console.log(cart);


function cartRender() {
    let cartR = cart.map(i =>{
        return `
           <div id="card">
            <img src="${i.thumbnail}" alt="">
            <h1>${i.title}</h1>
            <p>${i.description}</p>
            <button onclick="removeCart(${i.id})">Remove</button>
        </div>         
        `
    })
    cont.innerHTML = cartR.join()
}

cartRender()

function removeCart(pro) {
    let temp = cart.find(p => p.id == pro)
    cart = cart.filter(p=> p.id !== pro)
    console.log(cart);
    alert(`Product Removed ${temp.title} `)
    localStorage.setItem('cart',JSON.stringify(cart))
    // return cart

cartRender()
}

window.removeCart = removeCart