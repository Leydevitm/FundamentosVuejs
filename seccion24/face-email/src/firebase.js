import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyDskWjIsK-dh9CVUTs7xTqRr77otayCl4I",
  authDomain: "facey-1b764.firebaseapp.com",
  projectId: "facey-1b764",
  storageBucket: "facey-1b764.firebasestorage.app",
  messagingSenderId: "776672119029",
  appId: "1:776672119029:web:7f49846b9bf43bbbb41dbc"
};
// firebase.initializeApp(firebaseConfig);
// const db = firebase.firestore()
// const auth = firebase.auth()
// const storage = firebase.storage()
// // Initialize Firebase
// // const app = initializeApp(firebaseConfig);
// export { firebase, db, auth, storage }


// Inicializar Firebase (en v8 se usa initializeApp desde firebase default)
firebase.initializeApp(firebaseConfig)

// Exportar servicios
const auth = firebase.auth()
const db = firebase.firestore()
const storage = firebase.storage()

export { auth, db, storage, firebase }