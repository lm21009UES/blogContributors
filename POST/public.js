const readItems = () => {
    const contenedor = document.querySelector("#Creando");
    const itemList = JSON.parse(localStorage.getItem("post")) || [];

    itemList.forEach(item => {
        contenedor.appendChild(crearItem(item));
    });
}
const crearItem = ({id, img, title, description,fecha}) => {
    const h1 = document.createElement("h1");
    h1.textContent = title;
    const imagen = document.createElement("img");
    imagen.src= img;
    const par = document.createElement("p");
    par.textContent = description;
    const fect = document.createElement("p");
    fect.textContent = fecha;
    const div = document.createElement('div');
    div.appendChild(fect);
    div.appendChild(imagen);
    div.appendChild(h1);
    div.appendChild(par);
    return div;
}
window.onload = function(){
    readItems();
}