const itemList = JSON.parse(localStorage.getItem("post")) || [];
const photoEdit = localStorage.getItem('editar');
itemList.forEach(element => {
    
    if(element.id ===photoEdit){
        const texto = document.querySelector("#title");
        texto.value=element.title;
        const contenido = document.querySelector('#post');
        contenido.textContent = element.description;
        const vist = document.querySelector("#photoPreview");
        vist.src=element.img;
    }
});
const files = document.querySelectorAll('.formatear');

//---------------------------------------------------------------
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

        }else {
          span.innerHTML = f.files[0].name;
        }
      }
    });
  }
);

//-----------------------------------------------------------------------
function uploadPhoto() {
    var fileInput = document.getElementById('fileInput');
    var file = fileInput.files[0];
  
    if (file) {
        var reader = new FileReader();
  
        reader.onload = function(e) {
            var photoData = e.target.result;
            localStorage.setItem('photo', photoData);
  
            // Mostrar la foto en el formulario
            var photoPreview = document.getElementById('photoPreview');
            photoPreview.src = photoData;
        }
  
      reader.readAsDataURL(file);
    } else {
      console.log('No se seleccionó ninguna foto');
    }
}

//------------------------------------------------------------------
const btn = document.querySelector("#edit");
btn.addEventListener('click',function(){
  const titulo = document.querySelector('#title');
  const descripcion = document.querySelector('#post');

   //Verificando titulo, descripcion y imagen del post no este vacio
   if (titulo.value.trim() === '' || descripcion.value.trim() === '') {
    window.alert('Por favor,escriba y cargue una imagen antes de publicar.');
    return;
  }

  const itemList = JSON.parse(localStorage.getItem("post")) || [];
  const sesion = JSON.parse(localStorage.getItem('sessions') || []);
  // crea un nuevo objeto `Date`
  var today = new Date();
 
  // obtener la fecha y la hora
  var now = today.toLocaleString();
  const creator = JSON.parse(localStorage.getItem("sessions") || []);
  const lst = {
    id: photoEdit,
    img: photoPreview.src,
    title: titulo.value,
    description: descripcion.value,
    fecha: now,
    creador: creator.username,
  }
    for(var i = itemList.length-1; i>=0;i--){
        if(photoEdit.includes(itemList[i].id)){
            itemList.splice(i,1);
        }
    }
  itemList.unshift(lst);
  localStorage.removeItem('editar');
  localStorage.removeItem('post');
  localStorage.setItem('post', JSON.stringify(itemList))
  titulo.value = '';
  descripcion.value = '';
  var photo = document.querySelector("#photoPreview");
  photo.src = "";
  var fileInput = document.getElementById('select').textContent='Ningun archivo seleccionado';
  window.alert('Se ha creado el post');
  window.location.href='site.html';
});