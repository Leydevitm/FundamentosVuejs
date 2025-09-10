import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"



// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-MNOTvaq3qGGlIP610uPcC0zRJ7eJW08",
  authDomain: "firestore-auth-1-6da90.firebaseapp.com",
  projectId: "firestore-auth-1-6da90",
  storageBucket: "firestore-auth-1-6da90.firebasestorage.app",
  messagingSenderId: "40241399521",
  appId: "1:40241399521:web:4b280e33404a703bfdd9a0"
};

// Initialize Firebase
// if(!firebase.app.length){
// const app = initializeApp(firebaseConfig);
// }
// const db = firebase.firestore()
// const auth = firebase.auth()
// const marcaTiempo = firebase.firebase.FielValue.serverTimestamp

// export{db,auth,marcaTiempo,firebase}

// Inicializar Firebase solo una vez
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

// Ahora sí podemos usar los servicios
const auth = firebase.auth()
const db = firebase.firestore()
const marcaTiempo = firebase.firestore.FieldValue.serverTimestamp()

export { auth, db, marcaTiempo, firebase }