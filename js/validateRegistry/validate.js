
const validateLogin = (e) =>{
    e.preventDefault();

    //Obteniendo datos. Creando las constantes
    const username = document.querySelector("#validationCustomUsername").value;
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#validationPassword").value;
    const retypedPassword = document.querySelector("#validationPassword").value;

    //Call function to validate username:
    validateUsername(username);

    if(!password){
        validatePassword(password);
    }
    else{
        validatePassword(password);
        passwordIsTooShort(password);
        doesPasswordHasSpaces(password);
        doesPasswordHasChars(password);
    }
}

const validateUsername = (user) => {
    const invalidUser = document.querySelector("[data-invalid-username]");

    if(!user){
        invalidUser.classList.remove("invalid-feedback");
    }
    else{
        invalidUser.classList.add("invalid-feedback");
    }
}


