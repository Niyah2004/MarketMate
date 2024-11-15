const chatMessages = document.getElementById('chat-messages');

function addMessage(text, sender) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', sender);
    messageElement.textContent = text;
    chatMessages.appendChild(messageElement);
    chatMessages.scrollTop = chatMessages.scrollHeight; // Auto-scroll to latest message
}

function sendMessage() {
    const messageInput = document.getElementById('message-input');
    const messageText = messageInput.value.trim();

    if (messageText) {
        addMessage(messageText, 'user'); // Display user message
        messageInput.value = ''; // Clear input

        // Simulate bot response
        setTimeout(() => {
            addMessage('MarketMate is so cool!', 'bot');
        }, 1000);
    }
}
// Selectors
const messageNotification = document.querySelector('#messages-notifications');
const messages = document.querySelector('.messages-list'); // Changed to .messages-list
const message = messages.querySelectorAll('.message'); 
const messageSearch = document.querySelector('#message-search');

// Function to search and filter messages
const searchMessage = () => {
    const val = messageSearch.value.toLowerCase().trim();
    
    message.forEach(user => {
        let name = user.querySelector('h5').textContent.toLowerCase();
        if (name.includes(val)) {
            user.style.display = 'flex'; // Show matching message
        } else {
            user.style.display = 'none'; // Hide non-matching
        }
    });
};

// Event listener for searching
messageSearch.addEventListener('keyup', searchMessage);

// Highlight messages when notification is clicked
messageNotification.addEventListener('click', () => {
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';
    messageNotification.querySelector('.notification-count').style.display = 'none'; // Hide count
    
    setTimeout(() => {
        messages.style.boxShadow = 'none';
    }, 2000);
});

