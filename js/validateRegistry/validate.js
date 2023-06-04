import saveItems from "../dataManagement/dataManagement.js";

const registryButton = document.querySelector("[Signup-button]");

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
};

//Verificar nombre de usuario:
const checkIfUsernameIsCorrect = (username) => {
    const invalidUsername = document.querySelector("[data-invalid-username]");

    // Si no se ha proveído nombre de usuario alguno:
    if(!username){
        invalidUsername.innerHTML = "El nombre de usuario es obligatorio";
        invalidUsername.classList.remove("invalid-feedback");
        registryButton.disabled = true;
        return;
    }

    if(usernameHasNumbersAtBeginning(username)){
        invalidUsername.innerHTML = "El nombre de usuario no debe contener números al inicio";
        invalidUsername.classList.remove("invalid-feedback");
        registryButton.disabled = true;
        return;
    }

    // Verificar longitud del nombre de usuario:
    if(checkUsernameLong(username)){
        invalidUsername.innerHTML = "El nombre de usuario es demasiado corto";
        invalidUsername.classList.remove("invalid-feedback");
        registryButton.disabled = true;
        return;
    }

    // Si el nombre de usuario contiene espacios:
    if(doesUsernameHasSpaces(username)){
        invalidUsername.innerHTML = "El nombre de usuario no debe contener espacios";
        invalidUsername.classList.remove("invalid-feedback");
        registryButton.disabled = true;
        return;
    }

    // Si el nombre de usuario contiene caracteres:
    if(usernameHasCharacters(username)){
        invalidUsername.innerHTML = "El nombre de usuario no debe contener caracteres especiales";
        invalidUsername.classList.remove("invalid-feedback");
        registryButton.disabled = true;
        return;
    }

    // Resetear en caso de no haber errores:
    registryButton.disabled = false;
    invalidUsername.innerHTML = "";
    invalidUsername.classList.add("invalid-feedback");
    return true;
};

const checkIfEmailIsCorrect = (email) => {
    const invalidEmail = document.querySelector("[data-invalid-email]");

    // Si no se ha proveído nombre de usuario alguno:
    if(!email){
        invalidEmail.innerHTML = "El correo es obligatorio";
        invalidEmail.classList.remove("invalid-feedback");
        registryButton.disabled = true;
        return;
    }

    if(emailHasNumbersAtBeginning(email)){
        invalidEmail.innerHTML = "El correo no debe tener números al inicio";
        invalidEmail.classList.remove("invalid-feedback");
        registryButton.disabled = true;
        return;
    }

    if(emailHasUnderscoreBeginning(email)){
        invalidEmail.innerHTML = "El correo no debe tener guiones bajos al inicio";
        invalidEmail.classList.remove("invalid-feedback");
        registryButton.disabled = true;
        return;
    }

    if(emailHasChars(email)){
        invalidEmail.innerHTML = "El correo no debe contener caracteres especiales";
        invalidEmail.classList.remove("invalid-feedback");
        registryButton.disabled = true;
        return;
    }

    if(!emailEndsWithCom(email)){
        invalidEmail.innerHTML = "El correo debe terminar en '.com'";
        invalidEmail.classList.remove("invalid-feedback");
        registryButton.disabled = true;
        return;
    }

    if(emailHasUppercaseLetters(email)){
        invalidEmail.innerHTML = "El correo no debe contener mayúsculas";
        invalidEmail.classList.remove("invalid-feedback");
        registryButton.disabled = true;
        return;
    }

    if(emailHasSpaces(email)){
        invalidEmail.innerHTML = "El correo no debe contener espacios";
        invalidEmail.classList.remove("invalid-feedback");
        registryButton.disabled = true;
        return;
    }

    if(!emailHasNoAtSymbol(email)){
        invalidEmail.innerHTML = "El correo tiene un error con '@'";
        invalidEmail.classList.remove("invalid-feedback");
        registryButton.disabled = true;
        return;
    }

    // Resetear en caso de no haber errores:
    registryButton.disabled = false;
    invalidEmail.innerHTML = "";
    invalidEmail.classList.add("invalid-feedback");
    return true;
};

const checkIfPasswordIsCorrect = (password, retypedPassword) => {
    const invalidPassword = document.querySelector("[data-invalid-password]");
    const invalidRetypedPassword = document.querySelector("[data-invalid-retyped-password]");

    // Si no hay clave alguna:
    if(!password || !retypedPassword){
        if(!password){
            invalidPassword.innerHTML = "La contraseña es obligatoria";
            invalidPassword.classList.remove("invalid-feedback");
        }
        else{
            invalidRetypedPassword.innerHTML = "La contraseña es obligatoria";
            invalidRetypedPassword.classList.remove("invalid-feedback");
        }
        registryButton.disabled = true;
        return;
    }

    // Mostrar mensaje si la clave es demasiado corta:
    if(checkPasswordLong(password)){
        invalidPassword.innerHTML = "La contraseña es demasiado corta";
        invalidPassword.classList.remove("invalid-feedback");
        registryButton.disabled = true;
        return;
    }

    // Mensaje si la clave contiene espacios:
    if(doesPasswordHasSpaces(password)){
        invalidPassword.innerHTML = "La contraseña no debe contener espacios";
        invalidPassword.classList.remove("invalid-feedback");
        registryButton.disabled = true;
        return;
    }

    // Mostrar mensaje si la clave no contiene caracteres especiales:
    if(doesPasswordHasChars(password)){
        invalidPassword.innerHTML = "La contraseña debe contener al menos un caracter especial";
        invalidPassword.classList.remove("invalid-feedback");
        registryButton.disabled = true;
        return;
    }

    if(!doesPasswordsAreEquals(password, retypedPassword)){
        invalidRetypedPassword.innerHTML = "Las contraseña no son iguales";
        invalidRetypedPassword.classList.remove("invalid-feedback");
        registryButton.disabled = true;
        return;
    }

    // Si todas las condiciones se cumplen, eliminar el mensaje de error:
    invalidPassword.innerHTML = "";
    invalidRetypedPassword.innerHTML = "";
    invalidPassword.classList.remove("invalid-feedback");
    invalidRetypedPassword.classList.remove("invalid-feedback");
    return true;
}

//--------------------------- Validar nombres de usuario -------------------------------------
// Comprobar que los números del nombre de usuario estén al final del nombre:
const usernameHasNumbersAtBeginning = (username) => {
    const regex = /^[0-9]/;
    return regex.test(username);
};

// Verificar longitud del nombre:
const checkUsernameLong = (username) => {
    return username.length < 5;
};

// Verificar que no contenga espacios:
const doesUsernameHasSpaces = (username) => {
    return username.includes(" ");
};

// Verificar que no contenga caracteres especiales:
const usernameHasCharacters = (username) => {
    const availableChars = "~`!@#$%^&*()+={[}]|\\:;\"'<,>.?-";
    const dash = /-/;
    const regex = new RegExp(`[${availableChars}]`);

    return regex.test(username) || dash.test(username);
};

// ------------------------------------ Validar correo ------------------------------------------

//Verificar si tiene números al inicio:
const emailHasNumbersAtBeginning = (email) => {
    const regex = /^[0-9]/;
    return regex.test(email);
};

//Verificar si tiene números al inicio:
const emailHasUnderscoreBeginning = (email) => {
    const regex = /^_/;
    return regex.test(email);
};

//Verificar si posee caracteres especiales
const emailHasChars = (email) => {
    const availableChars = "~`!#$%^&*()+={[}]|\\:;\"'<,>?-";

    //He estado tendiendo errores al analizar el caso del guión medio, so:
    const dash = /-/;
    const regex = new RegExp(`[${availableChars}]`);

    return regex.test(email) || dash.test(email);
};

//Verificar si termina en ".com"
const emailEndsWithCom = (email) => {
    const regex = /\.com$/i;
    return regex.test(email);
};

// Verificar si el correo contiene mayúsculas
const emailHasUppercaseLetters = (email) => {
    const regex = /^[A-Z]\w*@.*\.com$/;
    return regex.test(email);
};

// Verificar si el correo contiene espacios
const emailHasSpaces = (email) => {
    const regex = /\s/;
    return regex.test(email);
};

// Verificar si contiene la arroba "@"
const emailHasNoAtSymbol = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
};

//-----------------------------------Validamos las claves --------------------------
// Función para verificar longitud de clave:
const checkPasswordLong = (password) => {
    return password.length < 8;
};

// Función para verificar si la clave contiene espacios:
const doesPasswordHasSpaces = (password) => {
    return password.includes(" ");
};

// Función para verificar si la clave contiene caracteres especiales:
const doesPasswordHasChars = (password) => {
    const availableChars = "~`!@#$%^&*()_+={[}]|\\:;\"'<,>.?-";
    const regex = new RegExp(`[${availableChars}]`);

    return regex.test(password);
};

const doesPasswordsAreEquals = (password, retypedPassword) => {
    return password === retypedPassword;
}

export default validateRegistry;
