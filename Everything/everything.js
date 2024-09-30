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

function changeImage2(imagePath) {
  const image = document.getElementById("image-2");
  image.src = imagePath;
}
function changeImage7(imagePath) {
  const image = document.getElementById("image-7");
  image.src = imagePath;
}
function changeImage10(imagePath) {
  const image = document.getElementById("image-10");
  image.src = imagePath;
}
// --------------------------------------------------------------------------------------

// section-4 cards
// Sample product data
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
    name: "Blue Denim Jeans",
    type: "Women",
    price: "$190.00",
    rating: 5,
    imageSrc: "../images/blue-denim-jeans.jpg",
  },
  {
    name: "Basic Grey Jeans",
    type: "Women",
    price: "$190.00",
    rating: 5,
    imageSrc: "../images/basic-grey-jeans.jpg",
  },
  {
    name: "Blue Denim Shorts",
    type: "Women",
    price: "$190.00",
    rating: 5,
    imageSrc: "../images/blue-denim-shorts.jpg",
  },
  {
    name: "Anchor Bracelet",
    type: "Accessories",
    price: "$190.00",
    rating: 5,
    imageSrc: "../images/anchor-bracelet.jpg",
  },
  {
    name: "Boho Bangle Bracelet",
    type: "Accessories",
    price: "$190.00",
    rating: 5,
    imageSrc: "../images/boho-bangle-bracelet.jpg",
  },
  {
    name: "Light Brown Purse",
    type: "Accessories",
    price: "$190.00",
    rating: 5,
    imageSrc: "../images/light-brown-purse.jpg",
  },
  {
    name: "Bright Blue Bag",
    type: "Accessories",
    price: "$190.00",
    rating: 5,
    imageSrc: "../images/bright-blue-bag.jpg",
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

// -----------------------------------------------------------------------------------

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

// <------------------------------------------------------------------------------------->
