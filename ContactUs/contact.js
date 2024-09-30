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

// -------------------------------------------------------------------------------------------------

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageTextarea = document.getElementById("message");
const submitButton = document.getElementById("submitButton");
// Add input event listeners to validate as the user types
nameInput.addEventListener("input", validateInput);
emailInput.addEventListener("input", validateInput);
messageTextarea.addEventListener("input", validateInput);
// Add a click event listener to the submit button
submitButton.addEventListener("click", function (e) {
  // Prevent the form from submitting (for demo purposes)
  e.preventDefault();
  // Validate the inputs
  const isValid = validateInput();
  if (isValid) {
    // Form submitted successfully
    alert("Message submitted successfully!");
    // You can also reset the form here if needed
    document.getElementById("message-form").reset();
  } else {
    // Show an alert for required fields not filled
    alert("Please fill in all required fields.");
  }
});
// Function to validate an individual input
function validateInput() {
  let isValid = true;
  if (nameInput.value.trim() === "") {
    nameInput.style.borderColor = "red";
    isValid = false;
  } else {
    nameInput.style.borderColor = ""; // Reset border color to default
  }
  if (emailInput.value.trim() === "") {
    emailInput.style.borderColor = "red";
    isValid = false;
  } else if (!isValidEmail(emailInput.value)) {
    emailInput.style.borderColor = "red";
    isValid = false;
  } else {
    emailInput.style.borderColor = ""; // Reset border color to default
  }
  if (messageTextarea.value.trim() === "") {
    messageTextarea.style.borderColor = "red";
    isValid = false;
  } else {
    messageTextarea.style.borderColor = ""; // Reset border color to default
  }
  return isValid;
}
// Function to validate email format
function isValidEmail(email) {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailPattern.test(email);
}

// -------------------------------------------------------------------------------------------------

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

// --------------------------------------------------------------------------------------------
