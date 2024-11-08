import { auth, db } from './firebase.js';
import { signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";
import { ref, get } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-database.js";

// Wait for authentication state to be ready
onAuthStateChanged(auth, async (user) => {
    if (user) {
        try {
            // Fetch user data from the database
            const userRef = ref(db, 'users/' + user.uid);
            const snapshot = await get(userRef);
            
            if (snapshot.exists()) {
                const userData = snapshot.val();
                // Update the UI with user data
                document.getElementById('userName').innerText = `Username: ${userData.username}`;
                document.getElementById('userEmail').innerText = `Email: ${userData.email}`;
                document.getElementById('userUniversity').innerText = `University: ${userData.university}`;
            }
        } catch (error) {
            console.error("Error fetching user data:", error);
        }
    } else {
        // No user is signed in, redirect to signin page
        window.location.href = 'signin.html';
    }
});

// Handle Logout
document.getElementById('logoutBtn').addEventListener('click', () => {
    signOut(auth).then(() => {
        window.location.href = 'signin.html'; // Redirect to sign-in after logout
    }).catch((error) => {
        console.error("Error signing out:", error);
    });
});

// homepage.js

// Functionality for filter buttons
document.querySelectorAll('.filter').forEach(button => {
    button.addEventListener('click', () => {
        // Remove 'selected' class from all buttons
        document.querySelectorAll('.filter').forEach(btn => btn.classList.remove('selected'));
        // Add 'selected' class to the clicked button
        button.classList.add('selected');
    });
});

// Functionality for favorite and chat buttons in product cards
document.querySelectorAll('.wishlist').forEach(button => {
    button.addEventListener('click', () => {
        alert('Product added to wishlist!');
    });
});

document.querySelectorAll('.message').forEach(button => {
    button.addEventListener('click', () => {
        alert('Chat with the seller!');
    });
});