// Obtener los datos almacenados en localStorage
const dataList = JSON.parse(localStorage.getItem("database")) || [];

// Contenedor de tabla:
const tableContainer = document.querySelector("[data-container]");

// Tabla
const myTable = document.createElement("table");
myTable.classList.add("table", "table-bordered");

// Filas
const tableRow = document.createElement("tr");

// Encabezados
const thUsername = document.createElement("th");
const thEmail = document.createElement("th");
const thUserRol = document.createElement("th");
const thEditButton = document.createElement("th");
const thMuteButton = document.createElement("th");
const thDeleteButton = document.createElement("th");

// Asignar texto a los encabezados
thUsername.textContent = "Nombre de usuario";
thEmail.textContent = "Correo";

// Agregar los encabezados a la fila
tableRow.appendChild(thUsername);
tableRow.appendChild(thEmail);
tableRow.appendChild(thUserRol);
tableRow.appendChild(thEditButton);
tableRow.appendChild(thMuteButton);
tableRow.appendChild(thDeleteButton);

// Agregar la fila a la tabla
myTable.appendChild(tableRow);

/**
 * La función readData lee los datos almacenados en localStorage y los muestra en una tabla.
 */
export const readData = () => {

    // Verificar si hay datos y agregarlos a la tabla
    if (dataList && dataList.length > 0) {
        for (let i = 0; i < dataList.length; i++) {

            // Agregar los botones interactivos de actualizar, borrar y silenciar al usuario.
            const updateButton = document.createElement("button");
            updateButton.classList.add("btn", "btn-info");
            updateButton.textContent = "Editar";

            const muteButton = document.createElement("button");
            muteButton.classList.add("btn", "btn-warning");
            muteButton.textContent = "Silenciar";

            const deleteButton = document.createElement("button");
            deleteButton.classList.add("btn", "btn-danger");
            deleteButton.textContent = "Eliminar";

            // Crear una nueva fila para cada elemento de datos
            const tableRow = document.createElement("tr");

            // Crear celdas
            const tdUsername = document.createElement("td");
            const tdEmail = document.createElement("td");
            const tdPromoteUser = document.createElement("td");
            const tdEditInfo = document.createElement("td");
            const tdMuteUser = document.createElement("td");
            const tdDeleteUser = document.createElement("td");

            // Asignar el contenido de los datos a las celdas correspondientes
            tdUsername.textContent = dataList[i].username;
            tdEmail.textContent = dataList[i].email;
            tdEditInfo.appendChild(updateButton);
            tdMuteUser.appendChild(muteButton);
            tdDeleteUser.appendChild(deleteButton);

            // Agregar las celdas a la fila
            tableRow.appendChild(tdUsername);
            tableRow.appendChild(tdEmail);
            tableRow.appendChild(tdEditInfo);
            tableRow.appendChild(tdMuteUser);
            tableRow.appendChild(tdDeleteUser);

            // Agregar la fila a la tabla
            myTable.appendChild(tableRow);
        }
    }

    // Agregar la tabla al contenedor especificado en el HTML
    tableContainer.appendChild(myTable);
};
