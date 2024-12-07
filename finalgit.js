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
const toggleButton = document.getElementById("toggle-button"); // Get the button that toggles the menu
// Get the menu element
const menu = document.getElementById("menu");toggleButton.addEventListener("click", function() { // Add an event listener to the button that toggles the "collapsed" class on the menu when clicked
  menu.classList.toggle("collapsed"); // Add or remove the "collapsed" class to show or hide the menu
});
// Works img grayscale transition
const images = document.querySelectorAll("#works img");
images.forEach(img => {
  img.addEventListener("mouseenter", function() { // Add event listeners to each image for mouse enter and mouse leave events
    this.style.filter = "grayscale(100%)"; // Apply grayscale filter
    });
    img.addEventListener("mouseleave", function() {
      this.style.filter = "none"; // Remove grayscale filter
      });
    });
// Sweepstakes game functionality
// Function to generate a random number between a given range (inclusive)
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
// Function to handle the sweepstake game logic
function Sweepstake() {
  let dieDisplay1 = document.getElementById("random1"); // Get the element for the first die display
  let dieDisplay2 = document.getElementById("random2"); // Get the element for the second die display
  let gameMessage = document.getElementById("sweepstakeMsg"); // Get the element for the game message display
  // Roll two dice and get their values
  let die1 = getRandomNumber(1, 10);
  let die2 = getRandomNumber(1, 10);
  // Display the results of the dice rolls
  dieDisplay1.innerHTML = die1;
  dieDisplay2.innerHTML = die2;
  // Check if the two dice show the same number (win condition)
  if (die1 === die2) {
    gameMessage.innerHTML = "Congratulations, you won a custom coffee mug!";
  } else {
    // Display a losing message if the dice don't match
    gameMessage.innerHTML = "You Lose. Please try again next month.";
  }
}
// Add an event listener to the "game" element to trigger the sweepstake game when clicked
document.getElementById("game").addEventListener("click", Sweepstake);
// Contact form
// Event listener for the 'contactForm' to trigger on form submission
document.getElementById("contactForm").addEventListener("submit", function(event) {
  // Prevent the default form submission behavior to handle validation with JavaScript
  event.preventDefault();
  // Retrieve input values from the form fields
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
// check if name field is empty or only contains whitespace
if (fullName.trim() === "") {
  // display error message if full name is not provided and set the validation flag to false
  nameError.textContent = "Full name is required.";
  valid = false;
} else {
  // Clear the error message if the full name is provided
  nameError.textContent = "";
}
// Phone validation
// Regular expression pattern for validating a 10-digit phone number
let phonePattern = /^\d{10}$/;
// Check if the contact preference is 'phone' and if the provided phone number is valid
if (contactPreference && contactPreference.value === "phone" && !phonePattern.test(phoneNumber)) {
  // If the phone number is not valid, display an error message and set the validation flag to false
  phoneError.textContent = "Valid phone number is required.";
  valid = false;
} else {
  // Clear the error message if the phone number is valid or not applicable
  phoneError.textContent = "";
}
// Email validation
// regular expression pattern for validation email address format
let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
// check if the contact preference is email and if the provided email is valid
if (contactPreference && contactPreference.value === "email" && !emailPattern.test(emailAddress)) {
  // if email is not valid, display error message and set the validation flag to false
  emailError.textContent = "Valid email address is required.";
  valid = false;
} else {
  // clear error message if the email is valid or not applicable
  emailError.textContent = "";
}
// Comments validation
// check if the comments field is empty or only contains whitespace
if (comments.trim() === "") {
  // display an error message is comments are required but not provided
  commentsError.textContent = "Comments are required.";
  valid = false;
} else {
  // clear error message if comments are provided
  commentsError.textContent = "";
}
// Contact Preference validation
if (!contactPreference) { //if no contact preference is selected, display error
  contactPreferenceError.textContent = "Contact preference is required.";
  // set the validation flag to false to prevent form submission
  valid = false;
} else {
  // clear any existing error message if contact preference is selected 
  contactPreferenceError.textContent = "";
}
if (valid) { // if all validations pass proceed with form submission
  let customer = { // create a customer object to store form data
    fullName: fullName, // store full name from the form
    phoneNumber: phoneNumber, // store phone number from the form
    emailAddress: emailAddress, // store email from the form
    comments: comments, //store any comments entered in the form
    contactPreference: contactPreference.value // store the selected contact preference
  };
  // display a personalized thank you message to the user
  document.getElementById("submissionMessage").textContent = `Thank you, ${customer.fullName}, for your submission. We will contact you via ${customer.contactPreference}.`;
  // resets the form to clear all fields for a fresh start
  document.getElementById("contactForm").reset();
}
});

//JS for part two of GIT418
// Owl carousel for works section
$(document).ready(function(){
  $("#slider").owlCarousel({
    margin: 10, // margin of 10 all sides of carousel
    loop: true, // loops images when the end is reached
    autoplay: true, // autoplay the slides through the carousel
    autoplayTimeout: 2000, // sets movement to 2 seconds
    autoplayHoverPause: false, // does not stops autoplay when hovering over the carousel 
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

// Ajax Content
document.getElementById('fetchCatFact').addEventListener('click', function() {
  fetch('https://catfact.ninja/fact') // Fetch the endpoint for the cat fact
      .then(response => {
        // check if the response is ok
          if (!response.ok) {
            // Throw error if response is not ok
              throw new Error('Network response was not ok ' + response.statusText);
          }
          return response.json(); // parse the response as JSON and return it
      })
      .then(data => {
        // select the element with ID 'catFactDisplay' to show the cat fact
          const catFactDisplay = document.getElementById('catFactDisplay');
          // update the text content of the element with the fetched fact
          catFactDisplay.textContent = data.fact;
      })
      .catch(error => {
        // log error to the console if there's an issue with the fetch operation
          console.error('There was a problem with the fetch operation:', error);
      });
});

