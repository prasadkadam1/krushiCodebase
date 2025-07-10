function switchLanguage(lang) {
  localStorage.setItem("language", lang);
  document.querySelectorAll(".lang-text").forEach((el) => {
    el.textContent = el.getAttribute(`data-${lang}`);
  });
}

// On page load, check saved language
window.onload = () => {
  const savedLang = localStorage.getItem("language") || "en";
  switchLanguage(savedLang);
};

//   ====================slide imge ============
const slider = document.querySelector(".slider-wrapper");
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;
let index = 0;

function showSlide(i) {
  slider.style.transform = `translateX(-${i * 100}%)`;
}

function nextSlide() {
  index = (index + 1) % totalSlides;
  showSlide(index);
}

function prevSlide() {
  index = (index - 1 + totalSlides) % totalSlides;
  showSlide(index);
}

// Auto-slide every 4 seconds
setInterval(nextSlide, 3000);

// Manual controls
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
if (nextBtn) nextBtn.addEventListener("click", nextSlide);
if (prevBtn) prevBtn.addEventListener("click", prevSlide);

document.addEventListener("DOMContentLoaded", function () {
  const barItems = document.querySelectorAll(".bar-item");
  const contentDisplay = document.getElementById("contentDisplay");

  // Sample content for each item
  const contents = {
    content1: "This is the content for @ symbol",
    content2: "Sw might stand for Switzerland or something else",
    content3: "ZA could represent South Africa",
    content4: "The @® symbol combination",
    content5: "Information about Merz",
    content6: 'Details about "ten"',
    content7: "Management related content goes here",
  };

  barItems.forEach((item) => {
    // Hover effect
    item.addEventListener("mouseenter", function () {
      const contentKey = this.getAttribute("data-content");
      contentDisplay.textContent = contents[contentKey];
    });

    // Click effect (makes item active)
    item.addEventListener("click", function () {
      barItems.forEach((i) => i.classList.remove("active"));
      this.classList.add("active");
    });
  });

  // Video slider logic: play videos one after another, no manual sliding
  const sliderVideos = document.querySelectorAll(".video-slider .slider-video");
  let currentVideoIndex = 0;
  let videoTimeout;

  function playVideoAtIndex(idx) {
    sliderVideos.forEach((video, i) => {
      video.classList.toggle("active", i === idx);
      video.pause();
      video.currentTime = 0;
    });
    // Try to play and catch errors (autoplay policy)
    const playPromise = sliderVideos[idx].play();
    if (playPromise !== undefined) {
      playPromise.catch((err) => {
        console.warn("Autoplay failed:", err);
        showPlayOverlay();
      });
    }
    clearTimeout(videoTimeout);
    // Remove the timer: only advance on 'ended' event
  }

  function playNextVideo() {
    currentVideoIndex = (currentVideoIndex + 1) % sliderVideos.length;
    playVideoAtIndex(currentVideoIndex);
  }

  function showPlayOverlay() {
    let overlay = document.getElementById("video-play-overlay");
    if (!overlay) {
      overlay = document.createElement("div");
      overlay.id = "video-play-overlay";
      overlay.style.position = "fixed";
      overlay.style.top = 0;
      overlay.style.left = 0;
      overlay.style.width = "100vw";
      overlay.style.height = "100vh";
      overlay.style.background = "rgba(0,0,0,0.6)";
      overlay.style.display = "flex";
      overlay.style.alignItems = "center";
      overlay.style.justifyContent = "center";
      overlay.style.zIndex = 9999;
      overlay.innerHTML =
        '<button style="font-size:2rem;padding:1rem 2rem;border-radius:2rem;background:#43a047;color:#fff;border:none;cursor:pointer;">▶ Play Video</button>';
      document.body.appendChild(overlay);
      overlay.querySelector("button").onclick = function () {
        overlay.remove();
        playVideoAtIndex(currentVideoIndex);
      };
    }
  }

  if (sliderVideos.length > 0) {
    sliderVideos.forEach((video, idx) => {
      video.addEventListener("ended", playNextVideo);
      video.addEventListener("loadeddata", function () {
        if (idx === 0 && currentVideoIndex === 0) {
          playVideoAtIndex(0);
        }
      });
    });
  }
});

// Modern fullscreen image slider logic for .fullscreen-slider
const fullscreenSliderImages = document.querySelectorAll(
  ".fullscreen-slider .slider-image"
);
const fullscreenPrevBtn = document.querySelector(
  ".fullscreen-slider .slider-btn.prev"
);
const fullscreenNextBtn = document.querySelector(
  ".fullscreen-slider .slider-btn.next"
);
let fullscreenSliderIndex = 0;
let fullscreenSliderInterval;

function showFullscreenSliderImage(idx) {
  fullscreenSliderImages.forEach((img, i) => {
    img.classList.toggle("active", i === idx);
  });
}

function nextFullscreenSliderImage() {
  fullscreenSliderIndex =
    (fullscreenSliderIndex + 1) % fullscreenSliderImages.length;
  showFullscreenSliderImage(fullscreenSliderIndex);
}

function prevFullscreenSliderImage() {
  fullscreenSliderIndex =
    (fullscreenSliderIndex - 1 + fullscreenSliderImages.length) %
    fullscreenSliderImages.length;
  showFullscreenSliderImage(fullscreenSliderIndex);
}

function startFullscreenSliderAuto() {
  fullscreenSliderInterval = setInterval(nextFullscreenSliderImage, 3000);
}
function stopFullscreenSliderAuto() {
  clearInterval(fullscreenSliderInterval);
}

if (
  fullscreenPrevBtn &&
  fullscreenNextBtn &&
  fullscreenSliderImages.length > 0
) {
  fullscreenPrevBtn.addEventListener("click", () => {
    prevFullscreenSliderImage();
    stopFullscreenSliderAuto();
    startFullscreenSliderAuto();
  });
  fullscreenNextBtn.addEventListener("click", () => {
    nextFullscreenSliderImage();
    stopFullscreenSliderAuto();
    startFullscreenSliderAuto();
  });
  showFullscreenSliderImage(fullscreenSliderIndex);
  startFullscreenSliderAuto();
}

// Ensure search form is fully functional

document.addEventListener("DOMContentLoaded", function () {
  var searchForm = document.querySelector(".search-form");
  var searchInput = document.querySelector(".search-input");
  if (searchForm && searchInput) {
    searchForm.addEventListener("submit", function (e) {
      e.preventDefault();
      var value = searchInput.value.trim();
      if (value) {
        alert("Searching for: " + value);
        // Replace this with actual search logic or redirect as needed
      } else {
        alert("Please enter a search term.");
      }
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  // LOGIN & SIGNUP LOGIC
  // Elements
  const loginBtn = document.getElementById("loginBtn");
  const loginModal = document.getElementById("loginModal");
  const closeLogin = document.getElementById("closeLogin");
  const loginSection = document.getElementById("login-section");
  const forgotSection = document.getElementById("forgot-section");
  const signupSection = document.getElementById("signup-section");
  const showForgot = document.getElementById("showForgot");
  const showSignup = document.getElementById("showSignup");
  const backToLogin1 = document.getElementById("backToLogin1");
  const backToLogin2 = document.getElementById("backToLogin2");
  const loginForm = document.getElementById("loginForm");
  const signupForm = document.getElementById("signupForm");
  const forgotForm = document.getElementById("forgotForm");
  const otpSection = document.getElementById("otp-section");
  const verifyOtpBtn = document.getElementById("verifyOtpBtn");
  const userProfile = document.getElementById("userProfile");
  const profileName = document.getElementById("profileName");
  const profileEmail = document.getElementById("profileEmail");
  const profilePhone = document.getElementById("profilePhone");
  const logoutBtn = document.getElementById("logoutBtn");

  // Show/hide modal
  if (loginBtn)
    loginBtn.onclick = () => {
      loginModal.style.display = "block";
    };
  if (closeLogin)
    closeLogin.onclick = () => {
      loginModal.style.display = "none";
      resetModal();
    };
  window.onclick = function (event) {
    if (event.target === loginModal) {
      loginModal.style.display = "none";
      resetModal();
    }
  };

  // Switch sections
  if (showForgot)
    showForgot.onclick = (e) => {
      e.preventDefault();
      loginSection.style.display = "none";
      forgotSection.style.display = "block";
    };
  if (showSignup)
    showSignup.onclick = (e) => {
      e.preventDefault();
      loginSection.style.display = "none";
      signupSection.style.display = "block";
    };
  if (backToLogin1)
    backToLogin1.onclick = (e) => {
      e.preventDefault();
      forgotSection.style.display = "none";
      loginSection.style.display = "block";
    };
  if (backToLogin2)
    backToLogin2.onclick = (e) => {
      e.preventDefault();
      signupSection.style.display = "none";
      loginSection.style.display = "block";
    };

  // LocalStorage helpers
  function getUsers() {
    return JSON.parse(localStorage.getItem("users") || "{}");
  }
  function setUsers(users) {
    localStorage.setItem("users", JSON.stringify(users));
  }
  function setCurrentUser(user) {
    localStorage.setItem("currentUser", JSON.stringify(user));
  }
  function getCurrentUser() {
    return JSON.parse(localStorage.getItem("currentUser") || "null");
  }
  function clearCurrentUser() {
    localStorage.removeItem("currentUser");
  }

  // Login
  if (loginForm)
    loginForm.onsubmit = function (e) {
      e.preventDefault();
      const username = loginForm.username.value.trim();
      const password = loginForm.password.value;
      const users = getUsers();
      let found = null;
      for (const key in users) {
        const u = users[key];
        if (
          (u.username === username || u.email === username) &&
          u.password === password
        ) {
          found = u;
          break;
        }
      }
      if (found) {
        setCurrentUser(found);
        showProfile(found);
        loginModal.style.display = "none";
        resetModal();
      } else {
        alert("Invalid username/email or password.");
      }
    };

  // Signup
  if (signupForm)
    signupForm.onsubmit = function (e) {
      e.preventDefault();
      const username = signupForm.username.value.trim();
      const email = signupForm.email.value.trim();
      const phone = signupForm.phone.value.trim();
      const password = signupForm.password.value;
      let users = getUsers();
      for (const key in users) {
        if (users[key].username === username || users[key].email === email) {
          alert("User already exists with this username or email.");
          return;
        }
      }
      const user = { username, email, phone, password };
      users[username] = user;
      setUsers(users);
      alert("Signup successful! You can now login.");
      signupSection.style.display = "none";
      loginSection.style.display = "block";
    };

  // Forgot password (OTP simulation)
  if (forgotForm)
    forgotForm.onsubmit = function (e) {
      e.preventDefault();
      const identifier = forgotForm.identifier.value.trim();
      const users = getUsers();
      let found = null;
      for (const key in users) {
        const u = users[key];
        if (u.email === identifier || u.phone === identifier) {
          found = u;
          break;
        }
      }
      if (found) {
        // Simulate OTP
        const otp = Math.floor(100000 + Math.random() * 900000).toString();
        sessionStorage.setItem("otp", otp);
        sessionStorage.setItem("otpUser", found.username);
        alert("OTP sent: " + otp + " (for demo, check your email/contact)");
        otpSection.style.display = "block";
      } else {
        alert("No user found with this email/contact.");
      }
    };
  if (verifyOtpBtn)
    verifyOtpBtn.onclick = function (e) {
      e.preventDefault();
      const entered = document.getElementById("otp").value.trim();
      const otp = sessionStorage.getItem("otp");
      if (entered === otp) {
        const username = sessionStorage.getItem("otpUser");
        let users = getUsers();
        const newPass = prompt("OTP verified! Enter new password:");
        if (newPass) {
          users[username].password = newPass;
          setUsers(users);
          alert("Password reset successful!");
          forgotSection.style.display = "none";
          loginSection.style.display = "block";
        }
        sessionStorage.removeItem("otp");
        sessionStorage.removeItem("otpUser");
        otpSection.style.display = "none";
      } else {
        alert("Invalid OTP.");
      }
    };

  // Show profile
  function showProfile(user) {
    if (userProfile) {
      profileName.textContent = user.username;
      profileEmail.textContent = user.email;
      profilePhone.textContent = user.phone;
      userProfile.style.display = "block";
    }
    // Optionally, hide login button
    if (loginBtn) loginBtn.style.display = "none";
  }
  // Hide profile
  function hideProfile() {
    if (userProfile) userProfile.style.display = "none";
    if (loginBtn) loginBtn.style.display = "inline-block";
  }
  // Logout
  if (logoutBtn)
    logoutBtn.onclick = function () {
      clearCurrentUser();
      hideProfile();
    };
  // On page load, show profile if logged in
  const currentUser = getCurrentUser();
  if (currentUser) showProfile(currentUser);

  function resetModal() {
    loginSection.style.display = "block";
    forgotSection.style.display = "none";
    signupSection.style.display = "none";
    if (otpSection) otpSection.style.display = "none";
    if (forgotForm) forgotForm.reset();
    if (loginForm) loginForm.reset();
    if (signupForm) signupForm.reset();
  }
});
