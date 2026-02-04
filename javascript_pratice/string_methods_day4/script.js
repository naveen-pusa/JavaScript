// JavaScript String Methods


// length

var jp = 'javascript trainer'
console.log(jp.length);  // it will tell lenght of the text.

//toUpperCase()

var haresh = 'javascript trainer'
console.log(haresh.toUpperCase()); // it change all text into capital letters.

//toLowerCase()

var hareshSir = 'javascript trainer'
console.log(hareshSir.toLowerCase());  // it change all text into small letters.

//trim()

var product = '     I have order a samll product        '
console.log(product.trim()); // it Remove the unwanted space in the text.


//slice()

 var naveen ='     He is learning frontend course   ' 
 console.log(naveen.slice());     // it will takes the how much space we have given to the text. In the output.

 //slice(-5,-1)  ,  substring()

var naveen ='He is learning frontend course' 
 console.log(naveen.slice(-5,-1));  //  it will supports the negative value aslo if we want text from the last.
 
 //substring()
  
 var babi= 'He is learing python fullsatck course'
 console.log(babi.substring(0,10)); // it will take the  (0,10) starting in the text what we have given.

  
 //replace()

 var namee= 'naveen btech btech id number is'   
 console.log(namee.replace('btech','453 is good boy'));   // at the first value it will replace by the given value.

 // replaceAll()
 var babiFrd = 'he is my frd frd in coching institue'
 console.log(babiFrd.replaceAll('frd', 'brother')); // at all the places it will be replace when the give value is same.

 //includes()
 
 var jpSir = 'he assined me one project'
console.log(jpSir.includes('assined'));   // true, false
console.log(jpSir.includes(' no project'));

//indexOf()
var hareshSir = 'he tech python'      
console.log(hareshSir.indexOf('tech'));   // it will tell the which place of the text is there that will representedt with valu like number. 
console.log(hareshSir.indexOf('venkat')); // if the passed value  is not there in the   founded in the text it will come -1 as the output.


//split()
 
var naveen = 'javascript,python,sql'
console.log(naveen.split(''));  // it will slipt the each and every word into the strings.
console.log(naveen.split());   // all the text in the array form.

//startsWith()
var course='javascript'
console.log(course.startsWith('java'));  // true   if the text start with java then it will come true.
console.log(course.startsWith('script')); // false if not come false.
// endsWith()
var btech = 'eluru college of engineering and techonlogy'
console.log(btech.endsWith('eluru')); // false if the text not end with that it will come false.
console.log(btech.endsWith('y'));    // true if it ends with given give value then it is true..

// concat
var clg = 'hyb'
var loc = 'vizag'
console.log(loc.concat(' ', clg)); // we use to add different values by using the concat






  
 
 


 
 
