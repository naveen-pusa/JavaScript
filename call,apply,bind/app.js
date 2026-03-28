let driver1 = {
    name:'jp',
    car:'ambasdor',
    loc:'hyd',

}


let driver2 = {
    name:'naveen',
    car:'benz',
    loc:'hyd'
}

let driver3 = {
    name:'jeevan',
    car:'BMW',
    loc:'hyd'
}

let driver4 = {
    name:'hari',
    car:'ferrari',
    loc:'hyd'
}



function blabla(greet,pass) {
        console.log(`hii very ${greet} ${pass} , your driving partner ${this.name} on way with car ${this.car} loc ${this.loc}`);
    }

// let pass1 = blabla.apply(driver4 , ['morning','naveen'])

// let pass2 = blabla.call(driver4 , 'morning','vamsi')

let pass1 = blabla.bind(driver2)
pass1('morning','naveen')
pass1('morning','jp')
pass1('morning','jeevan')