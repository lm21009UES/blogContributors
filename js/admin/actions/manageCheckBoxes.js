// Función para contar la cantidad de checkboxes seleccionados
export const countCheckedCheckboxes = (checkboxes) => {
    return [...checkboxes].filter(checkbox => checkbox.checked).length;
};

// Función para obtener los índices de los checkboxes seleccionados
export const checkIndexes = (checkboxes, checkedBoxIndexes) => {
    checkboxes.forEach((checkbox, index) => {
        if (checkbox.checked) {
            // Verificar si el índice ya existe en checkedBoxIndexes antes de agregarlo
            if (!checkedBoxIndexes.includes(index)) {
                checkedBoxIndexes.push(index);
            }
        } else {
            // Si el checkbox no está marcado, eliminar el índice si existe en checkedBoxIndexes
            const indexToRemove = checkedBoxIndexes.indexOf(index);
            if (indexToRemove !== -1) {
                checkedBoxIndexes.splice(indexToRemove, 1);
            }
        }
    });
};
