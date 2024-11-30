// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBoDmrfJJOZ8wFKKJ6F5z0agS5c5eifQg8",
  authDomain: "simple-firebase-7348b.firebaseapp.com",
  projectId: "simple-firebase-7348b",
  storageBucket: "simple-firebase-7348b.firebasestorage.app",
  messagingSenderId: "409610514271",
  appId: "1:409610514271:web:9d036e4d93f629568a10ea"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth