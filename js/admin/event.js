// Importar la función readData del archivo read.js en la carpeta actions
import { readData } from "./actions/read.js";
import {updateValues} from "./actions/update.js";
// import validateRegistry from "../validateRegistry/validate.js";
// import {deleteItems, getItems} from "./actions/delete.js";

// Obtener los botones de editar usuario, silenciar usuario, eliminar usuario y cancelar del documento HTML
const btnEditUser = document.querySelector("[edit-info-button]");
const btnMuteUser = document.querySelector("[mute-user-button]");
const btnDeleteUser = document.querySelector("[delete-user-button]");
const btnCancell = document.querySelector("[cancell-button]");

// Obtener los elementos de entrada de nombre de usuario, correo electrónico, contraseña y contraseña repetida del documento HTML
const inputUsername = document.querySelector("#editCustomUsername");
const inputEmail = document.querySelector("#editEmail");
const inputPassword = document.querySelector("#editPassword");
const inputRetypedPassword = document.querySelector("#editPasswordAgain");

const confirmButton = document.querySelector("[confirm-button]");

const checkedBoxIndexes = []; // Array para almacenar los índices de los checkboxes seleccionados

// Obtener los datos almacenados en localStorage
const dataLocalStorage = JSON.parse(localStorage.getItem('database'));

const disableButtons = () => {
    // Deshabilitar los botones de editar usuario, silenciar usuario y eliminar usuario
    btnEditUser.disabled = btnMuteUser.disabled = btnDeleteUser.disabled = true;
};

const enableButtons = () => {
    // Deshabilitar los botones de editar usuario, silenciar usuario y eliminar usuario
    btnEditUser.disabled = btnMuteUser.disabled = btnDeleteUser.disabled = false;
};

// Ejecutar el código cuando el contenido del documento se haya cargado
document.addEventListener("DOMContentLoaded", function() {
    // Llamar a la función readData para leer los datos
    readData();
    disableButtons();
});

document.addEventListener("DOMContentLoaded", function() {
    // Obtener todos los checkboxes del documento HTML
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');

    // Función para contar la cantidad de checkboxes seleccionados
    const countCheckedCheckboxes = () => {
        return [...checkboxes].filter(checkbox => checkbox.checked).length;
    };

    // Función para obtener los índices de los checkboxes seleccionados
    const checkIndexes = () => {
        // checkedIndexes.length = 0; // Reiniciar el array de índices seleccionados
        checkboxes.forEach((checkbox, index) => {
            if (checkbox.checked) {
                if(!checkedBoxIndexes.includes(index)){
                    checkedBoxIndexes.push(index);
                }
            }
        });
    };

    // Función para manejar el cambio de estado de los checkboxes
    const handleCheckboxChange = () => {
        const checkedCount = countCheckedCheckboxes();
        checkIndexes();

        if (checkedCount === 0) {
            disableButtons();
        } else {
            enableButtons();

        }
    };

    // Agregar event listeners a los checkboxes para manejar el cambio de estado
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', handleCheckboxChange);
    });
});

btnEditUser.addEventListener("click", function (){
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
                updateValues(inputUsername.value, inputEmail.value, inputPassword.value, selectedIndex);
            });
        }
    }
    checkedBoxIndexes.splice(0, checkedBoxIndexes.length);
});

btnDeleteUser.addEventListener("click", function () {
    // Recorrer los índices de los checkboxes seleccionados
    for (let i = 0; i <= checkedBoxIndexes.length -1; i++) {
        // Eliminar el elemento correspondiente al índice en dataLocalStorage
        dataLocalStorage.splice(checkedBoxIndexes[i], 1);
    }

    // Actualizar los datos en el almacenamiento local
    localStorage.setItem('database', JSON.stringify(dataLocalStorage));

    // Volver a leer los datos y actualizar la visualización
    readData();
    // checkedBoxIndexes.splice(0, checkedBoxIndexes.length);

    // Recargar la página
    window.location.reload();
});


// Agregar un event listener al botón de cancelar para recargar la página
btnCancell.addEventListener("click", function() {
    window.location.reload();
});
