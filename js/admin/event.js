// Importar la función readData del archivo read.js en la carpeta actions
import { readData } from "./actions/read.js";
// import {deleteItems, getItems} from "./actions/delete.js";

// Obtener los botones de editar usuario, silenciar usuario, eliminar usuario y cancelar del documento HTML
const btnEditUser = document.querySelector("[edit-info-button]");
const btnMuteUser = document.querySelector("[mute-user-button]");
const btnDeleteUser = document.querySelector("[delete-user-button]");
const btnCancell = document.querySelector("[cancell-button]");

const checkedBoxIndexes = []; // Array para almacenar los índices de los checkboxes seleccionados

let dataLocalStorage = JSON.parse(localStorage.getItem('database')) || [];

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

btnDeleteUser.addEventListener("click", function () {
    for (let i = 0; i <= checkedBoxIndexes.length -1; i++) {
        dataLocalStorage.splice(checkedBoxIndexes[i], 1);
    }
    localStorage.setItem('database', JSON.stringify(dataLocalStorage));
    readData();
    window.location.reload();
});

// Agregar un event listener al botón de cancelar para recargar la página
btnCancell.addEventListener("click", function() {
    window.location.reload();
});
