
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
import { getFirestore, doc, addDoc, getDoc, setDoc, getDocs, collection } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyC5L-LPQz8x9CHofjtTRVpkXL9fp_zAbrA",
  authDomain: "eco-return.firebaseapp.com",
  projectId: "eco-return",
  storageBucket: "eco-return.appspot.com",
  messagingSenderId: "566381883046",
  appId: "1:566381883046:web:7e2a470c5069772e7b0e67",
  measurementId: "G-V50XWT8Y6J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();