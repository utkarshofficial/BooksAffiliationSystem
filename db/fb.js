// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { doc, setDoc } from "firebase/firestore"; 

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCEVhj9MwCLykglebLehP7v8Ks_H0jXEfg",
  authDomain: "bookaffiliation.firebaseapp.com",
  projectId: "bookaffiliation",
  storageBucket: "bookaffiliation.appspot.com",
  messagingSenderId: "433705135477",
  appId: "1:433705135477:web:85dbb193cbdc640f88773c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);