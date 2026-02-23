// DomManipulations

// createElement 
// settAttribute / getAttribute ('id','card')
// append / appendChild
// prepend
// insertBefore(newList ,li2)
// replaceChild

// innerHtml textContent innerText

// classList,className

// let cont =  document.getElementById("container")
// console.log(cont);

// createElement

// function repeat() {
//     let card = document.createElement('div');
// card.setAttribute('id','card')
// cont.append(card)

// console.log(card);

// }

let mobiles = document.getElementById('mobiles')

let list1 = document.getElementById('list1') 
let list2 = document.getElementById('list2') 
let list3 = document.getElementById('list3') 
let list4 = document.getElementById('list4') 
let list5 = document.getElementById('list5')

let list6 = document.createElement('li')
list6.setAttribute('id','list6')
list6.style.color = 'red'
list6.innerText = 'Apple'

let list7 = document.createElement('li')
list7.setAttribute('id','list7')
list7.innerText = 'microsoft'
list7.style.color='maroon'


mobiles.insertBefore(list6,list4)

mobiles.replaceChild(list7,list3)






