// ========================
// 🎉 Part 1: Event Handling
// ========================

// Click event
document.getElementById("clickMeBtn").addEventListener("click", function () {
  document.getElementById("clickMessage").textContent = "🎉 Button was clicked!";
});

// Mouseover + keyup events
const hoverInput = document.getElementById("hoverInput");
hoverInput.addEventListener("mouseover", () => {
  document.getElementById("hoverMessage").textContent = "You hovered over the input!";
});
hoverInput.addEventListener("keyup", () => {
  document.getElementById("hoverMessage").textContent = "You typed: " + hoverInput.value;
});

// ========================
// 🎮 Part 2: Interactive Elements
// ========================

// Light/Dark Mode Toggle
document.getElementById("toggleThemeBtn").addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
});

// Counter
let counter = 0;
document.getElementById("increaseBtn").addEventListener("click", () => {
  counter++;
  document.getElementById("counterValue").textContent = counter;
});
document.getElementById("decreaseBtn").addEventListener("click", () => {
  counter--;
  document.getElementById("counterValue").textContent = counter;
});

// Collapsible FAQ
const faq = document.querySelector(".faq");
faq.querySelector(".faq-question").addEventListener("click", () => {
  faq.classList.toggle("open");
});

// ========================
// 📋✅ Part 3: Form Validation
// ========================
document.getElementById("signupForm").addEventListener("submit", function (e) {
  e.preventDefault(); // prevent page reload
  let valid = true;

  // Name validation
  const name = document.getElementById("name").value.trim();
  if (name.length < 3) {
    document.getElementById("nameError").textContent = "Name must be at least 3 characters.";
    valid = false;
  } else {
    document.getElementById("nameError").textContent = "";
  }

  // Email validation
  const email = document.getElementById("email").value.trim();
  const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
  if (!emailRegex.test(email)) {
    document.getElementById("emailError").textContent = "Enter a valid email address.";
    valid = false;
  } else {
    document.getElementById("emailError").textContent = "";
  }

  // Password validation
  const password = document.getElementById("password").value;
  if (password.length < 6) {
    document.getElementById("passwordError").textContent = "Password must be at least 6 characters.";
    valid = false;
  } else {
    document.getElementById("passwordError").textContent = "";
  }

  // Success message
  if (valid) {
    document.getElementById("formSuccess").textContent = "✅ Form submitted successfully!";
    document.getElementById("signupForm").reset();
  } else {
    document.getElementById("formSuccess").textContent = "";
  }
});
