function logInForm() {
    let userName = document.getElementById('userName').value
    // let password = document.getElementById('password').value
    
    // userName
    // password
    // mobileNumber
    // pancard
    // adharCard
    // email 


    // let userNamePatt = /^[A-Z][a-z@+-]{5,15}$/

    // let mobileNumer = /^[6-9][0-9]{9}$/

    // let panCardPatt = /^[A-Z]{4}[0-9]{5}[A-Z]$/

    // let adharCard = /^[0-9]{4} [0-9]{4} [0-9]{4}$/

    // let email = /^[A-Za-z0-9+_]+@[A-Za-z0-9-_]+\.[A-Za-z]{2,}$/



    
        
    if (email.test(userName)) {
            alert(`welcome ${userName}`)
            return true
     }else{
        alert(`${userName} is in valid`)
          return false
     }


    
 






















    
    // if (userName.trim()=='' || password.trim()=="") {
    //         alert('Invalid Data')
    //         return false
    //  }else{
    //     alert('welcome user')
    //     return true
    //  }





// 
// ^ =>start
// $=> end
// [] =>  numbers , aplha, specialcharaters
// [A-Z]=> capital A - Z
// [a-z]=> small a-z
// [0-9]=> numbers 0-9
// min and max {}
// space , /s , 0-9 /d










}

