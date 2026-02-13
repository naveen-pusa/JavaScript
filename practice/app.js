//Task by using the array methods:

var products = [
    {nam:'apple',       imgg: 'https://inventstore.in/wp-content/uploads/2024/07/63.webp', decp:'This phone is belongs to apple product', cost:'💰15000T'},
    {nam:'lenovo',      imgg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkNreW2EyhH2dX1yOdlGNlMRz5zF0vOFSneA&s', decp:'This phone is belongs to lenovo product', cost:'💰100000'},
    {nam:'vivo',        imgg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4ieBkQ73BX_6zMy8MPaSH2a2xvahklF_Enw&s', decp:'This phone is belongs to vivo product', cost:'💰25000'},
    {nam:'Samsung S23', imgg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmtbnAEK50-8JP1q8u4q1nPVJ41Y4LcOx-rQ&s', decp:'This phone is belongs to sumsung product', cost:'💰10000'},
    {nam:'Redmi Note',  imgg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC-byGdg1kSFQVVErOkUmUhRq9YxGip6o9Uw&s', decp:'This phone is belongs to red mi note product', cost:'💰15000'},
    {nam:'poco',        imgg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZfGloLW3ocO913DI7AJrByJnK1F4027_wnQ&s', decp:'This phone is belongs to poco product',        cost:'💰30000'}
]
//concat:
// let phones = [
//     {nam:'apple',       imgg: 'https://inventstore.in/wp-content/uploads/2024/07/63.webp', decp:'This phone is belongs to apple product', cost:'💰15000T'},
//    {nam:'lenovo',      imgg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkNreW2EyhH2dX1yOdlGNlMRz5zF0vOFSneA&s', decp:'This phone is belongs to lenovo product', cost:'💰100000'},
//    {nam:'vivo',        imgg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4ieBkQ73BX_6zMy8MPaSH2a2xvahklF_Enw&s', decp:'This phone is belongs to vivo product', cost:'💰25000'},
//    {nam:'Samsung S23', imgg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmtbnAEK50-8JP1q8u4q1nPVJ41Y4LcOx-rQ&s', decp:'This phone is belongs to sumsung product', cost:'💰10000'},
//    {nam:'Redmi Note',  imgg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC-byGdg1kSFQVVErOkUmUhRq9YxGip6o9Uw&s', decp:'This phone is belongs to red mi note product', cost:'💰15000'},
//    {nam:'poco',        imgg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZfGloLW3ocO913DI7AJrByJnK1F4027_wnQ&s', decp:'This phone is belongs to poco product',        cost:'💰30000'}
// ]
//   products = products.concat(phones)

// (push , unshift, pop, shift):
// products.push({nam:'apple',       imgg: 'https://s3.ap-south-1.amazonaws.com/buybesto/vivo-v15-pro.jpeg', decp:'This phone is belongs to apple product', cost:'💰15000T'})
// products.unshift({nam:'apple',    imgg: 'https://s3.ap-south-1.amazonaws.com/buybesto/vivo-v15-pro.jpeg', decp:'This phone is belongs to apple product', cost:'💰15000T'})
// products.pop({nam:'apple',        imgg: 'https://s3.ap-south-1.amazonaws.com/buybesto/vivo-v15-pro.jpeg', decp:'This phone is belongs to apple product', cost:'💰15000T'})
// products.shift({nam:'apple',       imgg: 'https://s3.ap-south-1.amazonaws.com/buybesto/vivo-v15-pro.jpeg', decp:'This phone is belongs to apple product', cost:'💰15000T'})

//reverse:
//products.reverse()
// splice
// products.splice(0,2)

//join:




for(let i=0; i<products.length; i++){
    console.log(products[i]);
     document.body.innerHTML += (`
     <div id='cards'>
        <h1>${products[i].nam}</h1>
        <img src=" ${products[i].imgg}" alt="">
        <p><b>${products[i].decp}</b</p>
        <p>${products[i].cost}</p>
     </div>
    `)
}

 
// let b=2
// let c=3  
// let d=4
// for( let i=2; i<=10; i++){
//     console.log(i+'*'+b+'='+i*b, "       " + i+'*'+c+'='+i*c,'       ' + i+'*'+d+'='+i*d  );
    

//     }

 // oddnumber:
// let a=1
// for (i=0; i<=50; i++){
//     console.log(++i);
    
// }
//even number
// let a=1
// for(i=0; i<=20; i++)
//     console.log(i++);


//weekdays
// let a = ['sunday','monday', 'tuesday', 'wednesday','thursday','friday','saturday']
//     for(i=0; i<a.length; i++)
//         console.log(a[i]); 
//     console.log(a[0]);
//     console.log(a[1]);

//large numbers

// print *
// for (let i = 1; i <= 5; i++) {
//   if (i <= 5) {
//     document.write("*");
//   }
// }
//print 36*
// for (let i=0; i<=5; i++){
//   for(j=0; j<=5; j++){
//     if(j<=5){
//       document.writeln('*')
//     }
//   }
//   document.writeln('<br>')
// }

 
//background color:

