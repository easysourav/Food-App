import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyAQXxp7nJNLtt3DMEjq_Tn2Cre4GlktWGA",
    authDomain: "food-app-969dc.firebaseapp.com",
    projectId: "food-app-969dc",
    storageBucket: "food-app-969dc.appspot.com",
    messagingSenderId: "197674483777",
    appId: "1:197674483777:web:57f237fa0e58315e7b86c0"
  };

// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase }