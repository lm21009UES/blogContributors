// Importar la función readData del archivo read.js en la carpeta actions
import {readData} from "./actions/read.js";
import {updateUserValues, updateValues} from "./actions/update.js";
import {deleteItems} from "./actions/delete.js";
import {checkIndexes, countCheckedCheckboxes} from "./actions/manageCheckBoxes.js";
import {getUserWhoHasLoggedIn} from "../dataManagement/manageSessions.js";
import {films, series} from "../dataManagement/favMedia.js";

// Obtener los botones de editar usuario, silenciar usuario, eliminar usuario y cancelar del documento HTML
const btnEditUser = document.querySelector("[edit-info-button]");
const btnMuteUser = document.querySelector("[mute-user-button]");
const btnDeleteUser = document.querySelector("[delete-user-button]");
const btnCancell = document.querySelectorAll("[cancell-button]");
const btnNewPost = document.querySelector("[btn-new-post]");
const btnEditInfo = document.querySelector("[btn-edit-info]");

const adminName = document.querySelector("[admin-name]");
const userName = document.querySelector("[user-name]");

const favFilm = document.querySelector("#favFilm");
const favSeries = document.querySelector("#favSerie");

// Array para almacenar los índices de los checkboxes seleccionados
const checkedBoxIndexes = [];

let oldUserName = "";

const disableButtons = () => {
    // Deshabilitar los botones de editar usuario, silenciar usuario y eliminar usuario
    if(btnEditUser !== null && btnMuteUser !== null && btnDeleteUser !== null) {
        btnEditUser.disabled = btnMuteUser.disabled = btnDeleteUser.disabled = true;
    }
};

const enableButtons = () => {
    // Deshabilitar los botones de editar usuario, silenciar usuario y eliminar usuario
    if(btnEditUser !== null && btnMuteUser !== null && btnDeleteUser !== null){
        btnEditUser.disabled = btnMuteUser.disabled = btnDeleteUser.disabled = false;
    }
};

// Ejecutar el código cuando el contenido del documento se haya cargado
document.addEventListener("DOMContentLoaded", function() {
    if(adminName !== null){
        adminName.textContent = getUserWhoHasLoggedIn();
    }

    if(userName !== null){
        userName.textContent = getUserWhoHasLoggedIn();
        oldUserName = userName.textContent;
    }

    if(favFilm !== null && favSeries !== null){
        const randomFilmsIndex = Math.floor(Math.random() * films.length);
        const randomSeriesIndex = Math.floor(Math.random() * series.length);

        favFilm.textContent = films[randomFilmsIndex];
        favSeries.textContent = series[randomSeriesIndex];
    }

    // Llamar a la función readData para leer los datos
    readData();
    disableButtons();

    // Obtener todos los checkboxes del documento HTML
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');

    // Función para manejar el cambio de estado de los checkboxes
    const handleCheckboxChange = () => {

        // Función para obtener los índices de los checkboxes seleccionados
        const checkedCount = countCheckedCheckboxes(checkboxes);
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

if(btnEditUser !== null){
    btnEditUser.addEventListener("click", function (){
        updateValues(checkedBoxIndexes);
        checkedBoxIndexes.splice(0, checkedBoxIndexes.length);
    });
}

if(btnDeleteUser !== null){
    btnDeleteUser.addEventListener("click", function () {
        deleteItems(checkedBoxIndexes);

        // Volver a leer los datos y actualizar la visualización
        window.location.reload();
    });
}

if(btnCancell !== null){
    // Agregar un event listener al botón de cancelar para recargar la página
    btnCancell.forEach(button => {
        button.addEventListener("click", function (){
            window.location.reload();
        });
    });
}

if(btnNewPost !== null){
    btnNewPost.addEventListener("click", function () {
        window.location.href = "CreaPost.html";
    });
}

if(btnEditInfo !== null){
    btnEditInfo.addEventListener("click", function (){
        updateUserValues(oldUserName);
    });
}
