//Const a emplear para el menu

const btn = document.querySelector('.btn');
const enlaces = document.querySelector('.Menu');
const btnBarras = document.querySelectorAll('.btn span');

btn.addEventListener('click', () =>{
    enlaces.classList.toggle('activado')

    //Para la animación del button
    btnBarras.forEach(child => {child.classList.toggle('animado')});
});
