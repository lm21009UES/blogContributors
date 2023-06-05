import validateRegistry from "./validate.js";

const btnSignup = document.querySelector("[Signup-button]");

const inputUsername = document.querySelector("#validationCustomUsername");
const inputEmail = document.querySelector("#email");
const inputPassword = document.querySelector("#validationPassword");
const inputRetypedPassword = document.querySelector("#validationPasswordAgain");

const enableButton = () => {
    btnSignup.disabled = false;
}

btnSignup.addEventListener("click", validateRegistry);
inputUsername.addEventListener("keydown", enableButton);
inputEmail.addEventListener("keydown", enableButton);
inputPassword.addEventListener("keydown", enableButton);
inputRetypedPassword.addEventListener("keydown", enableButton);
