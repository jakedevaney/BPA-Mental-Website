// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBbAsvbV02mbDCW-U8QQpA7M9YjWEnwn9M",
  authDomain: "chat-5f7a4.firebaseapp.com",
  databaseURL: "https://chat-5f7a4-default-rtdb.firebaseio.com",
  projectId: "chat-5f7a4",
  storageBucket: "chat-5f7a4.firebasestorage.app",
  messagingSenderId: "147097553155",
  appId: "1:147097553155:web:af3d1acf9a5618e76cc136",
  measurementId: "G-WRQWQC0456"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()