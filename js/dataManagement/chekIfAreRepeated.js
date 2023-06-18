// Obtener el elemento "database" del almacenamiento local o crear un arreglo vacío si no existe
const dataList = JSON.parse(localStorage.getItem("database")) || [];

// Verificar si el nombre de usuario ya existe en la base de datos
export const checkIfUserAlreadyExists = (username) => {
    for (let i = 0; i < dataList.length; i++) {
        // Comprobar si el nombre de usuario actual coincide con el proporcionado
        if (dataList[i].username === username) {
            // Si hay una coincidencia, devolver verdadero
            return true;
        }
    }
    // Si no se encuentra ninguna coincidencia, devolver falso
    return false;
};

// Verificar si el correo electrónico ya existe en la base de datos
export const checkIfEmailAlreadyExists = (email) => {
    for (let i = 0; i < dataList.length; i++) {
        // Comprobar si el correo electrónico actual coincide con el proporcionado
        if (dataList[i].email === email) {
            // Si hay una coincidencia, devolver verdadero
            return true;
        }
    }
    // Si no se encuentra ninguna coincidencia, devolver falso
    return false;
};
