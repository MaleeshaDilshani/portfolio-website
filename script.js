// Toggle mobile menu
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

//document.getElementById("contact-form").addEventListener("submit", function (e) {
 // e.preventDefault();
  //document.getElementById("form-message").textContent = "Thank you! Your message has been sent.";
  //this.reset();
//});

const themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  themeToggle.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
  localStorage.setItem("theme", document.body.classList.contains("dark") ? "dark" : "light");
});

window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark");
    themeToggle.textContent = "☀️";
  } 
  // 📧 EmailJS contact form logic
document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs.sendForm("service_5sllpd8", "template_oiele64", this)
    .then(() => {
      document.getElementById("form-message").textContent = "Thank you! Your message has been sent.";
      this.reset();
    }, (error) => {
      document.getElementById("form-message").textContent = "Oops! Something went wrong.";
      console.error("EmailJS Error:", error);
    });
});
});
