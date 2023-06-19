const registryButton = document.querySelector("[Signup-button]");

export const checkIfPasswordIsCorrect = (password, retypedPassword) => {
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
    if(!doesPasswordHasChars(password)){
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

    if(registryButton !== null){
        // Resetear en caso de no haber errores:
        registryButton.disabled = false;
        // Si todas las condiciones se cumplen, eliminar el mensaje de error:
        invalidPassword.innerHTML = "";
        invalidRetypedPassword.innerHTML = "";
        invalidPassword.classList.remove("invalid-feedback");
        invalidRetypedPassword.classList.remove("invalid-feedback");
    }
    return true;
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
};
