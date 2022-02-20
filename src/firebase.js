import firebase from "firebase";

var firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBtMOak99UsOJrS_PTjFPiQbdGDLfPBEuQ",
  authDomain: "copy-pastr.firebaseapp.com",
  projectId: "copy-pastr",
  storageBucket: "copy-pastr.appspot.com",
  messagingSenderId: "593311906417",
  appId: "1:593311906417:web:8a49aca4a3e478d74c39d0",
  measurementId: "G-1CPN339FVG"
});

var db = firebaseApp.firestore();

export { db };
