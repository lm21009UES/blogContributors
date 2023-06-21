import {isAdmin, isLoginOk} from "../dataManagement/getData.js";
import {userHasLoggedIn} from "../dataManagement/manageSessions.js";

const invalidUser = document.querySelector("[data-invalid-username]");
const invalidPassword = document.querySelector("[data-password]");

// Validaciones del login
document.getElementById('Password').type = "password";

const validateLogin = (e) => {
    e.preventDefault();

    // Obteniendo datos. Creando las constantes
    const username = document.getElementById("UserName").value;
    const password = document.getElementById('Password').value;

    // Call functions to validate username:
    validateData(username, password);
};

//----------------------------------------------------------------------------
// Validar datos:
const validateData = (user, password) => {
    if (!user || !password) {
        if (!user) {
            // Si no se proporciona un nombre de usuario, se muestra el mensaje de error
            invalidUser.innerHTML = "El nombre de usuario es obligatorio.";
            invalidUser.classList.remove("invalid-feedback");
        }

        if (!password) {
            // Si no se proporciona una clave, se muestra el mensaje de error
            invalidPassword.innerHTML = "La contraseña es obligatoria.";
            invalidPassword.classList.remove("invalid-feedback");
        }
        return;
    }

    if (!isLoginOk(user, password)) {
        // La contraseña no coincide
        invalidPassword.innerHTML = "Usuario o contraseña incorrectos";
        invalidPassword.classList.remove("invalid-feedback");
        return;
    }

    userHasLoggedIn(user);

    if (isAdmin(user)) {
        window.location = "admin.html";
    } else {
        window.location = "site.html";
    }
};

// Exportamos
export default validateLogin;
