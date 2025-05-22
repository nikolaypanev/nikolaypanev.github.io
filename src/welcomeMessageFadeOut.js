const welcomeMsg = document.getElementById("welcome-message");

function fadeOutMessage() {
  welcomeMsg.style.opacity = "0";
  setTimeout(() => {
    welcomeMsg.style.display = "none";
  }, 800); // matches CSS transition duration
}

setTimeout(fadeOutMessage, 4000);

welcomeMsg.addEventListener("click", fadeOutMessage);
