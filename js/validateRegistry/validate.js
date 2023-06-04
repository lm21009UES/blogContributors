import {saveItems} from "../dataManagement/saveData.js";
import {checkIfUsernameIsCorrect} from "./validations/validateUsername.js";
import {checkIfEmailIsCorrect} from "./validations/validateEmail.js";
import {checkIfPasswordIsCorrect} from "./validations/validatePassword.js";

const validateRegistry = (e) =>{
    //Obteniendo datos. Creando las constantes
    const username = document.querySelector("#validationCustomUsername").value.trim();
    const email = document.querySelector("#email").value.trim()
    const password = document.querySelector("#validationPassword").value.trim();
    const retypedPassword = document.querySelector("#validationPasswordAgain").value.trim();

    //Call function to validate username:
    checkIfUsernameIsCorrect(username);
    checkIfEmailIsCorrect(email);
    checkIfPasswordIsCorrect(password, retypedPassword);

    if(checkIfUsernameIsCorrect(username) && checkIfEmailIsCorrect(email) && checkIfPasswordIsCorrect(password, retypedPassword)){
        saveItems(username, email, password);

        // Clear the input fields
        document.querySelector("#validationCustomUsername").value = "";
        document.querySelector("#email").value = "";
        document.querySelector("#validationPassword").value = "";
        document.querySelector("#validationPasswordAgain").value = "";
    }
    e.preventDefault();
};

export default validateRegistry;
