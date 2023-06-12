const dataLocalStorage = JSON.parse(localStorage.getItem('database')) || [];

export const updateValues = (username, email, password, i) => {
    dataLocalStorage[i].username = username;
    dataLocalStorage[i].email = email;
    dataLocalStorage[i].password = password;

    // Guarda los datos actualizados en localStorage
    localStorage.setItem('database', JSON.stringify(dataLocalStorage));
};
