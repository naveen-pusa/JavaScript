// Template Literals in JavaScript:
//Template literals are a modern way to create strings in JavaScript.
// we use the backticks (``) instead of quotes.


// strings
 let student=[
     {clg:'ecet', branch:'ece', section:'a', courses:'iot'},
     {clg:'ecet', branch:'cse', section:'b', courses:'ai'},
     {clg:'ecet', branch:'eee', section:'c', courses:'bee'},
     {clg:'ecet', branch:'mech', section:'a', courses:'na'},

 ]
 console.log(student[0].clg);
 console.log(student[1].branch);
 console.log(student[2].section);
 console.log(student[3].courses);
 console.log(student[0]); 


 // Template Literals in JavaScript:
 //    (``) 
 // by using the (``) instead of string concatenation
 // eg: in object
   
  let iteams = {
    tiffen: 'dosa',
    food: 'non-veg',
    curry: 'non-vegcurry',
    icecream:'vennala'
  }
  console.log(`In the morning i have eat tiffen like ${iteams.tiffen} in the aftertoon i have orderd  food like ${iteams.food} and ${iteams.curry} and after that i eat ${iteams.icecream} icecream.`);
  

  

 // by using the array of the obeject
 // eg: array of object

 let product=[
    { flipkart: 'phones' },
    { amazon: 'laptop' },
    { myntra:'dress' },
    { ajio: 'shoes'}
 ]
console.log(`my name is naveen i have orderd ${product[0].flipkart} from flipkart ${product[1]. amazon} from amazon ${ product[2].myntra} from myntra and ${ product[3].ajio} from ajio` );
console.log(product);



//Template Literals with Expressions:

let a=5
let b=10
console.log(`sum of ${a+b}`);






 