    document.addEventListener("DOMContentLoaded", () => {
      if (localStorage.getItem("loggedIn") === "true") {
        window.location.href = "index.html";
      }
      const form = document.getElementById("loginForm");
      form.addEventListener("submit", function(e) {
        e.preventDefault();
        localStorage.setItem("loggedIn", "true");
        window.location.href = "index.html";
      });
    });