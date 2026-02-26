// Documnet Object Model 



// console.log(document);

// DOM Selectors 

// document.getElementsBytagName()
// document.getElementsByClassName()
// document.getElementsById()
// document.querySelector()
// document.QuerySelectorAll()


// let teacher = document.getElementsByTagName('li')

// teacher[2].style.background='red'

// console.log(teacher);

let teacher = document.getElementsByClassName('teacher')
teacher[1].style.color='red'
// console.log(teacher);

let child = document.getElementById('teacher')
child.style.background='green'

// child.addEventListener('click',()=>{
//     child.innerHTML = 'this changed with the id'
// })
// console.log(child);

// querySelector

// let query = document.querySelector('li')
// console.log(query);


// let queryAll = document.querySelectorAll('li')

// console.log(queryAll);

// NodeList

// which is a collection of elements and tags and content and also text

// parentNode
// childeNode
// nextsibiling
// firstSibiling
// lastibiling


// let frutis = document.getElementById('fruits')

// console.log(frutis.parentNode);
// console.log(frutis.childNodes);


// console.log(frutis.nextSibling); 

// console.log(frutis.firstChild);
// console.log(frutis.lastChild);


// HtmlCOllections
// which is a collection of elements and tags and content

// parentElement
// Children
// nextElementSibiling
// firstElementSibiling
// lastElementsibiling


// let fruits = document.getElementById('fruits')
// console.log(fruits.parentElement.parentElement.parentElement);

// console.log(fruits.children);
// console.log(fruits.nextElementSibling);
// console.log(fruits.firstElementChild);
// console.log(fruits.lastElementChild);











