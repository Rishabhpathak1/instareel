import firebase from "firebase"
//import "firebase/compat/auth"

//import firebase from "firebase";
let firebaseConfig= {
 apiKey: "AIzaSyAxLx83Vs9mKVWs-lS5lRaSKEmLSczDVbk",
    authDomain: "reels-login.firebaseapp.com",
    projectId: "reels-login",
    storageBucket: "reels-login.appspot.com",
    messagingSenderId: "737825974721",
    appId: "1:737825974721:web:40e6e328eaa3969412e740"
  };
  let firebaseApp = firebase.initializeApp(firebaseConfig);
export let firebaseAuth = firebaseApp.auth();
export let firebaseStorage = firebaseApp.storage();
export let firebaseDB = firebaseApp.firestore();
export let timeStamp = firebase.firestore.FieldValue.serverTimestamp;