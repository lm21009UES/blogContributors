// Importar la función readData del archivo read.js en la carpeta actions
import {readData} from "./actions/read.js";
import {updateValues} from "./actions/update.js";
import {deleteItems} from "./actions/delete.js";
import {checkIndexes, countCheckedCheckboxes} from "./actions/manageChecks.js";

// Obtener los botones de editar usuario, silenciar usuario, eliminar usuario y cancelar del documento HTML
const btnEditUser = document.querySelector("[edit-info-button]");
const btnMuteUser = document.querySelector("[mute-user-button]");
const btnDeleteUser = document.querySelector("[delete-user-button]");
const btnCancell = document.querySelectorAll("[cancell-button]");

// Array para almacenar los índices de los checkboxes seleccionados
const checkedBoxIndexes = [];

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

    // Función para manejar el cambio de estado de los checkboxes
    const handleCheckboxChange = () => {
        // Función para contar la cantidad de checkboxes seleccionados
        const checkedCount = countCheckedCheckboxes(checkboxes);

        // Función para obtener los índices de los checkboxes seleccionados
        checkIndexes(checkboxes, checkedBoxIndexes);

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
    updateValues(checkedBoxIndexes);
    checkedBoxIndexes.splice(0, checkedBoxIndexes.length);
});

btnDeleteUser.addEventListener("click", function () {
    deleteItems(checkedBoxIndexes);

    // Volver a leer los datos y actualizar la visualización
    readData();
});


// Agregar un event listener al botón de cancelar para recargar la página
btnCancell.forEach(button => {
    button.addEventListener("click", function() {
        window.location.reload();
    });
});
