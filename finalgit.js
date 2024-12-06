"use strict";

// Light and dark themes loaded
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const currentTheme = localStorage.getItem('theme') || 'light';
  if (currentTheme === 'dark') {
    document.body.classList.add('dark-mode');
    themeIcon.classList.remove('fa-sun');
    themeIcon.classList.add('fa-moon');
    }
    themeToggle.addEventListener('click', function() {
      document.body.classList.toggle('dark-mode');
      if (document.body.classList.contains('dark-mode')) {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon')
        localStorage.setItem('theme', 'dark');
      } else {
        themeIcon.classList.remove('fa-moon');themeIcon.classList.add('fa-sun');
        localStorage.setItem('theme', 'light');
      }
    });
// Navbar open and close menu
const toggleButton = document.getElementById("toggle-button");
const menu = document.getElementById("menu");toggleButton.addEventListener("click", function() {
  menu.classList.toggle("collapsed");
});
// Works img grayscale transition
const images = document.querySelectorAll("#works img");
images.forEach(img => {
  img.addEventListener("mouseenter", function() {
    this.style.filter = "grayscale(100%)"; // Apply grayscale filter
    });
    img.addEventListener("mouseleave", function() {
      this.style.filter = "none"; // Remove grayscale filter
      });
    });
// Sweepstakes game functionality
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function Sweepstake() {
  let dieDisplay1 = document.getElementById("random1");
  let dieDisplay2 = document.getElementById("random2");
  let gameMessage = document.getElementById("sweepstakeMsg");
  let die1 = getRandomNumber(1, 10);
  let die2 = getRandomNumber(1, 10);
  dieDisplay1.innerHTML = die1;
  dieDisplay2.innerHTML = die2;
  if (die1 === die2) {
    gameMessage.innerHTML = "Congratulations, you won a custom coffee mug!";
  } else {
    gameMessage.innerHTML = "You Lose. Please try again next month.";
  }
}
document.getElementById("game").addEventListener("click", Sweepstake);
// Contact form
document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault();
  let fullName = document.getElementById("fullName").value;
  let phoneNumber = document.getElementById("phoneNumber").value;
  let emailAddress = document.getElementById("emailAddress").value;
  let comments = document.getElementById("comments").value;
  let contactPreference = document.querySelector('input[name="contactPreference"]:checked');
  let nameError = document.getElementById("nameError");
  let phoneError = document.getElementById("phoneError");
  let emailError = document.getElementById("emailError");
  let commentsError = document.getElementById("commentsError");
  let contactPreferenceError = document.getElementById("contactPreferenceError");
  let valid = true;
// Name validation
if (fullName.trim() === "") {
  nameError.textContent = "Full name is required.";
  valid = false;
} else {
  nameError.textContent = "";
}
// Phone validation
let phonePattern = /^\d{10}$/;
if (contactPreference && contactPreference.value === "phone" && !phonePattern.test(phoneNumber)) {
  phoneError.textContent = "Valid phone number is required.";
  valid = false;
} else {
  phoneError.textContent = "";
}
// Email validation
let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
if (contactPreference && contactPreference.value === "email" && !emailPattern.test(emailAddress)) {
  emailError.textContent = "Valid email address is required.";
  valid = false;
} else {
  emailError.textContent = "";
}
// Comments validation
if (comments.trim() === "") {
  commentsError.textContent = "Comments are required.";
  valid = false;
} else {
  commentsError.textContent = "";
}
// Contact Preference validation
if (!contactPreference) {
  contactPreferenceError.textContent = "Contact preference is required.";
  valid = false;
} else {
  contactPreferenceError.textContent = "";
}
if (valid) {
  let customer = {
    fullName: fullName,
    phoneNumber: phoneNumber,
    emailAddress: emailAddress,
    comments: comments,
    contactPreference: contactPreference.value
  };
  document.getElementById("submissionMessage").textContent = `Thank you, ${customer.fullName}, for your submission. We will contact you via ${customer.contactPreference}.`;
  document.getElementById("contactForm").reset();
}
});

//JS for part two of GIT418
// Owl carousel for works section
$(document).ready(function(){
  $("#slider").owlCarousel({
    margin: 10,
    loop: true, // loops images when the end is reached
    autoplay: true, // autoplay the slides through the carousel
    autoplayTimeout: 2000, // sets movement to 2 seconds
    autoplayHoverPause: false,
    items: 5  // number of items appearing in the carousel
    });
  });

// Storing User information
document.addEventListener('DOMContentLoaded', (event) => {
  // Check if there's a stored name and display it
  const storedName = localStorage.getItem('userName');
  if (storedName) {
      document.getElementById('displayUserName').textContent = `Welcome back, ${storedName}!`;
  }

  // Form submission event
  document.getElementById('userForm').addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent the default form submission

      const name = document.getElementById('name').value; // Get the user input
      if (name) {
          localStorage.setItem('userName', name); // Store the name in localStorage
          document.getElementById('displayUserName').textContent = `Welcome, ${name}!`; // Display the name
          document.getElementById('name').value = ''; // Clear the input field
      }
  });
});

// API Content
document.getElementById('fetchCatFact').addEventListener('click', function() {
  fetch('https://catfact.ninja/fact')
      .then(response => {
          if (!response.ok) {
              throw new Error('Network response was not ok ' + response.statusText);
          }
          return response.json();
      })
      .then(data => {
          const catFactDisplay = document.getElementById('catFactDisplay');
          catFactDisplay.textContent = data.fact;
      })
      .catch(error => {
          console.error('There was a problem with the fetch operation:', error);
      });
});

