import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

//base de datos
const firebaseConfig = {
  apiKey: "AIzaSyCaU-wb_EdCoVxVxc_xHr6kRGq5r79LGZM",
  authDomain: "journal-react-app-8374a.firebaseapp.com",
  projectId: "journal-react-app-8374a",
  storageBucket: "journal-react-app-8374a.appspot.com",
  messagingSenderId: "756369208516",
  appId: "1:756369208516:web:027c5bf5e51a5b84aec591"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//referencia a firestore
const DB = firebase.firestore();
//auth provider para autenticacion con google
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
  DB,
  googleAuthProvider,
  firebase
}