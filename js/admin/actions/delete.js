// Obtener los datos almacenados en localStorage
const dataLocalStorage = JSON.parse(localStorage.getItem('database'));

export const deleteItems = (checkedBoxIndexes) => {
    // Recorrer los índices de los checkboxes seleccionados
    for (let i = 0; i <= checkedBoxIndexes.length -1; i++) {

        if(dataLocalStorage[checkedBoxIndexes].rol === "Administrador" || dataLocalStorage[checkedBoxIndexes].rol === "root"){
            alert("¡¡No podés eliminar un administrador!!");
        }
        else{
            // Eliminar el elemento correspondiente al índice en dataLocalStorage
            dataLocalStorage.splice(checkedBoxIndexes[i], 1);
        }
    }

    // Actualizar los datos en el almacenamiento local
    localStorage.setItem('database', JSON.stringify(dataLocalStorage));

    // Recargar la página
    window.location.reload();
};
