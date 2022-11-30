// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js"
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

const auth = getAuth(app); //este objeto es para el servicio Autenticar (lo hice con correo y contraseña)

export function newUser(email, password) {
    createUserWithEmailAndPassword(auth, email, password)//crear el usuario
        .then((userCredential) => {
            //cuando ya esté creado el usuario, va a pasar ésto
            // Signed in 
            const user = userCredential.user;
            console.log(user);
            // ...
        })
        .catch((error) => {
            //si no se puede crear el usuario, sucede ésto
            const errorMessage = error.message;
            alert(errorMessage)
        });
}