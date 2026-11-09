function sendMessage() {

// Get input message
let input = document.getElementById("message");

let message = input.value.trim();

// Check empty message
if (message === "") {
    return;
}

// Print message in console
console.log("User:", message);

// Get chat box
let chatBox = document.getElementById("chat-box");

// Create new message element
let newMessage = document.createElement("p");

// Add message text safely
newMessage.textContent = message;

// Show message on webpage
chatBox.appendChild(newMessage);

// Clear input bar
input.value = "";

}