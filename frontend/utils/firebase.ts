// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "cortexai-f8a1e.firebaseapp.com",
    projectId: "cortexai-f8a1e",
    storageBucket: "cortexai-f8a1e.firebasestorage.app",
    messagingSenderId: "809554113175",
    appId: "1:809554113175:web:94406418f95dc178a8efd2",
    measurementId: "G-L0K4X7J2X4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)