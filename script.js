// MOBILE MENU

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});


// EMAILJS INITIALIZATION

emailjs.init("Yp9blRr1lEYqIeal9");


// CONTACT FORM

const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", function(event) {

  event.preventDefault();

  emailjs.sendForm(
    "service_xq52kte",
    "template_fxgs6za",
    this
  )

  .then(function() {

    alert("Message Sent Successfully!");

    contactForm.reset();

  })

  .catch(function(error) {

    alert("Failed to send message!");

    console.log(error);

  });

});