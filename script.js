// Make navbar shadow stronger on scroll
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.style.boxShadow = "0 4px 12px rgba(0,0,0,0.2)";
  } else {
    navbar.style.boxShadow = "0 2px 8px rgba(0,0,0,0.1)";
  }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});

// Just a confirmation log (safe)
console.log("Script.js loaded successfully – Dialogflow OK");



