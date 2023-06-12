// Función para contar la cantidad de checkboxes seleccionados
export const countCheckedCheckboxes = (checkboxes) => {
    return [...checkboxes].filter(checkbox => checkbox.checked).length;
};

// Función para obtener los índices de los checkboxes seleccionados
export const checkIndexes = (checkboxes, checkedBoxIndexes) => {
    // checkedIndexes.length = 0; // Reiniciar el array de índices seleccionados
    checkboxes.forEach((checkbox, index) => {
        if (checkbox.checked) {
            if(!checkedBoxIndexes.includes(index)){
                checkedBoxIndexes.push(index);
            }
        }
    });
};