import { initializeApp } from 'firebase/app'; // Importamos la función de inicialización
import { getFirestore } from 'firebase/firestore';  // Si vas a usar Firestore
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyC31qtcgL32JRSBTeXxrMP3MfoGx4Yt4Rc",
  authDomain: "josle5e.firebaseapp.com",
  projectId: "josle5e",
  storageBucket: "josle5e.firebasestorage.app",
  messagingSenderId: "143574372151",
  appId: "1:143574372151:web:3c26be32fe62bcc8b6d4b2"
};

const app = initializeApp(firebaseConfig);


const db = getFirestore(app); 
const auth = getAuth(app); 