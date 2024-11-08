import { auth, db } from './firebase.js';
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";
import { ref, get, query, orderByChild, equalTo } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-database.js";

document.getElementById('submitSignIn').addEventListener('click', async (e) => {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const signInMessage = document.getElementById('signInMessage');

    try {
        // First, find the user's email by their username
        const userQuery = query(ref(db, 'users'), orderByChild('username'), equalTo(username));
        const snapshot = await get(userQuery);

        if (snapshot.exists()) {
            // Get the first (and should be only) user with this username
            const userData = Object.values(snapshot.val())[0];
            const email = userData.email;

            // Now sign in with the email and password
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            
            signInMessage.textContent = 'Signed in successfully! Redirecting...';
            signInMessage.style.color = 'green';

            setTimeout(() => {
                // Redirect to home page
                window.location.href = 'homepage.html';
            }, 2000);
        } else {
            throw new Error('No user found with this username');
        }

    } catch (error) {
        console.error("Error:", error);
        signInMessage.textContent = error.message;
        signInMessage.style.color = 'red';
    }
});