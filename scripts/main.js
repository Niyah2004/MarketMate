// scripts/main.js

document.addEventListener('DOMContentLoaded', () => {
    // Example of dynamic product listing (can be replaced with actual data)
    const productList = document.querySelector('.product-list');
    const products = [
        { name: "Product 1", price: "$10", image: "path/to/image1.jpg" },
        { name: "Product 2", price: "$20", image: "path/to/image2.jpg" },
        { name: "Product 3", price: "$30", image: "path/to/image3.jpg" },
    ];

    products.forEach(product => {
        const card = document.createElement('div');
        card.classList.add('product-card');
        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <div class="product-name">${product.name}</div>
            <div class="price">${product.price}</div>
            <button class="wishlist">❤️</button>
            <button class="message">💬</button>
        `;
        productList.appendChild(card);
    });

    // Event listeners for wishlist and message buttons
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
});

document.getElementById('logoutButton').addEventListener('click', function() {
    logoutUser ();

    // Redirect to the login page after logout
    window.location.href = 'signin.html';
});

function logoutUser () {
    console.log("User  logged out");
}
