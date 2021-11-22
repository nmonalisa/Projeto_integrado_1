// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
import { getFirestore, doc, addDoc, getDoc, setDoc, getDocs, collection } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

// recuperar dados de uma colecao
const querySnapshot = await getDocs(collection(db, "postos"));
querySnapshot.forEach((doc) => {
  if(doc.exists){
    const dados = doc.data()
    console.log(dados.nome)
    console.log(dados.id)
  }
});


// add dados com id automatico
const novoPosto = {
  id: 30,
  nome: "Restaurante Add"
}

const docRef = await addDoc(collection(db, "postos"), novoPosto);
console.log("Document written with ID: ", docRef.id);

export { app, db }