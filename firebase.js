// src/firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-storage.js";

const firebaseConfig = {
    apiKey: "AIzaSyB9QRXtOcaG5t_3J4bY7atlA5B-jbDGDdY",
    authDomain: "marketmate3444.firebaseapp.com",
    projectId: "marketmate3444",
    storageBucket: "marketmate3444.appspot.com",
    messagingSenderId: "172272688922",
    appId: "1:172272688922:web:2ddaeb01bb6244a59616a3"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

function showMessage(message, divID){
    var messageDiv = document.getElementById(divID);
    messageDiv.style.display="block";
    messageDiv.innerHTML=message;
    messageDiv.style.opacity=1;
    setTimeout(function(){
        messageDiv.style.opacity=0;
    }, 5000)
}

const signUp = document.getElementById('submit');
signUp.addEventListener('click', function(event){
    event.preventDefault();
    const emailAddress = document.getElementById('emailAddress').value;
    const password = document.getElementById('password').value;

    const auth = getAuth();
    const db = getFirestore();

    createUserWithEmailAndPassword(auth, emailAddress, password).then((userCredential)=>{
        const user = userCredential.user;
        const userData={
            email: email
        }
        showMessage('Account Created Successfully!', 'signUpMessage');
        const docRef = doc(db, "users", user.uid);
        setDoc(docRef, userData).then(()=>{
            window.location.href='login.html';
        })
        .catch((error)=>{
            console.error("error writing document", error);
        });
    })
    .catch((error)=>{
        const errorCode = error.code;
        if(errorCode == 'auth/email-already in use'){
            showMessage('Email Already Exists', 'signUpMessage');
        }
        else{
            showMessage('Unable to create account', 'signUpMessage');
        }
    })

});