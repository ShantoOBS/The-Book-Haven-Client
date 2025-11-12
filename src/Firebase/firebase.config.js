// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBXywVlSg-j2wYbOFbh74QnCdPpxHA8q3U",
  authDomain: "book-haven-4f059.firebaseapp.com",
  projectId: "book-haven-4f059",
  storageBucket: "book-haven-4f059.firebasestorage.app",
  messagingSenderId: "555152095195",
  appId: "1:555152095195:web:a61dcbf8d82481332699fe",
  measurementId: "G-N35F7M3ZZ0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);