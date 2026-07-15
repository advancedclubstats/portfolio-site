// Starter has no required client JS — the site works fully without it.
// This file is here as a place to add progressive enhancements (reveal-on-
// scroll, small interactions). Everything below is guarded so a missing element
// never throws.

(function () {
  "use strict";

  // Optional reveal-on-scroll: add data-reveal="" to any element to have it
  // fade in as it enters the viewport. Content is visible by default, so this
  // only enhances — nothing hides if JS is off.
  if (!("IntersectionObserver" in window)) return;
  var els = document.querySelectorAll("[data-reveal]");
  if (!els.length) return;

  els.forEach(function (el) { el.classList.add("reveal-init"); });
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        e.target.classList.add("reveal-in");
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.08 });
  els.forEach(function (el) { io.observe(el); });
})();
