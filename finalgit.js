document.addEventListener("DOMContentLoaded", function() {
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
        themeIcon.classList.add('fa-moon');
        localStorage.setItem('theme', 'dark');
      } else {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
        localStorage.setItem('theme', 'light');
      }
    });
  });
  

//navbar open and close menu
document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.getElementById("toggle-button");
    const menu = document.getElementById("menu");

    toggleButton.addEventListener("click", function() {
        menu.classList.toggle("collapsed");
    });
});


//Works img grayscale transition
document.addEventListener("DOMContentLoaded", function() {
  const images = document.querySelectorAll("#works img");

  images.forEach(img => {
      // Add event listener for when the mouse enters the image
      img.addEventListener("mouseenter", function() {
          this.style.filter = "grayscale(100%)"; // Apply grayscale filter
      });

      // Add event listener for when the mouse leaves the image
      img.addEventListener("mouseleave", function() {
          this.style.filter = "none"; // Remove grayscale filter
      });
  });
}); 


//Sweepstakes game functionality
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
  
  if(die1 === die2) {
    gameMessage.innerHTML = "Congratulations, you won a custom coffee mug!";
} else {
    gameMessage.innerHTML = "You Lose. Please try again next month.";
}
}
document.getElementById("game").addEventListener("click", Sweepstake);


//Contact form
document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault();
  
  let fullName = document.getElementById("fullName").value;
  let phoneNumber = document.getElementById("phoneNumber").value;
  let emailAddress = document.getElementById("emailAddress").value;
  let comments = document.getElementById("comments").value;
  let contactPreference = document.querySelector('input[name="contactPreference"]:checked').value;
  
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
  if (contactPreference === "phone" && !phonePattern.test(phoneNumber)) {
      phoneError.textContent = "Valid phone number is required.";
      valid = false;
  } else {
      phoneError.textContent = "";
  }

  // Email validation
  let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (contactPreference === "email" && !emailPattern.test(emailAddress)) {
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

  if (valid) {
      let customer = {
          fullName: fullName,
          phoneNumber: phoneNumber,
          emailAddress: emailAddress,
          comments: comments,
          contactPreference: contactPreference
      };
      
      document.getElementById("submissionMessage").textContent = `Thank you, ${customer.fullName}, for your submission. We will contact you via ${customer.contactPreference}.`;
      document.getElementById("contactForm").reset();
  }
});



