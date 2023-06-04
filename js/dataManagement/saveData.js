export const saveItems = (username, email, password) => {
    // Crea un objeto con el nombre de usuario, correo electrónico y contraseña
    const data = {
        username: username,
        email: email,
        password: password
    };

    // Convierte el objeto data a una cadena JSON
    const userData = JSON.stringify(data);

    // Guarda la cadena JSON en el almacenamiento local con la clave "database"
    localStorage.setItem("database", userData);

    // Muestra un mensaje de completado
    alert("Registro completado");
};
