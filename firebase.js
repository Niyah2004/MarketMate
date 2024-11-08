
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyB9QRXtOcaG5t_3J4bY7atlA5B-jbDGDdY",
    authDomain: "marketmate3444.firebaseapp.com",
    databaseURL: "https://marketmate3444-default-rtdb.firebaseio.com/",
    projectId: "marketmate3444",
    storageBucket: "marketmate3444.appspot.com",
    messagingSenderId: "172272688922",
    appId: "1:172272688922:web:2ddaeb01bb6244a59616a3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);

export { auth, db };