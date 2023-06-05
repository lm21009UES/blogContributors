import {getUsername, getPassword} from "../dataManagement/getData.js";

const invalidUser = document.querySelector("[data-invalid-username]");
const invalidPassword = document.querySelector("[data-password]");

//Validaciones del login
document.getElementById('Password').type = "password";

const validateLogin = (e) =>{
    e.preventDefault();

    //Obteniendo datos. Creando las constantes
    const username = document.getElementById("UserName").value;
    const password = document.getElementById('Password').value;

    //Call functions to validate username:
    validateData(username, password);
};

//----------------------------------------------------------------------------
//Validar datos:
const validateData = (user, password) => {
    if(!user){
        // Si no se proporciona un nombre de usuario, se elimina la clase de retroalimentación de error
        invalidUser.innerHTML = "El nombre de usuario es obligatorio."
        invalidUser.classList.remove("invalid-feedback");
        return;
    }

    if(!password){
        // Si no se proporciona una clave, se elimina la clase de retroalimentación de error
        invalidPassword.innerHTML = "La contraseña es obligatoria.";
        invalidPassword.classList.remove("invalid-feedback");
        return;
    }

    if(user !== getUsername()){
        // Si no existe ese usuario:
        alert(getUsername());
        invalidUser.innerHTML = "Usuario no encontrado";
        invalidUser.classList.remove("invalid-feedback");
        return;
    }

    if(user === getUsername() && password !== getPassword()){
        // Si no existe ese usuario:
        alert(getPassword());
        invalidPassword.innerHTML = "Contraseña incorrecta";
        invalidPassword.classList.remove("invalid-feedback");
        return;
    }

    alert("Inicio de sesión correcto. Bienvenido " + getUsername());
    invalidUser.innerHTML = "";
    invalidPassword.innerHTML = "";
    invalidUser.classList.remove("invalid-feedback")
};

//Exportamos 
export default validateLogin;
