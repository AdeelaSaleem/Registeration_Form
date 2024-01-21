document.addEventListener("DOMContentLoaded", function () {
    const registerLink = document.querySelector(".login-link a");
    const loginFormBox = document.querySelector(".register");
    const registerFormBox = document.querySelector(".form-box.register");
  
    registerLink.addEventListener("click", function (event) {
      event.preventDefault();
      loginFormBox.classList.toggle("show");
      registerFormBox.classList.toggle("show");
    });
  
    const loginLink = document.querySelector(".register-link a");
  
    loginLink.addEventListener("click", function (event) {
      event.preventDefault();
      registerFormBox.classList.toggle("show");
      loginFormBox.classList.toggle("show");
    });
  });
  