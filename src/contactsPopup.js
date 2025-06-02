const showBtn = document.getElementById("show-numbers");
const popup = document.getElementById("contact-popup");
const closeBtn = document.getElementById("close-popup");

showBtn.addEventListener("click", () => {
  popup.classList.add("visible");
});

closeBtn.addEventListener("click", () => {
  popup.classList.remove("visible");
});

window.addEventListener("click", (e) => {
  if (e.target === popup) {
    popup.classList.remove("visible");
  }
});
