const dataList = JSON.parse(localStorage.getItem("database")) || [];

export const getUsername = () => {
    for (let i = 0; i < dataList.length; i++) {
        return dataList[i].username;
    }
    throw new Error("El usuario no existe");
};

export const getEmail = () => {
    for (let i = 0; i < dataList.length; i++) {
        return dataList[i].email;
    }
    throw new Error("El usuario no existe");
};

export const getPassword = () => {
    for (let i = 0; i < dataList.length; i++) {
        return dataList[i].password;
    }
    throw new Error("El usuario no existe");
};
