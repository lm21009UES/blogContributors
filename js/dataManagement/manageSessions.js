const dataSessions = JSON.parse(localStorage.getItem("sessions")) || [];

export const userHasLoggedIn = (username) => {
    const userLogged = {
        username: username
    };
    dataSessions.push(userLogged);
    localStorage.setItem("sessions", JSON.stringify(dataSessions));
};

export const getUserWhoHasLoggedIn = () => {
    return "Sexo";
};

export const userHasLoggedOut = (username) => {
    for (let i = 0; i < dataSessions.length; i++) {
        if(dataSessions[i].username === username){
            dataSessions.splice(username, 1);
        }
    }
    localStorage.setItem("sessions", JSON.stringify(dataSessions));
};
