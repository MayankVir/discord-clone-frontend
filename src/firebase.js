import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDIu1CzBsMJ1kx_ix_KNhCp_MTBXCkEwqA",
    authDomain: "discord-clone-front.firebaseapp.com",
    projectId: "discord-clone-front",
    storageBucket: "discord-clone-front.appspot.com",
    messagingSenderId: "21279566594",
    appId: "1:21279566594:web:e88e9b8bed24e56ce8f01b"
  };


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider};
export default db;