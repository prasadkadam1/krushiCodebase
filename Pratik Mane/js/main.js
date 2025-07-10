const toggler = document.getElementById("navToggler");
const navList = document.querySelector(".nav__list");

toggler.addEventListener("click", () => {
  toggler.classList.toggle("is-active");
  navList.classList.toggle("show");
});

function refreshData() {
  const button = document.querySelector(".refresh-btn");
  button.textContent = "⏳ Refreshing...";

  // Simulate data refresh
  setTimeout(() => {
    button.textContent = "🔄 Refresh";

    // Animate progress bars
    const progressBars = document.querySelectorAll(".progress-fill");
    progressBars.forEach((bar) => {
      const currentWidth = bar.style.width;
      bar.style.width = "0%";
      setTimeout(() => {
        bar.style.width = currentWidth;
      }, 100);
    });
  }, 2000);
}
