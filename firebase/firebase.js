// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {//este contenido debe ser secreto
  apiKey: "AIzaSyBa-3_qvGNdK48SYLW-PwiniluZn5HUpMQ",
  authDomain: "login-nafnaf.firebaseapp.com",
  projectId: "login-nafnaf",
  storageBucket: "login-nafnaf.appspot.com",
  messagingSenderId: "492768266746",
  appId: "1:492768266746:web:a7c7c22bad420acf7b7c43"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

console.log("hola!");