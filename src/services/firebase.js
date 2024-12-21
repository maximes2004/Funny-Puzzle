import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set, push, get, child } from 'firebase/database';

// Вставьте свою конфигурацию Firebase
const firebaseConfig = {
  apiKey: "AIzaSyALj6_xAX6_0cEuQYYcx7NvAnnVIxwR5_Q",
  authDomain: "funny-puzzle-7abfe.firebaseapp.com",
  databaseURL: "https://funny-puzzle-7abfe-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "funny-puzzle-7abfe",
  storageBucket: "funny-puzzle-7abfe.firebasestorage.app",
  messagingSenderId: "80505961078",
  appId: "1:80505961078:web:fcad7da701befbdcb83d57",
  measurementId: "G-NGH74220EN"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db, ref, set, push, get, child };




