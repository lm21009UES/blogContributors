//Importaciones
import validateLogin from "./validate.js";

//Llamando al button
const btnIngresar = document.querySelector('[Ingresar]');
//Evento del button
btnIngresar.addEventListener('click', validateLogin);