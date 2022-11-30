import { newUser } from '../firebase/firebase.js'

const buttonSignIn = document.getElementaryId('botoncrearusuario')
buttonSignIn.addEventListener('click', (e) => signUp(e))

function signUp(e) {
    e.preventDefault()
    const email = document.getElementById('email')?.value /* el ? es para que en caso de no encontrar el objeto, no busque el valor */
    const pass = document.getElementById('passwokrd')?.value

    newUser(email, pass)
}