// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyAQXxp7nJNLtt3DMEjq_Tn2Cre4GlktWGA",
    authDomain: "food-app-969dc.firebaseapp.com",
    projectId: "food-app-969dc",
    storageBucket: "food-app-969dc.appspot.com",
    messagingSenderId: "197674483777",
    appId: "1:197674483777:web:57f237fa0e58315e7b86c0"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);


export { storage, db };
