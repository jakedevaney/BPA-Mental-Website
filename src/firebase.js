// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqWGk_yZHz4rOsUj2J2oVMjz9LhX3Q-6A",
  authDomain: "bpa-mental-health.firebaseapp.com",
  projectId: "bpa-mental-health",
  storageBucket: "bpa-mental-health.firebasestorage.app",
  messagingSenderId: "478966953054",
  appId: "1:478966953054:web:08a103e51c6f51e844b0cf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);