// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import * as firestore from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC1PMgotwGwz1-BdlMTBmDqVqw9bVtdk1o",
  authDomain: "teste-55209.firebaseapp.com",
  projectId: "teste-55209",
  storageBucket: "teste-55209.appspot.com",
  messagingSenderId: "878671780183",
  appId: "1:878671780183:web:22828936143587e2818612",
  measurementId: "G-JSDV0RJJ5L"
};

// Initialize Firebase
console.log("conectado ao firebase")
const firebase = initializeApp(firebaseConfig);
export const db = firestore.getFirestore(firebase)



export{ firestore }