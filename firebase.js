// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getDatabase} from "firebase/database"
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBaUYpWikv8XmKlQ5UoVq-Ekbd6GW7Vhxw",
  authDomain: "todolist-25f3a.firebaseapp.com",
  databaseURL: "https://todolist-25f3a-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "todolist-25f3a",
  storageBucket: "todolist-25f3a.appspot.com",
  messagingSenderId: "1081591302758",
  appId: "1:1081591302758:web:8d7e2fb2102b9bd8717ba7",
  measurementId: "G-EML6BWL3HF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db=getFirestore(app)
export {db};