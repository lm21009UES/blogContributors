//esto nos ayudara para evitar que el usuario entre sin antes pasar por el login 
const user = JSON.parse(localStorage.getItem('login_succes')) || false;

if(!user){
    //En caso de que lo intente lo mandamos de nuevo al login
    window.location.href = 'Login.html'
}