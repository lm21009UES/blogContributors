export const checkIfUserAlreadyExists = (username) => {
    const dataList = JSON.parse(localStorage.getItem("database")) || [];

    for (let i = 0; i < dataList.length; i++) {
        if (dataList[i].username === username) {
            return true;
        }
    }
    return false;
};

export const checkIfEmailAlreadyExists = (email) => {
    const dataList = JSON.parse(localStorage.getItem("database")) || [];

    for (let i = 0; i < dataList.length; i++) {
        if (dataList[i].email === email) {
            return true;
        }
    }
    return false;
};
