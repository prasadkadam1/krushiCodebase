    document.addEventListener("DOMContentLoaded", () => {
      if (localStorage.getItem("loggedIn") !== "true") {
        window.location.href = "login.html";
      }

      // Animate cards one after another
      const cards = document.querySelectorAll('.card');
      cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.2}s`;
      });
    });

    function logout() {
      localStorage.removeItem("loggedIn");
      window.location.href = "login.html";
    }