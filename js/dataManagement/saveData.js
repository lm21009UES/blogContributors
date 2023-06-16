import {checkIfUserAlreadyExists} from "./chekIfAreRepeated.js";
import {checkIfEmailAlreadyExists} from "./chekIfAreRepeated.js";

// Obtener datos previamente guardados:
const dataList = JSON.parse(localStorage.getItem("database")) || [];
let rootUserAlreadyCreated = false;

const saveRootUser = () => {
    const rootData = {
        username: "root",
        email: "administrator@gmail.com",
        password: "3k#&H%%p",
        rol: "Administrador"
    }

    // Crear el usuario root una única vez
    if (!rootUserAlreadyCreated) {
        dataList.push(rootData);
        rootUserAlreadyCreated = true;
    }
};

export const saveItems = (username, email, password) => {

    saveRootUser();

    // Crea un objeto con el nombre de usuario, correo electrónico y contraseña
    const data = {
        username: username,
        email: email,
        password: password,
        rol: "Usuario"
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

export const updateItems = (username, email, password, i, rol) => {

    dataList[i].username = username;
    dataList[i].email = email;
    dataList[i].password = password;
    dataList[i].rol = rol;

    // Guarda la cadena JSON en el almacenamiento local con la clave "database"
    localStorage.setItem("database", JSON.stringify(dataList));

    // Muestra un mensaje de completado
    alert("Actualización de datos completada");
};
