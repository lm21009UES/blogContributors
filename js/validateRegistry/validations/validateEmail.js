const registryButton = document.querySelector("[Signup-button]");

export const checkIfEmailIsCorrect = (email) => {
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

    if(registryButton !== null){
        // Resetear en caso de no haber errores:
        registryButton.disabled = false;
        invalidEmail.innerHTML = "";
        invalidEmail.classList.add("invalid-feedback");
    }
    return true;
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
