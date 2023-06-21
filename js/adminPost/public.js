let isAdmin = false;

moment.locale("es");

const readItems = () => {
  //Craación de las publicaciones
  const contenedor = document.querySelector("#Creando");
  const itemList = JSON.parse(localStorage.getItem("post")) || [];

  itemList.forEach((item) => {
    contenedor.appendChild(crearItem(item));
    ocultarBotones();
    cargarComentarios(item.id);
  });

  //enviando id de foto a modificar
  const elementos = document.querySelectorAll(".edit");
  // Agregar una función a cada elemento
  elementos.forEach(function (elemento) {
    elemento.addEventListener("click", function () {
      // Hacer algo cuando se haga clic en el elemento
      localStorage.setItem("editar", elemento.id);
    });
  });

  //eliminando elementos
  const elementosDelete = document.querySelectorAll('.delete');
  // Agregar una función a cada elemento
  elementosDelete.forEach(function(elemento) {
  elemento.addEventListener('click', function() {
      // Hacer algo cuando se haga clic en el elemento
      const itemList = JSON.parse(localStorage.getItem("post")) || [];
      for(var i = itemList.length-1; i>=0;i--){
          if(elemento.id.includes(itemList[i].id)){
              itemList.splice(i,1);
          }
      }
      localStorage.removeItem("post");
      localStorage.setItem('post', JSON.stringify(itemList));
      window.alert('Post eliminado');
      window.location.reload();
  });
  });
  //enviando a pagina para editar
  const elementoEditar = document.querySelectorAll('.edit');
  elementoEditar.forEach(function(element) {
      element.addEventListener('click',function(){
          window.location.href='EditPost.html';
      })
  });

  document.querySelector("[search-post-button]").addEventListener("click", function () {
    const searchedWord = document.querySelector("#Buscador");
    const documentTitles = document.querySelectorAll(".fw-bold");
    let foundElement = null;

    documentTitles.forEach(function (title) {
      if (searchedWord.value !== "") {
        if (title.textContent.toLowerCase().includes(searchedWord.value.toLowerCase())) {
          foundElement = title;
          foundElement.classList.add("filtro2");
          foundElement.scrollIntoView();
        }
      }
    });
  });
};
const crearItem = ({ id, img, title, description, fecha, creador }) => {
  //user header -- start --
  const divCard = document.createElement("div");
  divCard.setAttribute("class", "card bg-ligth mb-3");
  divCard.setAttribute("id", "poster");
  divCard.setAttribute("data-post", id);
  const divCardBody = document.createElement("div");
  divCardBody.setAttribute("class", "card-body");
  const divT = document.createElement("div");
  divT.setAttribute("class", "d-flex flex-start align-items-center mb-2");
  const imagen = document.createElement("img");
  imagen.setAttribute("class", "rounded-circle shoadow-1-strong me-3");
  imagen.style.height = 40;
  imagen.src = "./images/user.avif";
  imagen.style.width = "40px";
  const divT2 = document.createElement("div");
  const h6 = document.createElement("h6");
  h6.setAttribute("class", "fw-bold mb-1 purple");
  h6.textContent = creador;
  const p = document.createElement("p");
  p.setAttribute("class", "text-muted small mb-0");
  p.textContent = "CINEBOX " + fecha;
  divT2.appendChild(h6);
  divT2.appendChild(p);
  divT.appendChild(imagen);
  divT.appendChild(divT2);

  //publish post
  //imagen
  const img2 = document.createElement("img");
  img2.setAttribute("class", "IMGPost");
  img2.src = img;
  img2.alt = "cine";

  //titulo
  const divT3 = document.createElement("div");
  divT3.setAttribute("class", "card-title text-center purple pt-2");
  const h5 = document.createElement("h5");
  h5.setAttribute("class", "fw-bold");
  h5.textContent = title;
  divT3.appendChild(h5);
  //descripcion
  const p2 = document.createElement("p");
  p2.setAttribute("class", "mt-2");
  p2.textContent = description;

  //botones
  const divT4 = document.createElement("div");
  divT4.setAttribute("class", "small d-flex justify-content-start");
  const a = document.createElement("a");
  a.href = "#!";
  a.setAttribute("class", "nav-link purple d-flex align-items-center me-3");
  const i = document.createElement("i");
  i.setAttribute("class", "far fa-thumbs-up me-1");
  const pi = document.createElement("p");
  pi.setAttribute("class", "mb-0");
  pi.textContent = "Me gusta";
  a.appendChild(i);
  a.appendChild(pi);

  const a2 = document.createElement("a");
  a2.href = "#!";
  a2.setAttribute("class", "nav-link purple d-flex align-items-center me-3");
  const i2 = document.createElement("i");
  i2.setAttribute("class", "far fa-comment-dots me-1");
  const pi2 = document.createElement("p");
  pi2.setAttribute("class", "mb-0");
  pi2.textContent = "Comentar";
  a2.appendChild(i2);
  a2.appendChild(pi2);

  const a3 = document.createElement("a");
  a3.href = "#!";
  a3.setAttribute("class", "nav-link purple d-flex align-items-center me-3");
  const i3 = document.createElement("i");
  i3.setAttribute("class", "fas fa-share me-1");
  const pi3 = document.createElement("p");
  pi3.setAttribute("class", "mb-0");
  pi3.textContent = "Compartir";
  a3.appendChild(i3);
  a3.appendChild(pi3);

  //---------------------------------------------------------
  const editPostButton = document.createElement("button");
  editPostButton.setAttribute("class", "edit");
  editPostButton.setAttribute("id", id);
  editPostButton.textContent = "Editar";
  //EStilo del button
  editPostButton.style.border = "2px solid #0079FF";
  editPostButton.style.borderRadius = "4px";
  editPostButton.style.height = "35px";
  editPostButton.style.width = "68px";
  editPostButton.style.color = "#0079FF";

  const deletePostButton = document.createElement("button");
  deletePostButton.setAttribute("class", "delete");
  deletePostButton.setAttribute("id", id);
  deletePostButton.textContent = "Eliminar";
  //EStilo del button
  deletePostButton.style.border = "2px solid #CD1818";
  deletePostButton.style.borderRadius = "4px";
  deletePostButton.style.height = "35px";
  deletePostButton.style.width = "68px";
  deletePostButton.style.color = "#CD1818";
  deletePostButton.style.marginLeft = "4px";
  //-----------------------------------------------------------
  //a4.appendChild(pi4);

  divT4.appendChild(a);
  divT4.appendChild(a2);
  divT4.appendChild(a3);
  divT4.appendChild(editPostButton);
  divT4.appendChild(deletePostButton);

  const divT5 = document.createElement("div");
  divT5.setAttribute("class", "card-footer border-0");
  const divF = document.createElement("div");
  divF.setAttribute("class", "d-flex flex-start");
  const imgUser = document.createElement("img");
  imgUser.setAttribute("src", "./images/user.avif");
  imgUser.alt = "avatar";
  imgUser.style.width = "30px";
  imgUser.style.height = "30px";
  imgUser.setAttribute("class", "rounded-circle shadow-1-strong me-3");
  divF.appendChild(imgUser);
  const divForm = document.createElement("div");
  divForm.setAttribute("class", "form-outline w-100 h-25");
  const textArea = document.createElement("textarea");
  textArea.setAttribute("class", "form-control area-coment");
  //textArea.setAttribute("class", id.toString());
  textArea.setAttribute("id", "textAreaExample");
  textArea.setAttribute("rows", "1");
  textArea.setAttribute("style", "background: #fff");
  divForm.appendChild(textArea);
  divF.appendChild(divForm);

  const divButton = document.createElement("div");
  divButton.setAttribute("class", "float-end pt-2");
  const button1 = document.createElement("button");
  button1.setAttribute("class", "btn btn-sm btn-purple coment");
  button1.setAttribute("type", "button");
  button1.textContent = "Publicar comentario";
  button1.id = id;
  const button2 = document.createElement("button");
  button2.setAttribute("class", "btn btn-sm btn-outline-purple");
  button2.setAttribute("type", "button");
  button2.textContent = "Cancelar";
  divButton.appendChild(button1);
  divButton.appendChild(button2);

  divT5.appendChild(divF);
  divT5.appendChild(divButton);

  divCardBody.appendChild(divT);
  divCardBody.appendChild(img2);
  divCardBody.appendChild(divT3);
  divCardBody.appendChild(p2);
  divCardBody.appendChild(divT4);

  divCard.appendChild(divCardBody);
  divCard.appendChild(divT5);

  return divCard;
};
const ocultarBotones = () => {
  const dataList = JSON.parse(localStorage.getItem("database")) || [];
  const EnLinea = JSON.parse(localStorage.getItem("sessions") || []);
  const borrar = document.querySelectorAll(".delete");
  const editando = document.querySelectorAll(".edit");
  for (let i = 0; i < dataList.length; i++) {
    // Check if the username and role match the provided values
    if (
      dataList[i].username === EnLinea.username &&
      (dataList[i].rol === "Administrador" || dataList[i].rol === "root")
    ) {
      console.log("es admin");
      borrar.forEach((element) => {
        element.classList.remove("d-none");
      });
      editando.forEach((element) => {
        element.classList.remove("d-none");
      });
      isAdmin = true;
    } else if (
      dataList[i].username === EnLinea.username &&
      (dataList[i].rol !== "Administrador" || dataList[i].rol !== "root")
    ) {
      console.log("algo falla");
      borrar.forEach((element) => {
        element.setAttribute("class", "d-none");
      });
      editando.forEach((element) => {
        element.classList.add("class", "d-none");
      });
    }
  }
};

function cargarComentarios(idPost) {
  const datasC = JSON.parse(localStorage.getItem("coments")) || [];
  let contenedor = document.createElement("div");
  contenedor.classList.add("d-flex", "flex-column", "w-100", "listaPost");

  let comentariosPorPost = datasC.filter(
    (post) => post.post === idPost
  );
  contenedor.innerHTML = "";
  comentariosPorPost.forEach((comentario) => {
    contenedor.innerHTML += /* html */ `
      <div class="card d-flex flex-column mb-3 mx-3 px-3 py-2">
        <h6 class="d-flex justify-content-between flex-wrap">
          <span class="fw-bold">@${comentario.user}</span>
          <span class="text-muted small">${moment(
            comentario.create_date
          ).fromNow()}</span>
        </h6>
        <p class="text-muted">${comentario.coment}</p>
      </div>
    `;
  });
  let contenedorOrginal = document.querySelector(
    `.card[data-post='${idPost}'] .listaPost`
  );
  if (contenedorOrginal) {
    contenedorOrginal.replaceWith(contenedor);
    return;
  }
  document
    .querySelector(`.card[data-post='${idPost}']`)
    .appendChild(contenedor);
}

document.addEventListener("DOMContentLoaded", (e) => {
  readItems();
});

document.addEventListener("click", (e) => {
  if (e.target.matches(".coment")) {
    const usuario = (JSON.parse(localStorage.getItem("sessions")) || [])
      .username;

    const datasC = JSON.parse(localStorage.getItem("coments")) || [];
    let valor = e.target.parentElement.parentElement.querySelector("textarea");
    if (valor.value === "")
      return alert("No puedes enviar un comentario vacio");
    let estado = isAdmin ? "aceptado" : "pendiente";
    const crearEstructura = {
      post: e.target.id,
      user: usuario,
      coment: valor.value,
      status: estado,
      create_date: moment().format(),
    };
    datasC.push(crearEstructura);
    localStorage.setItem("coments", JSON.stringify(datasC));
    valor.value = "";
    if (estado !== "aceptado")
      return alert(
        "Comentario enviado, espere a que un administrador lo acepte"
      );
    cargarComentarios(e.target.id);
  }
});
