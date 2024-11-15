constWishLists = document.getElementById('Wish-Lists');

// Function to clear allWishLists
function clearwishList() {
   WishLists.innerHTML = '<p class="no-wishList">NoWishLists available</p>';
}

// Dynamically add a WishList (example for demo)
function addWishList(title, message, icon, time) {
    const WishList = document.createElement('div');
    WishList.classList.add('WishList');

    WishList.innerHTML = `
        <div class="icon">
            <img src="${icon}" alt="WishList Icon">
        </div>
        <div class="details">
            <h4>${title}</h4>
            <p>${message}</p>
            <span class="time">${time}</span>
        </div>
    `;

   WishLists.prepend(Wish-List); // Adds new WishList at the top
}

// Example usage: Adding a WishList after 5 seconds
setTimeout(() => {
    addWishList('Itadori', ' Hey japenesse deninm for trade?.', './images/shipped.png', 'Just now');
}, 5000);
