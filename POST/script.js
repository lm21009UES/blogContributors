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
window.onload = function() {
    var photoData = localStorage.getItem('photo');
    if (photoData) {
      var photoPreview = document.getElementById('photoPreview');
      photoPreview.src = photoData;
    }
}  