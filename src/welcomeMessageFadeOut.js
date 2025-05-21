const welcomeMsg = document.getElementById("welcome-message");

// Function to fade out the message
function fadeOutMessage() {
  welcomeMsg.style.opacity = "0";
  // After transition, hide element completely
  setTimeout(() => {
    welcomeMsg.style.display = "none";
  }, 800); // matches CSS transition duration
}

// Fade out after 4 seconds
setTimeout(fadeOutMessage, 4000);

// Also fade out if user clicks the message
welcomeMsg.addEventListener("click", fadeOutMessage);
