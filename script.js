document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.querySelector(".hamburger");
    const navMobile = document.querySelector(".nav-mobile");
    const navLinks = document.querySelectorAll(".nav-mobile ul li a");
  
    hamburger.addEventListener("click", () => {
      navMobile.classList.toggle("open");
      hamburger.classList.toggle("open");
    });
  
    navLinks.forEach(link => {
      link.addEventListener("click", () => {
        navMobile.classList.remove("open");
        hamburger.classList.remove("open");
      });
    });
  });