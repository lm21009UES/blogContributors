import {readData} from "./actions/read.js";
// import createNewUser from "./actions/create.js";

const btnAddUser = document.querySelector("[add-user-button]");
const btnEditUser = document.querySelector("[edit-info-button]");
const btnMuteUser = document.querySelector("[mute-user-button]");
const btnDeleteUser = document.querySelector("[delete-user-button]");
const btnCancell = document.querySelector("[cancell-button]");

document.addEventListener("DOMContentLoaded", function() {
    readData();
    btnEditUser.disabled = true;
    btnMuteUser.disabled = true;
    btnDeleteUser.disabled = true;
});

btnCancell.addEventListener("click", function (){
    window.location.reload();
});
