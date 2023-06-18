// Importar la función checkIfPasswordIsCorrect del archivo validatePassword.js en la carpeta validateRegistry/validations
import { checkIfPasswordIsCorrect } from "../validateRegistry/validations/validatePassword.js";

// Importar la función checkIfEmailAlreadyExists del archivo chekIfAreRepeated.js en la misma carpeta
import { checkIfEmailAlreadyExists } from "./chekIfAreRepeated.js";

// Obtener el botón de cambio de contraseña del documento HTML
const btnChangePassword = document.querySelector("[change-password]");

// Obtener los elementos de advertencia para correo inválido, contraseña inválida y contraseña repetida inválida del documento HTML
const invalidEmail = document.querySelector("[data-invalid-email]");
const invalidPassword = document.querySelector("[data-invalid-password]");
const invalidRetypedPassword = document.querySelector("[data-invalid-retyped-password]");

// Función para verificar el correo electrónico
export const checkEmail = (e) => {
    e.preventDefault();

    // Obtener los valores del correo electrónico, contraseña y contraseña repetida del documento HTML
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#validationPassword").value;
    const retypedPassword = document.querySelector("#validationPasswordAgain").value;

    // Verificar si alguno de los campos está vacío
    if (!email || !password || !retypedPassword) {
        if (!email) {
            invalidEmail.innerHTML = "El correo es obligatorio";
            invalidEmail.classList.remove("invalid-feedback");
        }

        if (!password) {
            invalidPassword.innerHTML = "La contraseña es obligatoria";
            invalidPassword.classList.remove("invalid-feedback");
        }

        if (!retypedPassword) {
            invalidRetypedPassword.innerHTML = "La contraseña es obligatoria";
            invalidRetypedPassword.classList.remove("invalid-feedback");
        }
        btnChangePassword.disabled = true;
        return;
    }

    // Verificar si el correo electrónico ya existe en la base de datos
    if (!checkIfEmailAlreadyExists(email)) {
        invalidEmail.innerHTML = "El correo no existe.";
        invalidEmail.classList.remove("invalid-feedback");
        btnChangePassword.disabled = true;
        return;
    }

    // Llamar a la función changePassword para cambiar la contraseña
    changePassword(email, password, retypedPassword);

    // Limpiar los campos de correo electrónico, contraseña y contraseña repetida en el documento HTML
    document.querySelector("#email").value = "";
    document.querySelector("#validationPassword").value = "";
    document.querySelector("#validationPasswordAgain").value = "";

    // Remover las clases de advertencia de correo inválido, contraseña inválida y contraseña repetida inválida
    invalidEmail.classList.remove("invalid-feedback");
    invalidPassword.classList.remove("invalid-feedback");
    invalidRetypedPassword.classList.remove("invalid-feedback");
};

// Función para cambiar la contraseña
export const changePassword = (email, newPassword, retypedPassword) => {
    // Obtener el elemento "database" del almacenamiento local o crear un arreglo vacío si no existe
    const dataList = JSON.parse(localStorage.getItem("database")) || [];

    // Verificar si la contraseña es correcta y coinciden con la contraseña repetida
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
