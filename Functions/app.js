// let custom = {
//     name:'jp',
//     favFood : 'prwan',
//     loc:'hyd kphb',

//     message : function(greet){
//         console.log(`Hii ${this.name} Good ${greet} here u r favItem in offer kindly grab it ${this.favFood} conform ur Loc ${this.loc}`);
//     }
// }

// let custom2 = {
//     name:'jp',
//     favFood : 'prwan',
//     loc:'hyd kphb',

//     message : function(greet){
//         console.log(`Hii ${this.name} Good ${greet} here u r favItem in offer kindly grab it ${this.favFood} conform ur Loc ${this.loc}`);
//     }
// }



// let custom3 = {
//     name:'jp',
//     favFood : 'prwan',
//     loc:'hyd kphb',

//     message : function(greet){
//         console.log(`Hii ${this.name} Good ${greet} here u r favItem in offer kindly grab it ${this.favFood} conform ur Loc ${this.loc}`);
//     }
// }


// let custom4 = {
//     name:'jp',
//     favFood : 'prwan',
//     loc:'hyd kphb',

//     message : function(greet){
//         console.log(`Hii ${this.name} Good ${greet} here u r favItem in offer kindly grab it ${this.favFood} conform ur Loc ${this.loc}`);
//     }
// }




// console.log(custom.message('morning'));

// lexical envirment


function outer() {

    let a = 5
   function inner() {
        console.log(a);
    }

    inner()
}
outer()


