// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";
import { getFirestore, collection, addDoc } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAO6eRIw1bqWyDVap5Qu7ao-oJ8xylKVzI",
  authDomain: "gabaon-crud.firebaseapp.com",
  projectId: "gabaon-crud",
  storageBucket: "gabaon-crud.appspot.com",
  messagingSenderId: "757528202748",
  appId: "1:757528202748:web:5b9bc809a92aa419b53679",
  measurementId: "G-W1S6N0H3HP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export const guardarFormulario = (nombre, apellido, email, phone, asunto, mensaje) => {
    console.log(nombre, apellido, email, phone, phone, asunto, mensaje);
    addDoc(collection(db, "contacto"), {
        nombre: nombre,
        apellido: apellido,
        email: email,
        phone: phone,
        asunto: asunto,
        mensaje: mensaje,
    });
  }