const dataLocalStorage = JSON.parse(localStorage.getItem('database')) || [];

// Obtener los elementos de entrada de nombre de usuario, correo electrónico, contraseña y contraseña repetida del documento HTML
const inputUsername = document.querySelector("#editCustomUsername");
const inputEmail = document.querySelector("#editEmail");
const inputPassword = document.querySelector("#editPassword");
const inputRetypedPassword = document.querySelector("#editPasswordAgain");

const confirmButton = document.querySelector("[confirm-button]");

export const updateValues = (checkedBoxIndexes) => {
    // Recorrer los índices de los checkboxes seleccionados
    for (let i = 0; i <= checkedBoxIndexes.length - 1; i++) {

        // Obtener el índice del elemento seleccionado
        const selectedIndex = checkedBoxIndexes[i];

        // Obtener el elemento correspondiente a través del índice
        const data = dataLocalStorage[selectedIndex];

        if (data) {
            // Asignar los valores a los input correspondientes
            inputUsername.value = data.username;
            inputEmail.value = data.email;
            inputPassword.value = data.password;
            inputRetypedPassword.value = data.password;

            confirmButton.addEventListener("click", function (){
                update(inputUsername.value, inputEmail.value, inputPassword.value, selectedIndex, i);
            });
        }
    }
};

const update = (username, email, password, i) => {
    dataLocalStorage[i].username = username;
    dataLocalStorage[i].email = email;
    dataLocalStorage[i].password = password;

    // Guarda los datos actualizados en localStorage
    localStorage.setItem('database', JSON.stringify(dataLocalStorage));
};
