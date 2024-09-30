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

// <----------------------------------------------------------------------------------------->
const clickLink = document.getElementById("clickLink");
const loginDiv = document.getElementById("login-part");
// Add a click event listener to the link
clickLink.addEventListener("click", function (event) {
  event.preventDefault(); // Prevent the link from navigating
  // Toggle the visibility of the div
  if (loginDiv.style.display === "none" || loginDiv.style.display === "") {
    loginDiv.style.display = "block";
  } else {
    loginDiv.style.display = "none";
  }
});

const couponLink = document.getElementById("couponLink");
const couponDiv = document.getElementById("coupon-part");
// Add a click event listener to the link
couponLink.addEventListener("click", function (event) {
  event.preventDefault(); // Prevent the link from navigating
  // Toggle the visibility of the div
  if (couponDiv.style.display === "none" || couponDiv.style.display === "") {
    couponDiv.style.display = "block";
  } else {
    couponDiv.style.display = "none";
  }
});

// <------------------------------------------------------------------------------------------->
// document
//   .getElementById("placeorder-btn")
//   .addEventListener("click", function () {
//     resetInputBorders();
//     var errorSummary = document.getElementById("errorSummary");
//     errorSummary.innerHTML = "";
//     var inputFields = document.querySelectorAll("input");
//     var isValid = true;
//     inputFields.forEach(function (input) {
//       if (!input.checkValidity()) {
//         isValid = false;
//         var fieldName = input.getAttribute("placeholder");
//         var errorMessage = input.validationMessage;
//         displayErrorSummary(errorSummary, fieldName + ":" + errorMessage);
//         input.style.borderColor = "red";
//       }
//     });
//     if (isValid) {
//       window.location.href = "../OrderPlaced/order.html";
//     }
//   });

// function displayErrorSummary(errorSummary, errorMessage) {
//   var errorItem = document.createElement("div");
//   errorItem.textContent = errorMessage;
//   errorSummary.appendChild(errorItem);
// }

// function resetInputBorders() {
//   var inputFields = document.querySelectorAll("input");
//   inputFields.forEach(function (input) {
//     input.style.borderColor = "";
//   });
// }

// Add a click event listener to the Place Order button
document
  .getElementById("placeorder-btn")
  .addEventListener("click", function () {
    resetInputBorders();
    var errorSummary = document.getElementById("errorSummary");
    errorSummary.innerHTML = "";
    var inputFields = document.querySelectorAll("input[type=radio]");
    var isValid = false;

    inputFields.forEach(function (input) {
      if (input.checked) {
        isValid = true;
      }
    });

    if (!isValid) {
      alert("Please select a payment method.");
    } else if (validateOtherInputs()) {
      window.location.href = "../OrderPlaced/order.html";
    }
  });

// Function to validate other input fields (email, etc.)
function validateOtherInputs() {
  var inputFields = document.querySelectorAll(
    "input[type=email], input[type=text]"
  );
  var isValid = true;

  inputFields.forEach(function (input) {
    if (!input.checkValidity()) {
      isValid = false;
      var fieldName = input.getAttribute("placeholder");
      var errorMessage = input.validationMessage;
      displayErrorSummary(errorSummary, fieldName + ": " + errorMessage);
      input.style.borderColor = "red";
    }
  });

  return isValid;
}

function displayErrorSummary(errorSummary, errorMessage) {
  var errorItem = document.createElement("div");
  errorItem.textContent = errorMessage;
  errorSummary.appendChild(errorItem);
}

function resetInputBorders() {
  var inputFields = document.querySelectorAll(
    "input[type=email], input[type=text], input[type=radio]"
  );
  inputFields.forEach(function (input) {
    input.style.borderColor = "";
  });
}

// <----------------------------------------------------------------------------------------->

// Get input elements
const emailInput = document.getElementById("emailInput");
const passwordInput = document.getElementById("passwordInput");
const loginButton = document.getElementById("loginButton");
// Add a click event listener to the login button
loginButton.addEventListener("click", function (e) {
  e.preventDefault();
  // Validate the inputs
  const isEmailValid = validateInput(emailInput);
  const isPasswordValid = validatePassword(passwordInput);

  if (isEmailValid && isPasswordValid) {
    // You can submit the form or perform other actions here
  }
});
// Function to validate input
function validateInput(input) {
  if (input.value.trim() === "") {
    input.style.borderColor = "red";
    return false;
  } else {
    input.style.borderColor = "";
    return true;
  }
}
// Function to validate password strength
function validatePassword(passwordInput) {
  const password = passwordInput.value;
  const passwordPattern = /^(?=.*\d)(?=.*[a-zA-Z]).{8,}$/;

  if (!passwordPattern.test(password)) {
    passwordInput.style.borderColor = "red";
    return false;
  } else {
    passwordInput.style.borderColor = "";
    return true;
  }
}

// <---------------------------------------------------------------------------------------->

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

// <------------------------------------------------------------------------------------------------>
