//Validaciones del login

const validateLogin = (e) =>{
    e.preventDefault();

    //Obteniendo datos. Creando las constantes
    const username = document.getElementById("UserName").value;
    const password = document.getElementById('Password').value;

    //Call function to validate username:
    validateUsername(username);

    if(!password){
        validatePassword(password);
    }
    else{
        validatePassword(password);
        getPasswordLong(password);
    }
}

//----------------------------------------------------------------------------
//Validar usuario:
const validateUsername = (user) => {
    const invalidUser = document.querySelector("[data-invalid-username]");

    if(!user){
        invalidUser.classList.remove("invalid-feedback");
    }
    else{
        invalidUser.classList.add("invalid-feedback");
    }
}


//Validar clave ingresada:
const validatePassword = (password) => {
    const invalidPassword = document.querySelector("[data-invalid-password]");

    if(!password){
        invalidPassword.classList.remove("invalid-feedback");
    }
    else{
        invalidPassword.classList.add("invalid-feedback");
    }
}

const getPasswordLong = (password) => {
    const shortPassword = document.querySelector("[data-short-password]");

    if(password.length < 8){
        shortPassword.classList.remove("invalid-feedback");
    }
    else{
        shortPassword.classList.add("invalid-feedback");
    }
}

//Exportamos 
export default validateLogin;
