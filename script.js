// ===============================
// ElectroStore JavaScript
// ===============================

// Add to Cart Function
function addToCart(productName) {
    alert(productName + " has been added to your cart!");
}

// Contact Form
const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();

        alert("Thank you! Your message has been sent successfully.");

        contactForm.reset();
    });
}

// Welcome Message (shown only on Home page)
window.onload = function () {
    console.log("Welcome to ElectroStore!");
};