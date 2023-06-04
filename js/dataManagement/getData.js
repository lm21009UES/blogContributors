export const getUsername = () => {
    const userData = localStorage.getItem("database");
    if (userData) {
        const data = JSON.parse(userData);
        return data.username;
    } else {
        throw new Error("No data found");
    }
};

export const getEmail = () => {
    const userData = localStorage.getItem("database");
    if (userData) {
        const data = JSON.parse(userData);
        return data.email;
    } else {
        throw new Error("No data found");
    }
};
