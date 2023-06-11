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

// Asignar texto a los encabezados
thUsername.textContent = "Nombre de usuario";
thEmail.textContent = "Correo";

// Agregar los encabezados a la fila
tableRow.appendChild(thUsername);
tableRow.appendChild(thEmail);

// Agregar la fila a la tabla
myTable.appendChild(tableRow);


/**
 * La función readData lee los datos almacenados en localStorage y los muestra en una tabla.
 */
export const readData = () => {

    // Verificar si hay datos y agregarlos a la tabla
    if (dataList && dataList.length > 0) {
        for (let i = 0; i < dataList.length; i++) {

            // Crear una nueva fila para cada elemento de datos
            const tableRow = document.createElement("tr");

            const tdUsername = document.createElement("td");
            const tdEmail = document.createElement("td");

            // Asignar el contenido de los datos a las celdas correspondientes
            tdUsername.textContent = dataList[i].username;
            tdEmail.textContent = dataList[i].email;

            // Agregar las celdas a la fila
            tableRow.appendChild(tdUsername);
            tableRow.appendChild(tdEmail);

            // Agregar la fila a la tabla
            myTable.appendChild(tableRow);
        }
    }

    // Agregar la tabla al contenedor especificado en el HTML
    tableContainer.appendChild(myTable);
};
