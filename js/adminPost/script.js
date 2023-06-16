
//-------------------------------------------------------------
//Para cuando se eleije un archivo

//Creamos una const donde llamamos a formatear
const files = document.querySelectorAll('.formatear');

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
        span.innerHTML = f.files[0].name;
      }
    });
  }
);
//-------------------------------------------------------------

function uploadPhoto() {
  var fileInput = document.getElementById('fileInput');
  var file = fileInput.files[0];

  if (file) {
      var reader = new FileReader();

      reader.onload = function(e) {
          var photoData = e.target.result;
          localStorage.setItem('photo', photoData);
          console.log('Foto subida exitosamente');

          // Mostrar la foto en el formulario
          var photoPreview = document.getElementById('photoPreview');
          photoPreview.src = photoData;
      }

    reader.readAsDataURL(file);
  } else {
    console.log('No se seleccionó ninguna foto');
  }
}

// Cargar la foto desde el almacenamiento local cuando se carga la página
/*window.onload = function() {
  var photoData = localStorage.getItem('photo');
  if (photoData) {
    var photoPreview = document.getElementById('photoPreview');
    photoPreview.src = photoData;
  }
}*/
const btn = document.querySelector("#public");
btn.addEventListener('click',function(){
  const titulo = document.querySelector('#title');
  const descripcion = document.querySelector('#post');
  const itemList = JSON.parse(localStorage.getItem("post")) || [];
  // crea un nuevo objeto `Date`
  var today = new Date();
 
  // obtener la fecha y la hora
  var now = today.toLocaleString();
  const lst = {
    id: uuid.v4(),
    img: photoPreview.src,
    title: titulo.value,
    description: descripcion.value,
    fecha: now,
  }
  itemList.unshift(lst);
  localStorage.clear();
  localStorage.setItem('post', JSON.stringify(itemList))
  titulo.value = '';
  descripcion.value = '';
  var photo = document.querySelector("#photoPreview");
  photo.src = "";
  var fileInput = document.getElementById('select').textContent='Ningun archivo seleccionado';
  window.alert('Se ha creado el post');
});