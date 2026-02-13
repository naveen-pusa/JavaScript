//FUNCTIONS TASKS :
 
 // it divided by 5 and 2
// let c=prompt('enter the number')
// if (c%3==0){
//         alert(' it is divided by 3 ')
// }else{
//     alert(' is not divided by 3')
// }

// divided by two numbers:

// let num=prompt('enter the number')

//     if(num%2==0 )
//         if(num%5==0){
//         alert('it is  divided by 2 and 5')
//     }else{
//         alert('it is divided by 2')
//     }if(num%5==0){
//         alert('it is divided by 5')
//     }else{
//         alert('it is not divided by both 5 and 2')
//     }
        
//stars:
var row =5;
for (var i=0; i<=row; i++){
    let space=('');
    let star =(' *');
    for(j=0; j<=row-1; j++){
     space+=('')   
    }
    for (s=0; s<=2*i-1; s++){
    star+=('*')
    }
    
    console.log(space+star);
    
}
 
