// function test(){
//    return "Hello"
   
// }
// console.log(test());

// ArrayIteration


let mobilep = [
{id:1,title:'iphone',img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ1DISkaViSRDrMz9dwTBirRCe_Olaxzfx_lQBqD1qp_JXUMoOtlaQpBSjJc5tcllYTM40gdJxZb1JNt5KDOpOcf_r-9bbwpl-vjFxxFljfg&s=10',desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore atque amet, iure voluptas recusandae voluptatum.'},
{id:2,title:'iphone',img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ1DISkaViSRDrMz9dwTBirRCe_Olaxzfx_lQBqD1qp_JXUMoOtlaQpBSjJc5tcllYTM40gdJxZb1JNt5KDOpOcf_r-9bbwpl-vjFxxFljfg&s=10',desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore atque amet, iure voluptas recusandae voluptatum.'},
{id:3,title:'iphone',img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ1DISkaViSRDrMz9dwTBirRCe_Olaxzfx_lQBqD1qp_JXUMoOtlaQpBSjJc5tcllYTM40gdJxZb1JNt5KDOpOcf_r-9bbwpl-vjFxxFljfg&s=10',desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore atque amet, iure voluptas recusandae voluptatum.'},
{id:4,title:'iphone',img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ1DISkaViSRDrMz9dwTBirRCe_Olaxzfx_lQBqD1qp_JXUMoOtlaQpBSjJc5tcllYTM40gdJxZb1JNt5KDOpOcf_r-9bbwpl-vjFxxFljfg&s=10',desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore atque amet, iure voluptas recusandae voluptatum.'},
{id:5,title:'iphone',img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ1DISkaViSRDrMz9dwTBirRCe_Olaxzfx_lQBqD1qp_JXUMoOtlaQpBSjJc5tcllYTM40gdJxZb1JNt5KDOpOcf_r-9bbwpl-vjFxxFljfg&s=10',desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore atque amet, iure voluptas recusandae voluptatum.'},    
]

// ForEach
// map
// filter
// find
// reduce
// some
// every


//     <div id="card">
//         <h1>${mobilep[i].title}</h1>
//         <img src="${mobilep[i].img}" alt="">
//         <p>${mobilep[i].desc}</p>
//     </div>
 

// ForEach:

// let container =  document.getElementById('container')
// mobilep.forEach(product=>{
//     container.innerHTML += `
//       <div id="card">
//          <h1>${product.title}</h1>
//          <img src="${product.img}" alt="">
//          <p>${product.desc}</p>
//      </div>  
      
//     `
// })


// map:


let products =[

{tittle:'iphone', img:'https://media.idownloadblog.com/wp-content/uploads/2018/07/Apple-logo-black-and-white.png',           cost:100000, about:'This is iphone'  },
{tittle:'vivo'  , img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRotV2QgOFVYi3-6KE02eVVesLjOEcT5jtmHw&s',        cost:50000 ,  about:'This is Vivo'    },    
{tittle:'oppo'  , img:'https://5.imimg.com/data5/CY/EC/MY-33491000/oppo-logo-board-500x500.jpg',                             cost:30000 ,  about:'This is Oppo'    },
{tittle:'pixel' , img:'https://www.shutterstock.com/image-vector/pixel-logo-technology-600w-487093207.jpg',                  cost:80000 ,  about:'This is Pixel'   },    
{tittle:'lava'  , img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEEfwCIZ7RQHYHEMLzCV7_usyIEOw4FnsazQ&s',        cost:20000 ,  about:'This is Lava'    },
{tittle:'redmi' , img:'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Xiaomi_logo.svg/960px-Xiaomi_logo.svg.png', cost:25000 ,  about:'This is redmi'   },    
]



let container = document.getElementById('container')
 

let phones = products.filter(mobile =>(mobile.cost)<50000)
.map(mobile=>{
    return  `
    <div id="card">
    <h2>${mobile.tittle}</h2>
    <img src="${mobile.img}" height="200px" alt="">
    <mark>${mobile.cost}</mark>
    <p>${mobile.about}</p>
</div>
   `
  
    
})
container.innerHTML=phones.join('')
// console.log(phones);

products
.filter(mobile =>(mobile.cost )< 50000)
.map(mobile=> mobile.tittle)
.forEach(tittle=> console.log(tittle))

// console.log(products[0].mobile);
// console.log(products[1].mobile);
// console.log(products[2].mobile);




