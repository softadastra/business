// header.js : toggle mobile menu, dropdowns, language menu, accessibility
(function () {
  const toggle = document.getElementById("menuToggle");
  const mainNav = document.getElementById("mainNav");

  // safety: if not present, no-op
  if (!toggle || !mainNav) return;

  // open/close mobile menu
  toggle.addEventListener("click", (e) => {
    e.stopPropagation();
    mainNav.classList.toggle("open");
    const expanded = mainNav.classList.contains("open");
    toggle.setAttribute("aria-expanded", expanded ? "true" : "false");
  });

  // dropdown click toggles (works on touch + click)
  document.querySelectorAll("[data-dropdown]").forEach((item) => {
    const btn = item.querySelector(".dropdown-toggle");
    const menu = item.querySelector(".dropdown-menu");
    if (!btn || !menu) return;

    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const opened = item.classList.toggle("show");
      menu.setAttribute("aria-hidden", !opened);
      btn.setAttribute("aria-expanded", opened ? "true" : "false");
    });
  });

  // language switcher
  document.querySelectorAll("[data-lang-switcher]").forEach((sw) => {
    const btn = sw.querySelector(".lang-btn");
    const menu = sw.querySelector(".lang-menu");
    if (!btn || !menu) return;

    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      sw.classList.toggle("open");
      menu.setAttribute("aria-hidden", !sw.classList.contains("open"));
      btn.setAttribute(
        "aria-expanded",
        sw.classList.contains("open") ? "true" : "false"
      );
    });
  });

  // close on outside click
  document.addEventListener("click", (e) => {
    document.querySelectorAll(".nav-item.dropdown.show").forEach((open) => {
      if (!open.contains(e.target)) {
        open.classList.remove("show");
        const btn = open.querySelector(".dropdown-toggle");
        const menu = open.querySelector(".dropdown-menu");
        if (btn) btn.setAttribute("aria-expanded", "false");
        if (menu) menu.setAttribute("aria-hidden", "true");
      }
    });
    document.querySelectorAll("[data-lang-switcher].open").forEach((sw) => {
      sw.classList.remove("open");
      const btn = sw.querySelector(".lang-btn");
      const menu = sw.querySelector(".lang-menu");
      if (btn) btn.setAttribute("aria-expanded", "false");
      if (menu) menu.setAttribute("aria-hidden", "true");
    });
  });

  // ESC to close
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      mainNav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
      document.querySelectorAll(".nav-item.dropdown.show").forEach((open) => {
        open.classList.remove("show");
        const btn = open.querySelector(".dropdown-toggle");
        const menu = open.querySelector(".dropdown-menu");
        if (btn) btn.setAttribute("aria-expanded", "false");
        if (menu) menu.setAttribute("aria-hidden", "true");
      });
      document.querySelectorAll("[data-lang-switcher].open").forEach((sw) => {
        sw.classList.remove("open");
        const btn = sw.querySelector(".lang-btn");
        const menu = sw.querySelector(".lang-menu");
        if (btn) btn.setAttribute("aria-expanded", "false");
        if (menu) menu.setAttribute("aria-hidden", "true");
      });
    }
  });

  // responsive: when resizing to desktop, ensure menu is closed
  window.addEventListener("resize", () => {
    if (window.innerWidth > 900) {
      mainNav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    }
  });
})();
