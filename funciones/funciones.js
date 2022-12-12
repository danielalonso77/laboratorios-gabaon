import { guardarFormulario, traerMensajes } from "./firebase.js";

window.addEventListener("DOMContentLoaded", async () => {
  const mensajes = await traerMensajes();
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
});
