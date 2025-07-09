






// Wait until DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');
  
  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('open');
  });
});



//handle nav buttons
function handleNav(action) {
  const routes = {
    home: ''
    // register: '/register.html',
    // track: '/track.html',
    // docs: '/documents.html',
    // news: '/news.html'
  };
  window.location.href = routes[action] || '#';
}



// Handles card clicks and redirects
function handleCard(action) {
  const routes = {
    register: '/register.html',
    track: '/track.html',
    docs: '/documents.html',
    news: '/news.html'
  };
  window.location.href = routes[action] || '#';
}




let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    if (i === index) slide.classList.add('active');
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}


//Auto slide every 3 sec
setInterval(nextSlide,3000);


//show the 1st img on page load
showSlide(currentSlide);





//small images
// Reveal images on scroll
document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".gallery-img");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in");
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });

  images.forEach(img => observer.observe(img));
});






//last container image
document.addEventListener('DOMContentLoaded',()=>{
  const textBox=
  document.querySelector('.text-box');

const observer=new IntersectionObserver(
  (entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add('show');
         entry.target.classList.remove('hidden');
      }
    });
  },
  {threshold:0.4}
);
observer.observe('textBox');
})

