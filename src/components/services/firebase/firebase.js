// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAcDMx08EjIIHsGCPcyI_QlMwVUNoB7BuA",
  authDomain: "carrito-react-7953e.firebaseapp.com",
  projectId: "carrito-react-7953e",
  storageBucket: "carrito-react-7953e.appspot.com",
  messagingSenderId: "1098913348332",
  appId: "1:1098913348332:web:d9f7ae62055b72854fc3c9",
  measurementId: "G-Q74L2783ZD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//Initialize Firestore
export const db = getFirestore(app)