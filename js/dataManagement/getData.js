// Obtener el elemento "database" del almacenamiento local o crear un arreglo vacío si no existe
const dataList = JSON.parse(localStorage.getItem("database")) || [];

// Verificar si el nombre de usuario existe en la base de datos
export const getUsername = (username) => {
    for (let i = 0; i < dataList.length; i++) {
        // Comprobar si el nombre de usuario actual coincide con el proporcionado
        if (dataList[i].username === username) {
            return true; // Si se encuentra el usuario, devolver verdadero
        }
    }
    return false; // Si no se encuentra el usuario, devolver falso
};

// Verificar si el correo electrónico existe en la base de datos
export const getEmail = (email) => {
    for (let i = 0; i < dataList.length; i++) {
        // Comprobar si el correo electrónico actual coincide con el proporcionado
        if (dataList[i].email === email) {
            return true; // Si se encuentra el correo electrónico, devolver verdadero
        }
    }
    return false; // Si no se encuentra el correo electrónico, devolver falso
};

// Verificar si la contraseña existe en la base de datos
export const getPassword = (password) => {
    for (let i = 0; i < dataList.length; i++) {
        // Comprobar si la contraseña actual coincide con la proporcionada
        if (dataList[i].password === password) {
            return true; // Si se encuentra la contraseña, devolver verdadero
        }
    }
    return false; // Si no se encuentra la contraseña, devolver falso
};

// Verificar si el nombre de usuario y la contraseña coinciden en la base de datos
export const isLoginOk = (username, password) => {
    for (let i = 0; i < dataList.length; i++) {
        // Comprobar si el nombre de usuario y la contraseña coinciden con los proporcionados
        if (dataList[i].username === username && dataList[i].password === password) {
            return true; // Si el nombre de usuario y la contraseña coinciden, devolver verdadero
        }
    }
    return false; // Si el nombre de usuario y la contraseña no coinciden, devolver falso
};

export const isAdmin = (username) => {
    for (let i = 0; i < dataList.length; i++) {
        // Check if the username and role match the provided values
        if (dataList[i].username === username && (dataList[i].rol === "Administrador" || dataList[i].rol === "root")) {
            return true; // If username and role are admin
        }
    }
    return false; // If username and role are not admin
};
