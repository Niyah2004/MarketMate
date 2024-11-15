// src/auth.js
import { auth } from "./firebase.js";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-auth.js";

// Sign-Up Function
export function signUp(email, password) {
  if (!email.endsWith(".edu")) {
    alert("Please use a .edu email address.");
    return;
  }

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      sendEmailVerification(userCredential.user);
      alert("Verification email sent!");
    })
    .catch((error) => alert(error.message));
}

// Login Function
export function login(email, password) {
  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      window.location.href = "index.html";
    })
    .catch((error) => alert(error.message));
}
