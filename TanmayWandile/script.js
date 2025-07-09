// Mobile Menu Toggle
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuToggle.innerHTML = navLinks.classList.contains('active') ? 
        '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
    });
});

// Header scroll effect
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Create floating leaves
const floatingLeaves = document.getElementById('floatingLeaves');
const leafCount = 15;
const leafTypes = 3;

for (let i = 0; i < leafCount; i++) {
    const leaf = document.createElement('div');
    leaf.className = 'leaf';
    
    // Random leaf type
    const leafType = Math.floor(Math.random() * leafTypes) + 1;
    leaf.style.backgroundImage = `url('https://cdn-icons-png.flaticon.com/512/3069/3069172.png')`;
    
    // Random size
    const size = Math.random() * 30 + 20;
    leaf.style.width = `${size}px`;
    leaf.style.height = `${size}px`;
    
    // Random position
    leaf.style.left = `${Math.random() * 100}%`;
    leaf.style.top = `${Math.random() * 100}%`;
    
    // Random animation duration and delay
    const duration = Math.random() * 10 + 10;
    const delay = Math.random() * 5;
    leaf.style.animationDuration = `${duration}s`;
    leaf.style.animationDelay = `${delay}s`;
    
    floatingLeaves.appendChild(leaf);
}

// Animate stats counters
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    const speed = 200;
    
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target') || 
            (counter.id === 'farmersCount' ? 1250 : 
             counter.id === 'acresCount' ? 8500 : 
             counter.id === 'yieldCount' ? 35 : 
             counter.id === 'waterCount' ? 60 : 0));
        const count = parseInt(counter.innerText);
        const increment = target / speed;
        
        if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(animateCounters, 1);
        } else {
            counter.innerText = target + (counter.id === 'yieldCount' || counter.id === 'waterCount' ? '%' : '+');
        }
    });
}

// Testimonial slider
let currentSlide = 0;
const slides = document.querySelectorAll('.testimonial-slide');
const dots = document.querySelectorAll('.slider-dot');

function showSlide(n) {
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
}

dots.forEach(dot => {
    dot.addEventListener('click', () => {
        showSlide(parseInt(dot.getAttribute('data-slide')));
    });
});

// Auto slide change
setInterval(() => {
    showSlide(currentSlide + 1);
}, 5000);

// Animate elements on scroll
function animateOnScroll() {
    const featureCards = document.querySelectorAll('.feature-card');
    const productCards = document.querySelectorAll('.product-card');
    
    featureCards.forEach((card, index) => {
        const cardPosition = card.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (cardPosition < screenPosition) {
            setTimeout(() => {
                card.classList.add('animate');
            }, index * 200);
        }
    });
    
    productCards.forEach((card, index) => {
        const cardPosition = card.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (cardPosition < screenPosition) {
            setTimeout(() => {
                card.classList.add('animate');
                if (index === 0) animateCounters();
                if (index === 0) showSlide(0);
                if (index === 0) {
                    document.querySelectorAll('.leaf').forEach(leaf => {
                        leaf.style.animationPlayState = 'running';
                    });
                }
            }, index * 100);
        }
    });
}

// Initialize animations
window.addEventListener('load', () => {
    document.querySelectorAll('.leaf').forEach(leaf => {
        leaf.style.animationPlayState = 'paused';
    });
});

window.addEventListener('scroll', animateOnScroll);
animateOnScroll(); // Run once on load to check visible elements