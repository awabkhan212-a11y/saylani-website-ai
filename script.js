// Initialize AOS
AOS.init();

// ------------------------
// COUNTER ANIMATION
// ------------------------
const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
  counter.innerText = '0';
  const updateCounter = () => {
    const target = +counter.getAttribute('data-target');
    const count = +counter.innerText;
    const increment = target / 200;

    if (count < target) {
      counter.innerText = Math.ceil(count + increment);
      setTimeout(updateCounter, 10);
    } else {
      counter.innerText = target;
    }
  };
  updateCounter();
});

// ------------------------
// REGISTRATION FORM (GOOGLE SCRIPT)
// ------------------------
const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxtz5w9JUkoYkMj7dbij_k8-0B11-_iP9vxzTm63sxxylrlGIHi_y2qRt1pTOHLkh9Qlw/exec";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("registrationForm");
  const message = document.getElementById("formMessage");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    message.style.color = "black";
    message.textContent = "Submitting...";

    const formData = new FormData(form);

    try {
      const response = await fetch(SCRIPT_URL, {
        method: "POST",
        body: formData
      });

      const text = await response.text();

      if (text.toLowerCase().includes("success")) {
        message.style.color = "green";
        message.textContent = "Registration successful!";
        form.reset();
      } else {
        throw new Error(text);
      }

    } catch (error) {
      message.style.color = "red";
      message.textContent = "Submission failed. Please try again.";
      console.error(error);
    }
  });
});
