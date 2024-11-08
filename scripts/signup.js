import { auth, db } from './firebase.js';
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";
import { ref, set } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-database.js";

document.getElementById('submitSignUp').addEventListener('click', async (e) => {
    e.preventDefault();

    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const university = document.getElementById('university').value;
    const password = document.getElementById('password').value;

    const signUpMessage = document.getElementById('signUpMessage');

    if (!email.endsWith('.edu')) {
        signUpMessage.textContent = 'Please use a university email ending with .edu';
        signUpMessage.style.color = 'red';
        return;
    }

    try {
        // Create user with email and password
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // Store additional user information in the Realtime Database
        await set(ref(db, 'users/' + user.uid), {
            firstName: firstName,
            lastName: lastName,
            username: username,
            email: email,
            university: university
        });

        console.log("User data saved successfully");

        signUpMessage.textContent = 'Account created successfully! Redirecting to Sign In...';
        signUpMessage.style.color = 'green';

        setTimeout(() => {
            window.location.href = 'signin.html';
        }, 2000);

    } catch (error) {
        console.error("Error: ", error);
        signUpMessage.textContent = error.message;
        signUpMessage.style.color = 'red';
    }
});
