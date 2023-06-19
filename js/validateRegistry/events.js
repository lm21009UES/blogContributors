// Importar la función validateRegistry del archivo validate.js
import validateRegistry from "./validate.js";

// Obtener el botón de registro del documento HTML
const btnSignup = document.querySelector("[Signup-button]");

// Obtener los elementos de entrada de nombre de usuario, correo electrónico, contraseña y contraseña repetida del documento HTML
const inputUsername = document.querySelector("#validationCustomUsername");
const inputEmail = document.querySelector("#email");
const inputPassword = document.querySelector("#validationPassword");
const inputRetypedPassword = document.querySelector("#validationPasswordAgain");

// Función para habilitar el botón de registro
const enableButton = () => {
    btnSignup.disabled = false;
}

// Agregar un event listener al botón de registro para validar el registro
btnSignup.addEventListener("click", validateRegistry);

// Agregar event listeners a los elementos de entrada para habilitar el botón de registro al escribir
inputUsername.addEventListener("keydown", enableButton);
inputEmail.addEventListener("keydown", enableButton);
inputPassword.addEventListener("keydown", enableButton);
inputRetypedPassword.addEventListener("keydown", enableButton);
