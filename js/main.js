document.addEventListener("DOMContentLoaded", () => {
  // Mobile Nav
  const mobileBtn = document.querySelector(".mobile-toggle");
  const navLinks = document.querySelector(".nav-links");
  const navItems = document.querySelectorAll(".nav-link");

  if (mobileBtn && navLinks) {
    mobileBtn.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
    navItems.forEach(item => {
      item.addEventListener("click", () => navLinks.classList.remove("active"));
    });
  }

  // Sticky Header
  const navbar = document.querySelector(".navbar");
  if (navbar) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) navbar.classList.add("scrolled");
      else navbar.classList.remove("scrolled");
    });
  }

  // Fade Up
  const fadeUpEls = document.querySelectorAll(".fade-up");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  fadeUpEls.forEach(el => observer.observe(el));

  // Projects Filter
  const filterBtns = document.querySelectorAll(".filter-btn");
  const projectCards = document.querySelectorAll(".project-card");
  if (filterBtns.length > 0 && projectCards.length > 0) {
    filterBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        filterBtns.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        const filter = btn.dataset.filter;
        projectCards.forEach(card => {
          if (filter === "all" || card.dataset.category === filter) {
            card.style.display = "block";
          } else {
            card.style.display = "none";
          }
        });
      });
    });
  }

  // Counter
  const counters = document.querySelectorAll(".stat-number[data-target]");
  const counterObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const targetText = el.dataset.target;
        const targetNum = parseInt(targetText.replace(/\D/g, ""));
        const prefix = targetText.includes("₹") ? "₹" : "";
        const suffix = targetText.includes("+") ? "+" : (targetText.includes("%") ? "%" : (targetText.includes("Cr+") ? "Cr+" : ""));
        
        let count = 0;
        const step = Math.ceil(targetNum / 50);
        const update = () => {
          count += step;
          if (count < targetNum) {
            el.innerText = prefix + count + suffix;
            requestAnimationFrame(update);
          } else {
            el.innerText = targetText;
          }
        };
        update();
        counterObserver.unobserve(el);
      }
    });
  }, { threshold: 0.5 });
  counters.forEach(c => counterObserver.observe(c));

  // Validations
  const form = document.getElementById("contact-form");
  const msg = document.getElementById("form-message");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      if (name && email) {
        form.reset();
        msg.style.display = "block";
        setTimeout(() => msg.style.display = "none", 4000);
      }
    });
  }

  // Back to top
  const btt = document.getElementById("back-to-top");
  if (btt) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) btt.classList.add("visible");
      else btt.classList.remove("visible");
    });
    btt.addEventListener("click", () => window.scrollTo({top: 0, behavior: "smooth"}));
  }
});
