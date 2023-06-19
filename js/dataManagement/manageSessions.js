const dataSessions = JSON.parse(localStorage.getItem("sessions")) || [];

export const userHasLoggedIn = (username) => {
    const userLogged = {
        username: username
    };
    localStorage.removeItem('sessions');
    localStorage.setItem("sessions", JSON.stringify(userLogged));
};

export const getUserWhoHasLoggedIn = () => {
<<<<<<< HEAD
    const session = JSON.parse(localStorage.getItem('sessions')) || [];
    return session.username;
=======
    const sesion = JSON.parse(localStorage.getItem('sessions')) || [];
    return sesion.username;
>>>>>>> aca73551416c03073e696f167631a823583ae0b8
};

export const userHasLoggedOut = (username) => {
    for (let i = 0; i < dataSessions.length; i++) {
        if(dataSessions[i].username === username){
            dataSessions.splice(username, 1);
        }
    }
    localStorage.setItem("sessions", JSON.stringify(dataSessions));
};
