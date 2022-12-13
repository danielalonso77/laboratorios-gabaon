import { guardarFormulario, getContacto, editarContacto, eliminarContacto } from "./firebase.js";

const contacto = document.getElementById("mensajes-container");


window.addEventListener("DOMContentLoaded", async () => {
  const querySnapshot = await getContacto();

  editarContacto();
  eliminarContacto();

  let html = "";

  querySnapshot.forEach((doc) => {
    const contacto = doc.data();
    
    html += `
        <div class="card">
            <div class="card-body">
                <h5 class="card-title   
                ">${contacto.nombre} ${contacto.apellido}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${contacto.email}</h6>
                <h6 class="card-subtitle mb-2 text-muted">${contacto.phone}</h6>
                <h6 class="card-subtitle mb-2 text-muted">${contacto.asunto}</h6>
                <p class="card-text">${contacto.mensaje}</p>
                <div>
                    <button class="btn btn-danger" onclick="eliminarContacto()">Eliminar</button>
                    <button class="btn btn-warning" onclick="editarContacto()">Editar</button>
                </div>
            </div>
        </div>
        `;
  });

  contacto.innerHTML = html;

  
});

const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const nombre = contactForm["nombre"];
  const apellido = contactForm["apellido"];
  const email = contactForm["email"];
  const phone = contactForm["phone"];
  const asunto = contactForm["asunto"];
  const mensaje = contactForm["mensaje"];
  try {
    guardarFormulario(
      nombre.value,
      apellido.value,
      email.value,
      phone.value,
      asunto.value,
      mensaje.value
    );

    swal({
      title: "Mensaje enviado!",
      text: "Gracias por contactarnos, nos comunicaremos a la brevedad.",
      icon: "success",
      button: "Aceptar",
    });
    contactForm.reset();
  } catch (error) {
    console.log(error);
    swal({
      title: "Error!",
      text: "Hubo un error al enviar el mensaje, por favor intenta de nuevo.",
      icon: "error",
      button: "Aceptar",
    });
  }
});
