export const getItems = () => {
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
