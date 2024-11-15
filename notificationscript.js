const notifications = document.getElementById('notifications');

// Function to clear all notifications
function clearNotifications() {
    notifications.innerHTML = '<p class="no-notifications">No notifications available</p>';
}

// Dynamically add a notification (example for demo)
function addNotification(title, message, icon, time) {
    const notification = document.createElement('div');
    notification.classList.add('notification');

    notification.innerHTML = `
        <div class="icon">
            <img src="${icon}" alt="Notification Icon">
        </div>
        <div class="details">
            <h4>${title}</h4>
            <p>${message}</p>
            <span class="time">${time}</span>
        </div>
    `;

    notifications.prepend(notification); // Adds new notification at the top
}

// Example usage: Adding a notification after 5 seconds
setTimeout(() => {
    addNotification('Itadori', ' Hey japenesse deninm for trade?.', './images/shipped.png', 'Just now');
}, 5000);
