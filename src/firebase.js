import firebase from "firebase";


const firebaseApp =firebase.initializeApp(
    {
        apiKey: "AIzaSyBPBhNuEbj0Y33rj8VWcOuHvGF7kB26PhM",
        authDomain: "instagram-clone-8745a.firebaseapp.com",
        databaseURL: "https://instagram-clone-8745a.firebaseio.com",
        projectId: "instagram-clone-8745a",
        storageBucket: "instagram-clone-8745a.appspot.com",
        messagingSenderId: "1092266961482",
        appId: "1:1092266961482:web:a53be90e8850cff1cb14b3",
        measurementId: "G-C5Z7232KHR"
      });

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage(); 

export {db,auth,storage};