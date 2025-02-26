// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Logueamos el env para ver si funciona
console.log(process.env.REACT_APP_API_KEY);

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: (process.env.REACT_APP_API_KEY),
  authDomain: "dc-first.firebaseapp.com",
  projectId: "dc-first",
  storageBucket: "dc-first.appspot.com",
  messagingSenderId: "768948446132",
  appId: "1:768948446132:web:28cd88a6bf58a26f6388e1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)