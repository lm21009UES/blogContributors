import {checkEmail} from "./recoverPassword.js";

const btnChangePassword = document.querySelector("[change-password]");
const emailAddress = document.querySelector("#email");
const password = document.querySelector("#validationPassword");
const retypedPassword = document.querySelector("#validationPasswordAgain");

const enableButton = () => {
    btnChangePassword.disabled = false;
};

btnChangePassword.addEventListener("click", checkEmail);
emailAddress.addEventListener("keydown", enableButton);
password.addEventListener("keydown", enableButton);
retypedPassword.addEventListener("keydown", enableButton);
