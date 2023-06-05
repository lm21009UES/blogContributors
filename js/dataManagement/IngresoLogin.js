const login = document.querySelector('[Ingresar]')

login.addEventListener('click' , (e) =>{
    e.preventDefault();

    //Constantes a usar 
    const userN = document.getElementById('UserName').value;
    const pas = document.getElementById('Password').value;
    const dataList = JSON.parse(localStorage.getItem("database")) || [];

    //Busacmos el usuario y la contraseña 
    const validUser = dataList.find(user => user.userN === userN && user.pas === pas)
    //verificamos
    if(!validUser){
        return alert('Usuario o contraseña incorrecto')
    }

    alert('Bienvenido ${validUser.userN}');

    //Para ver si hay un usuario dentro de la aplicacion
    localStorage.setItem('login_succes', JSON.stringify(validUser));//Esto nos ayudara en la clase index.js
    
    //Para redirigir seria asi ahorita de momento esta la pagina de inicio
   //  window.location.href = 'index.html';
})