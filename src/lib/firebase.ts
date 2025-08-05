// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  "projectId": "chicoryconnect",
  "appId": "1:117982097388:web:5067584f38c295028c9ac9",
  "storageBucket": "chicoryconnect.firebasestorage.app",
  "apiKey": "AIzaSyBFkslXTGzOtFtyEDR7DUfkz6qtdthcWXU",
  "authDomain": "chicoryconnect.firebaseapp.com",
  "measurementId": "",
  "messagingSenderId": "117982097388"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
