document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("loggedIn") !== "true") {
    window.location.href = "login.html";
  }

  const form = document.querySelector(".contact-form");
  const successMsg = document.getElementById("success-msg");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = form.querySelector("#name").value.trim();
    const email = form.querySelector("#email").value.trim();
    const message = form.querySelector("#message").value.trim();

    if (name && email && message) {
      const data = {
        name,
        email,
        message,
        timestamp: new Date().toLocaleString()
      };

      let messages = JSON.parse(localStorage.getItem("contactMessages")) || [];
      messages.push(data);
      localStorage.setItem("contactMessages", JSON.stringify(messages));

      successMsg.style.display = "block";

      setTimeout(() => {
        successMsg.style.display = "none";
      }, 3000); 

      form.reset();
    }
  });
});

function logout() {
  localStorage.removeItem("loggedIn");
  window.location.href = "login.html";
}
