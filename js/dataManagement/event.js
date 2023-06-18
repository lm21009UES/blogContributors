// Importar la función checkEmail del archivo recoverPassword.js
import { checkEmail } from "./recoverPassword.js";

// Obtener el botón de cambio de contraseña del documento HTML
const btnChangePassword = document.querySelector("[change-password]");

// Obtener los elementos de entrada de correo electrónico, contraseña y contraseña repetida del documento HTML
const emailAddress = document.querySelector("#email");
const password = document.querySelector("#validationPassword");
const retypedPassword = document.querySelector("#validationPasswordAgain");

// Función para habilitar el botón de cambio de contraseña
const enableButton = () => {
    btnChangePassword.disabled = false;
};

// Agregar un event listener al botón de cambio de contraseña para verificar el correo electrónico
btnChangePassword.addEventListener("click", checkEmail);

// Agregar event listeners a los elementos de entrada para habilitar el botón de cambio de contraseña al escribir
emailAddress.addEventListener("keydown", enableButton);
password.addEventListener("keydown", enableButton);
retypedPassword.addEventListener("keydown", enableButton);