// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", function () {
  // Select all navigation links
  const navLinks = document.querySelectorAll("nav ul li a");

  navLinks.forEach(link => {
    link.addEventListener("click", function () {
      // Remove the active class from all links
      navLinks.forEach(nav => nav.classList.remove("active"));
      // Add the active class to the clicked link
      this.classList.add("active");
    });
  });
});
