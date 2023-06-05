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
   
    //Verifiacmos que se a ingresado el user y el password
    if (!user || ! password){
        //Mostramos los mensajes correspondientes 
        if (!user) {
            invalidUser.innerHTML = "El nombre de usuario es obligatorio.";
            invalidUser.classList.remove("invalid-feedback");
          }
        
          if (!password) {
            invalidPassword.innerHTML = 'La contraseña es obligatoria.';
            invalidPassword.classList.remove("invalid-feedback");
          }
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
    /*invalidUser.innerHTML = "";
    invalidPassword.innerHTML = "";*/
    invalidUser.classList.remove("invalid-feedback")

    //Sirve para limpiar los input
    document.getElementById('UserName').value = '';
    document.getElementById('Password').value = '';
};

//Exportamos 
export default validateLogin;
