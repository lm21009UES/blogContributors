import {saveItems, updateItems} from "../dataManagement/saveData.js";
import {checkIfUsernameIsCorrect} from "./validations/validateUsername.js";
import {checkIfEmailIsCorrect} from "./validations/validateEmail.js";
import {checkIfPasswordIsCorrect} from "./validations/validatePassword.js";
let i = 0;

const validateRegistry = (e) =>{
    e.preventDefault();

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
};

export const validateUpdate = (username, email, password, retypedPassword) =>{

    //Call function to validate username:
    checkIfUsernameIsCorrect(username);
    checkIfEmailIsCorrect(email);
    checkIfPasswordIsCorrect(password, retypedPassword);

    if(checkIfUsernameIsCorrect(username) && checkIfEmailIsCorrect(email) && checkIfPasswordIsCorrect(password, retypedPassword)){
        updateItems(username, email, password, i);

        // Clear the input fields
        document.querySelector("#editCustomUsername").value = "";
        document.querySelector("#editEmail").value = "";
        document.querySelector("#editPassword").value = "";
        document.querySelector("#editPasswordAgain").value = "";
    }
};

export const getUpdatedIndex = (index) => {
    i = index;
}

export default validateRegistry;
