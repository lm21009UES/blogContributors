//Importaciones
import validateLogin from "./validate.js";
import dataManagement from "../dataManagement/dataManagement.js";

//Llamando al button
const btnIngresar = document.querySelector('[Ingresar]');
//Evento del button
btnIngresar.addEventListener('click', validateLogin);
