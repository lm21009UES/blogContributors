import {checkIfUserAlreadyExists} from "./chekIfAreRepeated.js";
import {checkIfEmailAlreadyExists} from "./chekIfAreRepeated.js";
import {userHasLoggedIn} from "./manageSessions.js";

// Obtener datos previamente guardados:
const dataList = JSON.parse(localStorage.getItem("database")) || [];

export const saveItems = (username, email, password) => {

    if(dataList.length === 0){
        // El primer usuario registrado ha de ser el admin supremo
        const rootData = {
            username: username,
            email: email,
            password: password,
            rol: "root"
        }

        // Almacenar
        dataList.push(rootData);

        // Guarda la cadena JSON en el almacenamiento local con la clave "database"
        localStorage.setItem("database", JSON.stringify(dataList));

        window.location = "admin.html";
    }

    else{
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

        

        // Enviar a la página correspondiente
        window.location = "site.html";
    }
    // Quién ha iniciado la sesión?
    userHasLoggedIn(username);
};

export const updateData = (oldUsername, newUsername, email, password) => {
    const loginList = JSON.parse(localStorage.getItem("loginList")) || [];

    // Comprobar si el usuario ya existe
    if (checkIfUserAlreadyExists(newUsername) && checkIfEmailAlreadyExists(email)) {
        if (checkIfUserAlreadyExists(newUsername)){
            alert("Usuario ya registrado");
        }
        if (checkIfEmailAlreadyExists(email)){
            alert("Usuario ya registrado");
        }
        return;
    }

    for (let i = 0; i < dataList.length; i++) {
        if(dataList[i].username === oldUsername){
            dataList[i].username = newUsername;
            dataList[i].email = email;
            dataList[i].password = password;
        }
    }

    for (let i = 0; i < loginList.length; i++) {
        if(loginList[i].username === oldUsername){
            loginList[i].username = newUsername;
        }
    }

    // Guarda la cadena JSON en el almacenamiento local con la clave "database"
    localStorage.setItem("loginList", JSON.stringify(loginList));
    localStorage.setItem("database", JSON.stringify(dataList));

    // Muestra un mensaje de completado
    alert("Actualización de datos completada");

    // Redirige a la página de inicio de sesión
    //window.location.href = "../../html/Login.html";
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
