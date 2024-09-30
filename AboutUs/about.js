// section-1
function toggleNavbar() {
  var navbar = document.getElementById("myNavbar");
  navbar.classList.toggle("responsive");
}
const offcanvasMenu = document.getElementById("offcanvas-menu");
const menuButton = document.getElementById("menu-button");
const closeButton = document.getElementById("close-button");
// Function to open the offcanvas menu
function openMenu() {
  offcanvasMenu.style.width = "70%";
}
// Function to close the offcanvas menu
function closeMenu() {
  offcanvasMenu.style.width = "0";
}
// Toggle the menu when the menu button is clicked
menuButton.addEventListener("click", openMenu);
// Close the menu when the close button is clicked
closeButton.addEventListener("click", closeMenu);
// Close the menu when a menu item is clicked (optional)
const menuItems = document.querySelectorAll("#offcanvas-menu a");
menuItems.forEach((item) => {
  item.addEventListener("click", closeMenu);
});

// ------------------------------------------------------------------------------------------

document.addEventListener("DOMContentLoaded", function () {
  const subscribeEmail = document.getElementById("subscribeEmail");
  const subscribeButton = document.getElementById("subscribeButton");
  // Add input event listener to validate as the user types
  subscribeEmail.addEventListener("input", function () {
    const email = subscribeEmail.value.trim();
    if (email === "") {
      // Empty input, change border color
      subscribeEmail.style.borderColor = "red";
    } else if (isValidEmail(email)) {
      // Valid email format, reset border color
      subscribeEmail.style.borderColor = "";
    } else {
      // Invalid email format, change border color
      subscribeEmail.style.borderColor = "red";
    }
  });
  subscribeButton.addEventListener("click", function () {
    const email = subscribeEmail.value.trim();
    if (isValidEmail(email)) {
      // Valid email format
      alert("Thanks for subscribing us!");
    } else {
      // Invalid email format
      alert("Please enter a valid email address.");
    }
  });
  // Function to validate email format
  function isValidEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  }
});
