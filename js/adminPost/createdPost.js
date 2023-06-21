const newPost = document.querySelector("#newPost");
const adminOcult = document.querySelector("#Administracion");
const user = JSON.parse(localStorage.getItem("sessions") || []);

const Administradores = JSON.parse(localStorage.getItem("database") || []);
var verificando = false;

for (let i = 0; i < Administradores.length; i++) {
    // Check if the username and role match the provided values
    if (Administradores[i].username === user.username && (Administradores[i].rol === "Administrador" || Administradores[i].rol === "root")) {
        verificando = true;
    }
}
if(verificando == true){
    newPost.classList.remove("d-none"); // If username and role are admin
    adminOcult.classList.remove("d-none");
}

if(verificando == false){
    newPost.classList.add("d-none");
    adminOcult.classList.add("d-none");
}