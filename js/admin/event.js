// Importar la función readData del archivo read.js en la carpeta actions
import { readData } from "./actions/read.js";

// Obtener los botones de editar usuario, silenciar usuario, eliminar usuario y cancelar del documento HTML
const btnEditUser = document.querySelector("[edit-info-button]");
const btnMuteUser = document.querySelector("[mute-user-button]");
const btnDeleteUser = document.querySelector("[delete-user-button]");
const btnCancell = document.querySelector("[cancell-button]");

// Ejecutar el código cuando el contenido del documento se haya cargado
document.addEventListener("DOMContentLoaded", function() {
    // Llamar a la función readData para leer los datos
    readData();

    // Deshabilitar los botones de editar usuario, silenciar usuario y eliminar usuario
    btnEditUser.disabled = btnMuteUser.disabled = btnDeleteUser.disabled = true;
});

document.addEventListener("DOMContentLoaded", function() {
    // Obtener todos los checkboxes del documento HTML
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');

    // Función para contar la cantidad de checkboxes seleccionados
    function countCheckedCheckboxes() {
        let count = 0;

        checkboxes.forEach(function(checkbox) {
            if (checkbox.checked) {
                count++;
            }
        });

        return count;
    }

    // Agregar event listeners a los checkboxes para habilitar o deshabilitar los botones según la cantidad seleccionada
    checkboxes.forEach(function(checkbox) {
        checkbox.addEventListener('change', function() {
            const checkedCount = countCheckedCheckboxes();

            if (checkedCount === 0) {
                btnEditUser.disabled = true;
                btnMuteUser.disabled = true;
                btnDeleteUser.disabled = true;
            } else {
                btnEditUser.disabled = btnMuteUser.disabled = btnDeleteUser.disabled = false;
            }
        });
    });
});

// Agregar un event listener al botón de cancelar para recargar la página
btnCancell.addEventListener("click", function() {
    window.location.reload();
});
