document.addEventListener('DOMContentLoaded', function () {
  // Mobile navigation toggle
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  const body = document.body;

  if (navToggle) {
    navToggle.addEventListener('click', function () {
      navLinks.classList.toggle('active');
      this.classList.toggle('active');
      body.classList.toggle('nav-open');
    });
  }

  // Resource filtering functionality (only for resources.html)
  if (window.location.pathname.endsWith('resources.html')) {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const resourceCards = document.querySelectorAll('.resource-card');

    if (filterButtons.length > 0 && resourceCards.length > 0) {
      filterButtons.forEach(button => {
        button.addEventListener('click', function () {
          const category = this.getAttribute('data-category');

          // Update active button
          filterButtons.forEach(btn => {
            btn.classList.remove('active');
            // Reset styles for all buttons
            btn.style.background = 'transparent';
            btn.style.color = 'var(--primary-500)';
          });
          // Set active styles for the clicked button
          this.classList.add('active');
          this.style.background = 'var(--primary-500)';
          this.style.color = 'white';

          // Filter cards
          resourceCards.forEach(card => {
            if (category === 'all' || card.classList.contains(category)) {
              card.style.display = 'block';
            } else {
              card.style.display = 'none';
            }
          });
        });
      });

      // Add hover effects to resource cards
      resourceCards.forEach(card => {
        card.addEventListener('mouseenter', function () {
          this.style.transform = 'translateY(-8px)';
          this.style.boxShadow = 'var(--shadow-2xl)';
        });

        card.addEventListener('mouseleave', function () {
          this.style.transform = 'translateY(0)';
          this.style.boxShadow = 'var(--shadow-lg)';
        });
      });
    }
  }
});
