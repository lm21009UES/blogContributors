//Validaciones del login

const validateLogin = (e) =>{
    e.preventDefault();

    //Creando las constantes 
    const User = document.getElementById("UserName").value;
   const Password = document.getElementById('Password').value;

    //Logica de la validacion
//----------------------------------------------------------------------------
    const invalidUser = document.querySelector("[data-invalid-username]");
    if(!User){
        invalidUser.classList.remove("invalid-feedback");
    }
    else{
        invalidUser.classList.add("invalid-feedback");
    }

//----------------------------------------------------------------------------
    const invalidPassword = document.querySelector("[data-invalid-password]");
    if(!Password){
        invalidPassword .classList.remove("invalid-feedback");
    }
    else{
        invalidPassword .classList.add("invalid-feedback");
    }

}
//----------------------------------------------------------------------------

//Exportamos 
export default validateLogin;