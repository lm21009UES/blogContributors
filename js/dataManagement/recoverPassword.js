import { checkIfPasswordIsCorrect } from "../validateRegistry/validations/validatePassword.js";
import { checkIfEmailAlreadyExists } from "./chekIfAreRepeated.js";

const btnChangePassword = document.querySelector("[change-password]");
const invalidEmail = document.querySelector("[data-invalid-email]");
const invalidPassword = document.querySelector("[data-invalid-password]");
const invalidRetypedPassword = document.querySelector("[data-invalid-retyped-password]");

export const checkEmail = (e) => {
    e.preventDefault();

    const email = document.querySelector("#email").value;
    const password = document.querySelector("#validationPassword").value;
    const retypedPassword = document.querySelector("#validationPasswordAgain").value;

    if (!email || !password || !retypedPassword) {
        if(!email){
            invalidEmail.innerHTML = "El correo es obligatorio";
            invalidEmail.classList.remove("invalid-feedback");
        }

        if(!password){
            invalidPassword.innerHTML = "La contraseña es obligatoria";
            invalidPassword.classList.remove("invalid-feedback");
        }

        if(!retypedPassword){
            invalidRetypedPassword.innerHTML = "La contraseña es obligatoria";
            invalidRetypedPassword.classList.remove("invalid-feedback");
        }
        btnChangePassword.disabled = true;
        return;
    }

    if (!checkIfEmailAlreadyExists(email)) {
        invalidEmail.innerHTML = "El correo no existe.";
        invalidEmail.classList.remove("invalid-feedback");
        btnChangePassword.disabled = true;
        return;
    }

    changePassword(email, password, retypedPassword)
    document.querySelector("#email").value = "";
    document.querySelector("#validationPassword").value = "";
    document.querySelector("#validationPasswordAgain").value = "";
    invalidEmail.classList.remove("invalid-feedback");
    invalidPassword.classList.remove("invalid-feedback");
    invalidRetypedPassword.classList.remove("invalid-feedback");
};

export const changePassword = (email, newPassword, retypedPassword) => {
    const dataList = JSON.parse(localStorage.getItem("database")) || [];

    if (checkIfPasswordIsCorrect(newPassword, retypedPassword)) {
        for (let i = 0; i < dataList.length; i++) {
            if (dataList[i].email === email) {
                dataList[i].password = newPassword;
                // Actualizar los datos en el LocalStorage
                localStorage.setItem("database", JSON.stringify(dataList));
                alert("Tu contraseña ha sido actualizada correctamente");
                return; // Salir del bucle después de actualizar la contraseña
            }
        }
    }
};
