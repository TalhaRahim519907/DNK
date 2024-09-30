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

// <------------------------------------------------------------------------------------------->

// document.getElementById("add-cart-btn").addEventListener("click", function () {
//   var div = document.getElementById("view-cart");
//   div.style.display = "block";
// });

document.getElementById("add-cart-btn").addEventListener("click", function () {
  const quantityInput = document.getElementById("quantity");
  const quantityValue = parseInt(quantityInput.value); // Convert input value to an integer

  if (quantityValue >= 1) {
    var div = document.getElementById("view-cart");
    div.style.display = "block";
  } else {
    alert("Please enter a quantity of 1 or more.");
  }
});

document.getElementById("view-cart-btn").addEventListener("click", function () {
  window.location.href = "../Cart/cart.html";
});

// <-------------------------------------------------------------------------------------------->

const modalOverlay = document.querySelector(".modal-overlay");
function openModal() {
  modalOverlay.style.display = "flex";
}
function closeModal() {
  modalOverlay.style.display = "none";
}
//  -----------------------
function changeImage7(imagePath) {
  const image = document.getElementById("image-7");
  image.src = imagePath;
}

// <--------------------------------------------------------------------------------------------->

// Get the product object from the URL query parameters
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const productData = urlParams.get("product");
// Parse the JSON data to get the product object
const product = JSON.parse(decodeURIComponent(productData));
// Display the product details
const productDetailsElement = document.getElementById("product-details");
// Set the src attributes of the image elements
const zoomImageElement = document.getElementById("zoom-image");
const modalImageElement = document.getElementById("modal-image");
const productnameElement = document.getElementById("product-name");
const productpriceElement = document.getElementById("product-price");
const productLink = document.getElementById("product-link");
const producttypeLink = document.getElementById("product-type");
const producttype1Link = document.getElementById("product-type1");
const producttype2Link = document.getElementById("product-type2");
const productcartElement = document.getElementById("cart-product-name");

zoomImageElement.src = `../${product.imageSrc}`;
modalImageElement.src = `../${product.imageSrc}`;
productnameElement.textContent = `${product.name}`;
productpriceElement.textContent = `${product.price}`;
productLink.textContent = `${product.name}`;
producttypeLink.textContent = `${product.type}`;
producttype1Link.textContent = `${product.type}`;
producttype2Link.textContent = `${product.type}`;
productcartElement.textContent = `${product.name}`;
// Get all the product elements
const productElements = document.querySelectorAll(".product");
// Function to handle the click event
function handleProductClick(event) {
  // Prevent the default behavior of the anchor tag
  event.preventDefault();
  // Find the index of the clicked product element
  const index = Array.from(productElements).indexOf(event.currentTarget);
  // Get the corresponding product from the products array
  const selectedProduct = products[index];
  // Find the anchor element with the class "page_name" within the clicked product
  const anchorElement = event.currentTarget.querySelector(".page_name");
  // Update the text content of the anchor with the product name
  anchorElement.textContent = selectedProduct.name;
}
// Add click event listeners to each product element
productElements.forEach((productElement) => {
  productElement.addEventListener("click", handleProductClick);
});

// <------------------------------------------------------------------------------------------>

// // Function to validate the review form and display errors
function validateReviewForm() {
  const reviewText = document.getElementById("review-text").value;
  const reviewName = document.getElementById("review-name").value;
  const reviewEmail = document.getElementById("review-email").value;
  const selectedRating = document.querySelector('input[name="star"]:checked');
  let isValid = true;
  // Reset error messages
  document.getElementById("review-text-error").textContent = "";
  document.getElementById("review-name-error").textContent = "";
  document.getElementById("review-email-error").textContent = "";

  if (reviewText.trim() === "") {
    document.getElementById("review-text-error").textContent =
      "Please enter your review.";
    isValid = false;
  }
  if (reviewName.trim() === "") {
    document.getElementById("review-name-error").textContent =
      "Please enter your name.";
    isValid = false;
  }
  if (reviewEmail.trim() === "") {
    document.getElementById("review-email-error").textContent =
      "Please enter your email.";
    isValid = false;
  } else if (!isValidEmail(reviewEmail)) {
    document.getElementById("review-email-error").textContent =
      "Please enter a valid email address.";
    isValid = false;
  }
  if (!selectedRating) {
    alert("Please select a rating.");
    isValid = false;
  }
  return isValid;
}
// Function to validate email format
function isValidEmail(email) {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailPattern.test(email);
}
// Function to handle form submission
function handleSubmit() {
  if (validateReviewForm()) {
    const submittedRating = document.querySelector(
      'input[name="star"]:checked'
    ).value;
    const submittedReview = document.getElementById("review-text").value;
    const submittedName = document.getElementById("review-name").value;

    // Display the submitted data
    document.getElementById("submitted-rating").textContent = submittedRating;
    document.getElementById("submitted-review").textContent = submittedReview;
    document.getElementById("submitted-name").textContent = submittedName;

    // Hide the form and display the results
    document.getElementById("review").style.display = "none";
    document.getElementById("review-results").style.display = "block";
  }
}
// Add an event listener to the Submit button
const submitButton = document.getElementById("submit-btn");
submitButton.addEventListener("click", handleSubmit);

// <-------------------------------------------------------------------------------------------->

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

// <------------------------------------------------------------------------>

const products = [
  {
    name: "DNK Yellow Shoes",
    type: "Men",
    price: "$190.00",
    rating: 5,
    imageSrc: "../images/DNK-yellow-shoes.jpg",
  },
  {
    name: "DNK Blue Shoes",
    type: "Men",
    price: "$190.00",
    rating: 5,
    imageSrc: "../images/DNK-blue-shoes.jpg",
  },
  {
    name: "Dark Brown Jeans",
    type: "Men",
    price: "$190.00",
    rating: 5,
    imageSrc: "../images/Dark-brown-jeans.jpg",
  },
  {
    name: "Dark Brown Jeans",
    type: "Men",
    price: "$190.00",
    rating: 5,
    imageSrc: "../images/Dark-brown-jeans.jpg",
  },

  // Add more product objects as needed
];
// Function to create a product card
function createProductCard(product) {
  const productCard = document.createElement("div");
  productCard.className = "product-card";

  // Check if the product is on sale
  if (product.onSale) {
    const saleButton = document.createElement("span");
    saleButton.className = "sale-button";
    saleButton.textContent = "Sale!";
    productCard.appendChild(saleButton);
  }

  const productImage = document.createElement("img");
  productImage.src = product.imageSrc;
  productImage.alt = product.name;
  productImage.addEventListener("click", () => {
    // Redirect to the next page with the product object in the URL
    window.location.href = `../Description/description.html?product=${encodeURIComponent(
      JSON.stringify(product)
    )}`;
  });
  productCard.appendChild(productImage);
  // ... Rest of your product card creation code ...
  const addToCartIcon = document.createElement("div");
  addToCartIcon.className = "add-to-cart-icon";
  addToCartIcon.textContent = "🛒";
  productCard.appendChild(addToCartIcon);

  const productCardContent = document.createElement("div");
  productCardContent.className = "product-card-content";

  const productTitle = document.createElement("h3");
  productTitle.className = "product-card-title";
  productTitle.textContent = product.name;
  productCardContent.appendChild(productTitle);

  const productType = document.createElement("span");
  productType.className = "product-type";
  productType.textContent = product.type;
  productCardContent.appendChild(productType);

  const productPrice = document.createElement("p");
  productPrice.className = "product-card-price";
  productPrice.textContent = product.price;
  productCardContent.appendChild(productPrice);

  // Create star ratings dynamically based on the product's rating
  const productRating = document.createElement("div");
  productRating.className = "product-rating";
  for (let i = 0; i < product.rating; i++) {
    const starIcon = document.createElement("i");
    starIcon.className = "rate fa-regular fa-star";
    productRating.appendChild(starIcon);
  }
  productCardContent.appendChild(productRating);
  productCard.appendChild(productCardContent);
  return productCard;
}

// Get the container where you want to append product cards
const productContainer = document.getElementById("product-container");
// Loop through the product data and create product cards
products.forEach((product) => {
  const productCard = createProductCard(product);
  productContainer.appendChild(productCard);
});
