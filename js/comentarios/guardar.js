//Retorno de la estructura donde se guardarán los valores
function llenarDatos(id, usuario, coments, estados){
    return {
        idPost:id,
        datos:{
            username:usuario,
            comentarios:coments,
            estado:estados
        }
    }
}


//Explicación, sirve para obtener donde está el div con el id del post que se va a guardar; es decir,
//obtiene el nombre del post, en este caso el id que se guardará como título del post en LocalStorage
//El parámetro que pide es el textArea en donde se escriben los comentarios y desde ese punto hacia arriba
//empezará a buscar el div con el nombre del post
function obtenerUltimoDiv(elemento) {
    var padre = elemento.parentElement;

    while (padre && padre.nodeName.toLowerCase() === 'div') {
        if (padre.classList.contains('card')) {
            break;
        }
        padre = padre.parentElement;
    }

    if (padre && padre.nodeName.toLowerCase() === 'div') {
        return padre.id;
        // Aquí puedes usar el ID del último div padre con la clase "card" para lo que necesites
    }
}

var elemento = document.getElementById('textAreaExample');

document.getElementById("boton").addEventListener("click", ev => {

    let nombre = obtenerUltimoDiv(elemento);
    let usuario = "proximamente";
    let comentarios = elemento.value;
    let estado = false

    const documento = JSON.parse(localStorage.getItem("datos")) || [];

    for (let i = 0; i < documento.length; i++) {

    }

    const listaComentarios = documento.datos.comentarios.add(comentarios);
    const listaEstados = documento.datos.estado.add(estado);


    documento.push(llenarDatos(nombre, usuario, listaComentarios, listaEstados));

    localStorage.setItem("datos", JSON.stringify(documento))

})