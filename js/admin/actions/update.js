// Obtener datos de localStorage:
import {getUpdatedIndex, validateUpdate} from "../../validateRegistry/validate.js";

const dataLocalStorage = JSON.parse(localStorage.getItem('database')) || [];

// Obtener los elementos de entrada de nombre de usuario, correo electrónico, contraseña y contraseña repetida del documento HTML
const inputUsername = document.querySelector("#editCustomUsername");
const inputEmail = document.querySelector("#editEmail");
const inputPassword = document.querySelector("#editPassword");
const inputRetypedPassword = document.querySelector("#editPasswordAgain");
<<<<<<< HEAD
const userRol = document.querySelector("[data-user-rol]");
=======
>>>>>>> john

const confirmButton = document.querySelector("[confirm-button]");

export const updateValues = (checkedBoxIndexes) => {
    // Recorrer los índices de los checkboxes seleccionados
    for (let i = 0; i <= checkedBoxIndexes.length - 1; i++) {

        // Obtener el índice del elemento seleccionado
<<<<<<< HEAD
        const index = checkedBoxIndexes[i];

        // Obtener el elemento correspondiente a través del índice
        const data = dataLocalStorage[index];
=======
        const selectedIndex = checkedBoxIndexes[i];

        // Obtener el elemento correspondiente a través del índice
        const data = dataLocalStorage[selectedIndex];
>>>>>>> john

        if (data) {
            // Asignar los valores a los input correspondientes
            inputUsername.value = data.username;
            inputEmail.value = data.email;
            inputPassword.value = data.password;
            inputRetypedPassword.value = data.password;
<<<<<<< HEAD
            userRol.value = data.rol;

            if(data.rol === "root"){
                return;
            }

            confirmButton.addEventListener("click", function (){
                getUpdatedIndex(index);
                validateUpdate(
                    inputUsername.value,
                    inputEmail.value,
                    inputPassword.value,
                    inputRetypedPassword.value,
                    userRol.options[userRol.selectedIndex].text
=======
            getUpdatedIndex(selectedIndex);

            confirmButton.addEventListener("click", function (){
                validateUpdate(inputUsername.value,
                    inputEmail.value,
                    inputPassword.value,
                    inputRetypedPassword.value
>>>>>>> john
                );
            });
        }
    }
};
