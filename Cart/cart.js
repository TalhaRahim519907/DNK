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

document.getElementById("checkout-btn").addEventListener("click", function () {
  window.location.href = "../CheckOut/checkout.html";
});

// -------------------------------------------------------------------------------
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

// <----------------------------------------------------------------------------------------->
// // Function to update the cart table based on cart items in localStorage
// function updateCartTable() {
//   const cartTable = document.querySelector(".shop-table table");
//   const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

//   // Clear the existing table rows
//   while (cartTable.rows.length > 1) {
//     cartTable.deleteRow(1);
//   }

//   // Populate the table with cart item details
//   cartItems.forEach((cartItem) => {
//     const newRow = cartTable.insertRow(-1);
//     newRow.innerHTML = `
//       <td><i class="fa fa-light fa-circle-xmark"></i></td>
//       <td><img src="${cartItem.imageSrc}" alt="" /></td>
//       <td><a href="#">${cartItem.name}</a></td>
//       <td>${cartItem.price}</td>
//       <td>
//         <input
//           class="quantity-input"
//           type="number"
//           name="quantity"
//           min="1"
//           max="50"
//           value="${cartItem.quantity}"
//         />
//       </td>
//       <td>$${cartItem.subtotal.toFixed(2)}</td>
//     `;
//   });
// }
// // Call the updateCartTable function to initially populate the table
// updateCartTable();
// Retrieve cart data from the URL
const cartData = getCartDataFromURL();

// Find the row you want to update
const rowToUpdate = document.getElementById("cart-item-row");

// Check if there's a cart item to update
if (cartData.length > 0) {
  const cartItem = cartData[0]; // Assuming the first cart item should be updated

  // Update the row content with cart item data
  const productNameCell = rowToUpdate.querySelector("td:nth-child(3) a");
  const priceCell = rowToUpdate.querySelector("td:nth-child(4)");
  const quantityInput = rowToUpdate.querySelector(".quantity-input");
  const subtotalCell = rowToUpdate.querySelector("td:nth-child(6)");

  // Update the content with cart item data
  productNameCell.textContent = cartItem.productName;
  priceCell.textContent = cartItem.price;
  quantityInput.value = cartItem.quantity;
  subtotalCell.textContent = calculateSubtotal(
    cartItem.price,
    cartItem.quantity
  );
}
