        // Get the modal
        var modal = document.getElementById('id01');

        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }

        // slide show
       

        // Animated Counters
  document.addEventListener('DOMContentLoaded', () => {
  animateCount('viewers', 90000000, 2000);
  animateCount('entrepreneurs', 320, 1500);
  animateCount('videos', 6000, 1500);
  animateCount('languages', 110, 1500);
});

function animateCount(id, target, duration) {
  const element = document.getElementById(id);
  let start = 0;
  const increment = target / (duration / 16);

  function update() {
    start += increment;
    if (start < target) {
      element.textContent = Math.floor(start).toLocaleString();
      requestAnimationFrame(update);
    } else {
      element.textContent = target.toLocaleString();
    }
  }
  update();
}

// Collapsible Sections
const collapsibles = document.querySelectorAll('.collapsible');
collapsibles.forEach(btn => {
  btn.addEventListener('click', function() {
    this.classList.toggle('active');
    const content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
      content.style.padding = "0 1em";
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
      content.style.padding = "1em";
    }
  });
});