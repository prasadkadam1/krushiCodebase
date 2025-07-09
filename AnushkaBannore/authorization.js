    document.addEventListener("DOMContentLoaded", () => {
      if (localStorage.getItem("loggedIn") !== "true") {
        window.location.href = "login.html";
      }

      const savedRole = localStorage.getItem("userRole");
      if (savedRole) {
        document.getElementById("role-info").innerText = `Welcome back, ${savedRole}!`;
      }
    });

    function logout() {
      localStorage.removeItem("loggedIn");
      localStorage.removeItem("userRole");
      window.location.href = "login.html";
    }

    function showRoleInfo() {
      const role = document.getElementById("role").value;
      const infoBox = document.getElementById("role-info");
      let text = "";

      switch (role) {
        case "farmer":
          text = "As a Farmer, you can explore schemes, apply, and receive updates.";
          break;
        case "officer":
          text = "As a Government Officer, you can review applications and update records.";
          break;
        case "admin":
          text = "As an Admin, you can manage content, users, and system-wide reports.";
          break;
        default:
          text = "";
      }

      if (text) {
        localStorage.setItem("userRole", role);
        infoBox.innerText = text;
      } else {
        infoBox.innerText = "";
      }
    } 