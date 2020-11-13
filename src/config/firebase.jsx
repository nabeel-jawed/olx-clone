




import firebase from 'firebase'


const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBEoiNT4Ms996z_QgZGfWmMAHHiKzZG7jI",
    authDomain: "olx-clone-app-d18e7.firebaseapp.com",
    databaseURL: "https://olx-clone-app-d18e7.firebaseio.com",
    projectId: "olx-clone-app-d18e7",
    storageBucket: "olx-clone-app-d18e7.appspot.com",
    messagingSenderId: "271659122693",
    appId: "1:271659122693:web:45533528c606987a205c6c",
    measurementId: "G-ENRX01VMEH"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export{
  db, 
  auth,
  storage
}