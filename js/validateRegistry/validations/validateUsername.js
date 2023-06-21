const registryButton = document.querySelector("[Signup-button]");

//Verificar nombre de usuario:
export const checkIfUsernameIsCorrect = (username) => {
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
        alert("El nombre de usuario es demasiado corto");
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

    if(registryButton !== null){
        // Resetear en caso de no haber errores:
        registryButton.disabled = false;
        invalidUsername.innerHTML = "";
        invalidUsername.classList.add("invalid-feedback");
    }
    return true;
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
    const availableChars = "~`!@#$%^&*()+={[}]|\\:;\"'<,>.?-";
    const dash = /-/;
    const regex = new RegExp(`[${availableChars}]`);

    return regex.test(username) || dash.test(username);
};
