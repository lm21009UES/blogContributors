let username = "";
let email = "";
let password = "";

const getUsername = (user_name) => {
    username = user_name;
};

const getEmail = (user_email) => {
    email = user_email;
};

const getPassword = (user_pass) => {
    password = user_pass;
};

const saveItems = (username, email, password) => {
    const data = {
        username: username,
        email: email,
        password: password
    };

    const userData = JSON.stringify(data);
    localStorage.setItem("database", userData);

    alert("Registro completado");
    getItems();
};

const getItems = () => {
    const userData = localStorage.getItem("database");
    if (userData) {
        const data = JSON.parse(userData);
        const username = data.username;
        const email = data.email;
        const password = data.password;

        console.log("Username:", username);
        console.log("Email:", email);
        console.log("Password:", password);
    } else {
        console.log("No data found");
    }
};

export default saveItems;

