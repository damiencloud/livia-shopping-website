/* ============================================================
   Livia Fashion — Multipage interactivity
   ============================================================ */

(function () {
  // ---------- Mark active nav link ----------
  function markActive() {
    var path = (location.pathname.split("/").pop() || "index.html").toLowerCase();
    if (path === "" || path === "/") path = "index.html";
    document.querySelectorAll(".js-nav-link").forEach(function (el) {
      var href = (el.getAttribute("href") || "").toLowerCase();
      if (href === path) el.classList.add("is-active");
    });
  }

  // ---------- Sticky nav shadow on scroll ----------
  function stickyNav() {
    var nav = document.querySelector(".js-nav");
    if (!nav) return;
    function onScroll() {
      if (window.scrollY > 12) nav.classList.add("is-scrolled");
      else nav.classList.remove("is-scrolled");
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  // ---------- Mobile drawer ----------
  function mobileDrawer() {
    var toggle = document.querySelector(".js-menu-toggle");
    var drawer = document.querySelector(".js-mobile-drawer");
    if (!toggle || !drawer) return;
    function close() {
      toggle.classList.remove("is-open");
      drawer.classList.remove("is-open");
      document.body.style.overflow = "";
    }
    function open() {
      toggle.classList.add("is-open");
      drawer.classList.add("is-open");
      document.body.style.overflow = "hidden";
    }
    toggle.addEventListener("click", function () {
      if (drawer.classList.contains("is-open")) close();
      else open();
    });
    drawer.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", close);
    });
  }

  // ---------- Reveal on scroll ----------
  function reveals() {
    var nodes = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      nodes.forEach(function (n) { n.classList.add("in-view"); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    nodes.forEach(function (n) { io.observe(n); });
  }

  // ---------- Toast ----------
  function toast(message) {
    var el = document.querySelector(".js-toast");
    if (!el) {
      el = document.createElement("div");
      el.className = "toast js-toast";
      el.innerHTML = '<span class="check">✓</span><span class="msg"></span>';
      document.body.appendChild(el);
    }
    el.querySelector(".msg").textContent = message;
    el.classList.add("is-show");
    clearTimeout(window.__liviaToastTimer);
    window.__liviaToastTimer = setTimeout(function () {
      el.classList.remove("is-show");
    }, 2800);
  }

  // ---------- Forms ----------
  function forms() {
    document.querySelectorAll(".js-contact-form").forEach(function (f) {
      f.addEventListener("submit", function (e) {
        e.preventDefault();
        var name = (f.querySelector("[name=name]") || {}).value || "there";
        toast("Thanks " + name.split(" ")[0] + " — we'll be in touch soon.");
        f.reset();
      });
    });
    document.querySelectorAll(".js-newsletter").forEach(function (f) {
      f.addEventListener("submit", function (e) {
        e.preventDefault();
        toast("You're on the list. Welcome to Livia.");
        f.reset();
      });
    });
  }

  // ---------- Add-to-cart toast ----------
  function quickAdd() {
    document.querySelectorAll(".js-add").forEach(function (b) {
      b.addEventListener("click", function () {
        var name = b.getAttribute("data-name") || "Item";
        toast("Added: " + name);
        // bump cart badge
        var badge = document.querySelector(".cart-badge");
        if (badge) {
          var current = parseInt(badge.getAttribute("data-count") || "0", 10) + 1;
          badge.setAttribute("data-count", String(current));
          badge.style.setProperty("--c", current);
        }
      });
    });
  }

  // ---------- Filter chips (shop page) ----------
  function filters() {
    var chips = document.querySelectorAll(".js-filter");
    if (!chips.length) return;
    chips.forEach(function (chip) {
      chip.addEventListener("click", function () {
        chips.forEach(function (c) { c.classList.remove("is-active"); });
        chip.classList.add("is-active");
        var f = chip.getAttribute("data-filter");
        document.querySelectorAll(".js-product").forEach(function (p) {
          var cat = p.getAttribute("data-cat");
          if (f === "all" || cat === f) {
            p.style.display = "";
            p.classList.remove("in-view");
            requestAnimationFrame(function () { p.classList.add("in-view"); });
          } else {
            p.style.display = "none";
          }
        });
      });
    });
  }

  // ---------- Smooth anchor offset ----------
  function smoothAnchors() {
    document.querySelectorAll('a[href^="#"]').forEach(function (a) {
      a.addEventListener("click", function (e) {
        var id = a.getAttribute("href").slice(1);
        if (!id) return;
        var t = document.getElementById(id);
        if (!t) return;
        e.preventDefault();
        var y = t.getBoundingClientRect().top + window.scrollY - 84;
        window.scrollTo({ top: y, behavior: "smooth" });
      });
    });
  }

  // ---------- Init ----------
  document.addEventListener("DOMContentLoaded", function () {
    document.body.classList.add("is-loaded");
    markActive();
    stickyNav();
    mobileDrawer();
    reveals();
    forms();
    quickAdd();
    filters();
    smoothAnchors();
  });
})();
