import firebase from "firebase/app";
import  "firebase/firestore";
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAIlMfr07Ks1DFlURQaCi5TkiIDNKUj9pU",
  authDomain: "crud-1-e1d37.firebaseapp.com",
  projectId: "crud-1-e1d37",
  storageBucket: "crud-1-e1d37.firebasestorage.app",
  messagingSenderId: "416292508122",
  appId: "1:416292508122:web:9d0c4fa4bf0758aebcf0e3"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();
export { db,auth };