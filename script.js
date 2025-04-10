// Handle window resize
window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// GSAP Animations
document.addEventListener("DOMContentLoaded", () => {
  // Animate hero title words
  gsap.to(".title-word-1", {
    opacity: 1,
    y: 0,
    duration: 0.8,
    delay: 0.2,
    ease: "power3.out",
  });

  gsap.to(".title-word-2", {
    opacity: 1,
    y: 0,
    duration: 0.8,
    delay: 0.4,
    ease: "power3.out",
  });

  gsap.to(".title-word-3", {
    opacity: 1,
    y: 0,
    duration: 0.8,
    delay: 0.6,
    ease: "power3.out",
  });

  gsap.to(".title-word-4", {
    opacity: 1,
    y: 0,
    duration: 0.8,
    delay: 0.8,
    ease: "power3.out",
  });

  // Animate hero subtitle and text
  gsap.to(".hero-subtitle", {
    opacity: 1,
    y: 0,
    duration: 0.8,
    delay: 1.2,
    ease: "power3.out",
  });

  gsap.to(".hero-text", {
    opacity: 1,
    y: 0,
    duration: 0.8,
    delay: 1.4,
    ease: "power3.out",
  });

  // Animate hero buttons
  gsap.to(".hero-buttons", {
    opacity: 1,
    y: 0,
    duration: 0.8,
    delay: 1.6,
    ease: "power3.out",
  });

  // Animate skill bars
  document.querySelectorAll(".skill-item").forEach((item) => {
    const percent = item.getAttribute("data-percent");
    const bar = item.querySelector(".skill-bar");

    gsap.to(bar, {
      width: `${percent}%`,
      duration: 1.5,
      delay: 0.5,
      ease: "power3.out",
      scrollTrigger: {
        trigger: item,
        start: "top 80%",
      },
    });
  });

  // Animate stats
  document.querySelectorAll(".stat-item").forEach((item) => {
    const target = parseInt(item.getAttribute("data-count"));
    let count = 0;

    const interval = setInterval(() => {
      if (count >= target) {
        clearInterval(interval);
        return;
      }
      count++;
      item.textContent = count;
    }, 20);
  });

  initHeaderScroll();
  initTypingAnimation();
});

// Typing Animation Functionality
function initTypingAnimation() {
  const text = "Hello, I'm Alex Carter";
  const typingElement = document.getElementById("typing-text");
  const cursor = document.querySelector(".cursor");
  let i = 0;

  function typeWriter() {
    if (i < text.length) {
      typingElement.innerHTML += text.charAt(i);
      i++;
      setTimeout(typeWriter, 100);
    } else {
      // Animation complete - start cursor blink
      cursor.style.animation = "blink 0.8s infinite";

      // After display, initiate the 3D portrait animation
      init3DPortrait();

      // Animate the rest of the hero content
      gsap.to(".hero-subtitle", {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
      });

      gsap.to(".hero-text", {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: 0.3,
        ease: "power3.out",
      });

      gsap.to(".hero-buttons", {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: 0.6,
        ease: "power3.out",
      });
    }
  }

  // Start the typing animation
  typeWriter();
}
function initHeaderScroll() {
  const header = document.querySelector(".fixed-header");
  const scrollPosition = window.scrollY;

  window.addEventListener("scroll", () => {
    const currentScroll = window.scrollY;

    if (currentScroll > 100) {
      header.classList.add("header-scrolled");
    } else {
      header.classList.remove("header-scrolled");
    }
  });
}
document.getElementById("contactForm").addEventListener("submit", function (e) {
  // Get form values
  const name = this.elements["name"].value;
  const email = this.elements["email"].value;
  const subject = this.elements["subject"].value;
  const message = this.elements["message"].value;

  // Create Gmail link (ONLY VALUES, NO LABELS)
  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=jerywinbayawan23@gmail.com&su=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(`${message}`)}`;

  // Open Gmail in new tab
  window.open(gmailUrl, "_blank");

  // Continue with normal form submission
  return true;
});

