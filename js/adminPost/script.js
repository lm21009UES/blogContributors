//-------------------------------------------------------------
//Para cuando se eleije un archivo

//Creamos una const donde llamamos a formatear
const files = document.querySelectorAll('.formatear');
//establecemos esta const en false  para ver si se ha caragdo la imagen 
let imagenCargada = false;

//Creamos un array para iterar 1 por 1 cada input de tipo file
Array.from(files).forEach(

  //hacemos una funcion
  f => {
    f.addEventListener('change', e => {

      //span con el mensaje de ningun archivo seleccionado
      const span = document.querySelector('.formatear__formatear-name > span' );

      //Verificamos si hay archivos subidos 
      if(f.files.length === 0){
        span.innerHTML = 'No se ha seleccionado ningún archivo'
      }
      else{
        //Validando si la imagen fue seleccionada
        const archivo = f.files[0];
        const tipoImagen = archivo.type.split('/')[0];

        if(tipoImagen !== 'image'){
          span.innerHTML = 'Por favor, seleccione un archivo de imagen válido.';
          imagenCargada =false;
        }else {
          span.innerHTML = f.files[0].name;
          imagenCargada = true;
        }
      }
    });
  }
);
//-------------------------------------------------------------

function uploadPhoto() {
  let fileInput = document.getElementById('fileInput');
    let file = fileInput.files[0];

    if (file) {
      let reader = new FileReader();

      reader.onload = function(e) {
          let photoData = e.target.result;
          localStorage.setItem('photo', photoData);
          console.log('Foto subida exitosamente');

          // Mostrar la foto en el formulario
          let photoPreview = document.getElementById('photoPreview');
          photoPreview.src = photoData;
      }

    reader.readAsDataURL(file);
  } else {
    console.log('No se seleccionó ninguna foto');
  }
}

//-------------------------------------------------------------

// Cargar la foto desde el almacenamiento local cuando se carga la página
/*window.onload = function() {
  var photoData = localStorage.getItem('photo');
  if (photoData) {
    var photoPreview = document.getElementById('photoPreview');
    photoPreview.src = photoData;
  }
}*/

//-------------------------------------------------------------
const btn = document.querySelector("#public");
btn.addEventListener('click',function(){
  const titulo = document.querySelector('#title');
  const descripcion = document.querySelector('#post');

   //Verificando titulo, descripcion imagen del post no este vacio
   if (titulo.value.trim() === '' || descripcion.value.trim() === '' || !imagenCargada) {
    window.alert('Por favor,escriba y cargue una imagen antes de publicar.');
    return;
  }

  const itemList = JSON.parse(localStorage.getItem("post")) || [];
  const UserInLine = JSON.parse(localStorage.getItem("sessions")) || [];
  // crea un nuevo objeto `Date`
  let today = new Date();
 
  // obtener la fecha y la hora
  let now = today.toLocaleString();
  const lst = {
    id: uuid.v4(),
    img: photoPreview.src,
    title: titulo.value,
    description: descripcion.value,
    fecha: now,
    creador: UserInLine.username
  }
  itemList.unshift(lst);
  localStorage.removeItem("post");
  localStorage.removeItem("photo");
  localStorage.setItem('post', JSON.stringify(itemList));
  titulo.value = '';
  descripcion.value = '';
  let photo = document.querySelector("#photoPreview");
  photo.src = "";
  let fileInput = document.getElementById('select').textContent='Ningun archivo seleccionado';
  window.alert('Se ha creado el post');
  window.location.href = "site.html";
});
