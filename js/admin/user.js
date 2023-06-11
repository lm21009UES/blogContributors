function listar(){
    console.log("Ingresando a la listar");
}

//Entra a localStorage
function abrirForm(idForm){
    localStorage.setItem('idForm', JSON.stringify(idForm));
    window,location.replace("UsersForms.html");

}
