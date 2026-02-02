// data types
// two types of data types:
// 1. Primitive Data Types(Stores a single value) ,
//  2. Non-Primitive (Reference)multiple values

// Primitive Data Types(Stores a single value)



// number   *//Stores numbers (no separate int/float)

var btech = 2023
console.log(btech)
 var age = 25
 var dob = '27/08/2000'
 salary= 350000
 adharNumber = 123456789 
 console.log(age,salary,adharNumber,dob)

 

 // string       *//Stores text inside quotes

var namee = 'naveen'
console.log(namee)
clg = 'Ecet'
branch ='ECE'
loc='Eluru'
console.log( clg,branch,loc)

// Boolean     *//Stores true or false 

let myAge = 15
isAdult = (myAge >= 18)
console.log(isAdult)

let youAge =25
youngAge =30
console.log(youAge==youngAge)



//Undefined   *//Variable declared but no value assigned
let training 
console.log(training)



//Null   *//Represents empty value, assigned intentionally

let empty = null
console.log(empty)


//BigInt  *//  Stores very large numbers

let small = 12345678942242346154653323224926415754
console.log(small)                                 // it was storing the valu with saome e+

let larg = 12345678942242346154653323224926415754n
console.log(larg)                                  // by using the 'n' at last it was showing the output same



// Symbol    *//Stores unique values, mostly for advanced usage

let add = Symbol('sum')
sub = 'sum'
console.log(add,sub)


//Non-Primitive (Reference) Data Types

//object      *// Can store multiple values

let fullsatck ={
javascript :'jp sir',
html       : 'raghavendra sir',
sql        : 'haresh sir',
english    : 'madam'
}
console.log(fullsatck)
console.log(fullsatck.javascript)    //by using the .(dot) we can store the values in the contanier
console.log(fullsatck.html)
console.log(fullsatck.sql)
console.log(fullsatck.english)
console.log(' In achiver-it institute ' +fullsatck.javascript +' tells javascript. ' +  fullsatck.html + ' tells html topics.' + fullsatck.sql +
    ' tells sql. ' + fullsatck.english +' tells the communiaction class in the institue' )


// Array  *//list of values
  

let hotel =['dosa', 'idly', 'puri', 'upma','masala dosa']
console.log(hotel)
console.log(hotel[0])
console.log(hotel[1])     // we can call the values by using the [] we can assine the values
console.log(hotel[2])
console.log(hotel[3])
console.log(hotel[4])
console.log(hotel[5])    // no value stored in the [5] so it is undefined





