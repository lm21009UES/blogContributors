const registryButton = document.querySelector("[Signup-button]");

const validateRegistry = (e) =>{
    e.preventDefault();

    //Obteniendo datos. Creando las constantes
    const username = document.querySelector("#validationCustomUsername").value;
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#validationPassword").value;
    const retypedPassword = document.querySelector("#validationPassword").value;

    //Call function to validate username:
    checkIfUsernameIsCorrect(username);
    checkIfEmailIsCorrect(email);

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

    if(emailEndsWithCom(email)){
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

    if(emailHasNoAtSymbol(email)){
        invalidEmail.innerHTML = "El correo no contiene ninguna '@'";
        invalidEmail.classList.remove("invalid-feedback");
        registryButton.disabled = true;
        return;
    }

    // Resetear en caso de no haber errores:
    registryButton.disabled = false;
    invalidEmail.innerHTML = "";
    invalidEmail.classList.add("invalid-feedback");
};

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
    const availableChars = "-~`!@#$%^&*()_+={[}]|\\:;\"'<,>.?-";
    const regex = new RegExp(`[${availableChars}]`);

    return regex.test(username);
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
    const regex = new RegExp(`[${availableChars}]`);

    return regex.test(email);
};

//Verificar si termina en ".com"
const emailEndsWithCom = (email) => {
    const regex = /\*gmail.com$/i;
    return regex.test(email);
};

// Verificar si el correo contiene mayúsculas
const emailHasUppercaseLetters = (email) => {
    const regex = /[A-Z]/;
    return regex.test(email);
};

// Verificar si el correo contiene espacios
const emailHasSpaces = (email) => {
    const regex = /\s/;
    return regex.test(email);
};

// Verificar si contiene la arroba "@"
const emailHasNoAtSymbol = (email) => {
    const regex = /@/;
    return !regex.test(email);
};

export default validateRegistry;