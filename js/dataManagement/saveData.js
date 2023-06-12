import {checkIfUserAlreadyExists} from "./chekIfAreRepeated.js";
import {checkIfEmailAlreadyExists} from "./chekIfAreRepeated.js";

export const saveItems = (username, email, password) => {
    // Obtener datos previamente guardados:
    const dataList = JSON.parse(localStorage.getItem("database")) || [];

    // Crea un objeto con el nombre de usuario, correo electrónico y contraseña
    const data = {
        username: username,
        email: email,
        password: password
    };

    // Comprobar si el usuario ya existe
    if (checkIfUserAlreadyExists(username)) {
        alert("Este usuario ya existe");
        return;
    }

    // Comprobar si el correo ya existe
    if (checkIfEmailAlreadyExists(email)) {
        alert("Este correo ya existe");
        return;
    }

    // Almacenar
    dataList.push(data);

    // Guarda la cadena JSON en el almacenamiento local con la clave "database"
    localStorage.setItem("database", JSON.stringify(dataList));

    // Muestra un mensaje de completado
    alert("Registro completado");
};
