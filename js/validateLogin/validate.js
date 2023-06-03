const invalidPassword = document.querySelector("[data-password]");

//Validaciones del login
document.getElementById('Password').type = "password";

const validateLogin = (e) =>{
    e.preventDefault();

    //Obteniendo datos. Creando las constantes
    const username = document.getElementById("UserName").value;
    const password = document.getElementById('Password').value;

    //Call functions to validate username:
    validateUsername(username);
    validatePassword(password);
};

//----------------------------------------------------------------------------
//Validar usuario:
const validateUsername = (user) => {
    const invalidUser = document.querySelector("[data-invalid-username]");

    if(!user){
        // Si no se proporciona un nombre de usuario, se elimina la clase de retroalimentación de error
        invalidUser.classList.remove("invalid-feedback");
    }
    else{
        // Si se proporciona un nombre de usuario, se agrega la clase de retroalimentación de error
        invalidUser.classList.add("invalid-feedback");
    }
};


//Validar clave ingresada:
const validatePassword = (password) => {

    // Si no hay clave alguna:
    if(!password){
        invalidPassword.innerHTML = "La contraseña es obligatoria";
        invalidPassword.classList.remove("invalid-feedback");
        return;
    }

    // Mostrar mensaje si la clave es demasiado corta:
    if(checkPasswordLong(password)){
        invalidPassword.innerHTML = "La contraseña es demasiado corta";
        invalidPassword.classList.remove("invalid-feedback");
        return;
    }

    // Mensaje si la clave contiene espacios:
    if(doesPasswordHasSpaces(password)){
        invalidPassword.innerHTML = "La contraseña no debe contener espacios";
        invalidPassword.classList.remove("invalid-feedback");
        return;
    }

    // Mostrar mensaje si la clave no contiene caracteres especiales:
    if(!doesPasswordHasChars(password)){
        invalidPassword.innerHTML = "La contraseña debe contener al menos un caracter especial";
        invalidPassword.classList.remove("invalid-feedback");
        return;
    }

    // Si todas las condiciones se cumplen, eliminar el mensaje de error:
    invalidPassword.innerHTML = "";
    invalidPassword.classList.remove("invalid-feedback");
};

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

//Exportamos 
export default validateLogin;
