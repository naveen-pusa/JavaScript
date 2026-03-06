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
 

let container =  document.getElementById('container')
mobilep.forEach(product=>{
    container.innerHTML += `
      <div id="card">
         <h1>${product.title}</h1>
         <img src="${product.img}" alt="">
         <p>${product.desc}</p>
     </div>  
      
    `
})


