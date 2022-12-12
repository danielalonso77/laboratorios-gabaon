/*if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./sw.js')
    .then(reg => console.log('Registro de SW exitoso', reg))
    .catch(err => console.warn('Error al tratar de registrar el sw', err))
}

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }*/
import { guardarFormulario } from "./firebase.js";

window.addEventListener("DOMContentLoaded", () => {
  console.log("DOM cargado");
});

const contactForm = document.getElementById("contact-form");
const formDiv = document.getElementById("formulario");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("Formulario enviado");

  const nombre = contactForm["nombre"];
  const apellido = contactForm["apellido"];
  const email = contactForm["email"];
  const phone = contactForm["phone"];
  const asunto = contactForm["asunto"];
  const mensaje = contactForm["mensaje"];

  guardarFormulario(
    nombre.value,
    apellido.value,
    email.value,
    phone.value,
    asunto.value,
    mensaje.value
  );

  $("#formulario").hide();
  swal({
    title: "Mensaje enviado!",
    text: "Gracias por contactarnos, nos comunicaremos a la brevedad.",
    icon: "success",
    button: "Aceptar",
  })
  contactForm.reset();
  $("#formulario").show();
});
