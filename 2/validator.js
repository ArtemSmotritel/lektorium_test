function checkPassword() {
    let inputPassword = document.getElementById('password_id').value;
    let inputEmail = document.getElementById('email_id').value;
 	if (/^\w{6,20}$/.test(inputPassword) && /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(inputEmail)) {
 		return true 
 	} else if (/^\w{6,20}$/.test(inputPassword)) {
        alert("oopsie, you have entered an invalid email")
        return false 
    } else {
        alert("oopsie, you have entered an invalid password. ")
        return false 
    }  
 } 