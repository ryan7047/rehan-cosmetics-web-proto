// ─── App Initialization ───
document.addEventListener("DOMContentLoaded", () => {
  const router = new Router();

  // Register routes
  router
    .on("/", () => renderHomePage())
    .on("/products", () => renderProductsPage())
    .on("/product/:id", (params) => renderProductDetailPage(params));

  // Mobile menu toggle
  const navToggle = document.getElementById("nav-toggle");
  const mobileOverlay = document.getElementById("mobile-menu-overlay");
  const body = document.body;

  if (navToggle && mobileOverlay) {
    navToggle.addEventListener("click", () => {
      navToggle.classList.toggle("open");
      mobileOverlay.classList.toggle("open");
      body.classList.toggle("menu-open");
    });

    // Close mobile menu on link click
    mobileOverlay.querySelectorAll(".mobile-nav-link").forEach((link) => {
      link.addEventListener("click", () => {
        navToggle.classList.remove("open");
        mobileOverlay.classList.remove("open");
        body.classList.remove("menu-open");
      });
    });
  }

  // Navbar scroll effect
  const navbar = document.getElementById("main-nav");
  let lastScroll = 0;

  window.addEventListener("scroll", () => {
    const currentScroll = window.scrollY;

    if (currentScroll > 60) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }

    if (currentScroll > lastScroll && currentScroll > 300) {
      navbar.classList.add("hidden");
    } else {
      navbar.classList.remove("hidden");
    }

    lastScroll = currentScroll;
  });
});
