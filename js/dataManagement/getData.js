const dataList = JSON.parse(localStorage.getItem("database")) || [];

export const getUsername = (username) => {
    for (let i = 0; i < dataList.length; i++) {
        if (dataList[i].username === username) {
            return true; // Usuario encontrado
        }
    }
    return false;
};

export const getEmail = (email) => {
    for (let i = 0; i < dataList.length; i++) {
        if (dataList[i].email === email) {
            return true; // Correo encontrado
        }
    }
    return false;
};

export const getPassword = (password) => {
    for (let i = 0; i < dataList.length; i++) {
        if (dataList[i].password === password) {
            return true; // Clave encontrada
        }
    }
    return false;
};

export const isLoginOk = (username, password) => {
    for (let i = 0; i < dataList.length; i++) {
        if (dataList[i].username === username && dataList[i].password === password) {
            return true; // Correo encontrado
        }
    }
    return false;
}
