let products =[
{title:'iphone', img:'https://media.idownloadblog.com/wp-content/uploads/2018/07/Apple-logo-black-and-white.png',           cost:100000, about:'This is iphone', id:1 },
{title:'vivo'  , img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRotV2QgOFVYi3-6KE02eVVesLjOEcT5jtmHw&s',        cost:50000 ,  about:'This is Vivo' , id:2  },    
{title:'oppo'  , img:'https://5.imimg.com/data5/CY/EC/MY-33491000/oppo-logo-board-500x500.jpg',                             cost:30000 ,  about:'This is Oppo' , id:3  },
{title:'pixel' , img:'https://www.shutterstock.com/image-vector/pixel-logo-technology-600w-487093207.jpg',                  cost:80000 ,  about:'This is Pixel', id:4  },    
{title:'lava'  , img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEEfwCIZ7RQHYHEMLzCV7_usyIEOw4FnsazQ&s',        cost:20000 ,  about:'This is Lava' , id:5  },
{title:'redmi' , img:'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Xiaomi_logo.svg/960px-Xiaomi_logo.svg.png', cost:25000 ,  about:'This is redmi', id:6  },    
]

let cont = document.getElementById('container')

let cart = []
document.getElementById('r').innerHTML = cart.length


function renderProducts(dataP) {

 let mobiles =    dataP.map((item)=>{
   
       
       return`
          <div id="card">
            <h1>${item.title}</h1>
            <img src="${item.img}" alt="">
            <p>${item.cost}</p>
            <p>${item.about}</p>
            <button onclick="addProduct(${item.id})">Add TO cart</button>
        </div>
       
       `
    })

        cont.innerHTML = mobiles.join('')
}
renderProducts(products)

// fillter

    function filldata() {
        let search = document.getElementById('search').value

        let temp = products.filter(item=> item.title.toLowerCase().includes(search.toLowerCase()))
        console.log(temp);
        
        renderProducts(temp)
    }


    // addToCart

    // find 
    // let a  = [1,2,3,4,5,6,7,8]

    // let outPut = a.find(x => x == 10)
    // console.log(outPut);
    

    function addProduct(item) {
        let temp = products.find(p => p.id == item)
        alert(`Product ${temp.title} added to cart`)
        cart.push(temp)
        document.getElementById('r').innerHTML = cart.length
        console.log(cart);
        sum()
    }

    // reduce

    // let num = [1,2,3,4,5,6,7,8,9,10]
    // console.log(num);

    // let outpUt = num.reduce((acc,value)=>{
    //     // console.log(acc+value);
    //     return acc+value
        
    // })

    // console.log(outpUt);


    function sum() {
        let totalSum = cart.reduce((acc,value)=>{
                return acc+value.cost
        },0)

        console.log(totalSum);
        

        document.getElementById('result').innerHTML = totalSum
    }


//      let num = [100,20,15,2,3,4,5,6,7,8,9,10,12,]

//    let output = num.some(x=>{
//     console.log(x);
//     return x < 13
//    })

//    console.log(output);


// every


     let num = [3,4,5,6,7,8,9,10,12]

   let output = num.every(x=>{
    console.log(x);
    return x <=12
   })

   console.log(output);


   



    
    