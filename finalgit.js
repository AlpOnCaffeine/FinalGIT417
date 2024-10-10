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
