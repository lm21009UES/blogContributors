const dataList = JSON.parse(localStorage.getItem("database")) || [];

export const saveRootUser = () => {
    const rootData = {
        username: "root",
        email: "administrator@gmail.com",
        password: "3k#&H%%p",
        rol: "Administrador"
    }

    dataList.push(rootData);
};
