/* Mechatronics Studio — motion behaviours (offline, vanilla JS) */
(function () {
  "use strict";

  var reduced =
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  var revealObserver = null;
  var observed = typeof WeakSet !== "undefined" ? new WeakSet() : null;

  function prefersReduced() {
    return (
      reduced ||
      (window.matchMedia &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches)
    );
  }

  function setStaggerIndices(root) {
    var scopes = (root || document).querySelectorAll(".stagger-children");
    scopes.forEach(function (parent) {
      Array.prototype.forEach.call(parent.children, function (child, i) {
        child.style.setProperty("--i", String(i));
        if (
          !child.classList.contains("reveal") &&
          !child.classList.contains("reveal-up") &&
          !child.classList.contains("reveal-left") &&
          !child.classList.contains("reveal-scale")
        ) {
          child.classList.add("reveal-up");
        }
      });
    });
  }

  function observeReveals(root) {
    var scope = root || document;
    var nodes = scope.querySelectorAll(
      ".reveal, .reveal-up, .reveal-left, .reveal-scale, .diagram"
    );
    if (prefersReduced()) {
      nodes.forEach(function (el) {
        el.classList.add("is-visible");
      });
      return;
    }
    if (!("IntersectionObserver" in window)) {
      nodes.forEach(function (el) {
        el.classList.add("is-visible");
      });
      return;
    }
    if (!revealObserver) {
      revealObserver = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          });
        },
        { root: null, rootMargin: "-8% 0px", threshold: 0.08 }
      );
    }
    nodes.forEach(function (el) {
      if (observed) {
        if (observed.has(el)) return;
        observed.add(el);
      }
      if (el.classList.contains("is-visible")) return;
      revealObserver.observe(el);
    });
  }

  function revealAll() {
    setStaggerIndices(document);
    observeReveals(document);
  }

  var progressAnimTimer = null;
  function animateProgressBars() {
    if (prefersReduced()) return;
    if (progressAnimTimer) return;
    progressAnimTimer = setTimeout(function () { progressAnimTimer = null; }, 400);
    document
      .querySelectorAll(".progress-bar-fill, .mod-prog-fill")
      .forEach(function (el) {
        var target = el.style.width || getComputedStyle(el).width;
        if (!target || target === "0px" || target === "0%") return;
        // Capture intended width, restart from 0, then animate
        var intended = el.getAttribute("data-target-width") || target;
        el.setAttribute("data-target-width", intended);
        el.style.width = "0%";
        el.classList.remove("progress-glow");
        requestAnimationFrame(function () {
          requestAnimationFrame(function () {
            el.style.width = intended;
            el.classList.add("progress-glow");
            setTimeout(function () {
              el.classList.remove("progress-glow");
            }, 1000);
          });
        });
      });
  }

  function enhanceQuizForms() {
    document.querySelectorAll("form[data-quiz]").forEach(function (form) {
      if (form.getAttribute("data-motion-bound")) return;
      form.setAttribute("data-motion-bound", "1");
      form.addEventListener(
        "submit",
        function () {
          // Run after course.js handler in same tick (bubble phase after their listener)
          // Use microtask + rAF so classes from course.js are present
          Promise.resolve().then(function () {
            requestAnimationFrame(function () {
              form.classList.add("quiz-scored");
              var result = form.querySelector(".quiz-result");
              if (result) {
                result.classList.add("is-shown");
                result.style.display = "block";
              }
              if (!prefersReduced()) {
                form.querySelectorAll(".quiz-q.correct").forEach(function (q) {
                  q.classList.remove("correct");
                  // force reflow for re-trigger
                  void q.offsetWidth;
                  q.classList.add("correct");
                });
              }
            });
          });
        },
        false
      );
    });
  }

  function onLessonComplete(e) {
    var id = e && e.detail && e.detail.id;
    if (!id) return;
    var link = document.querySelector(
      '.lesson-link[href*="' + id + '"], .lesson-link.active'
    );
    // Prefer matching by completed check near active
    var candidates = document.querySelectorAll(".lesson-link.done, .lesson-link.active");
    candidates.forEach(function (a) {
      a.classList.add("check-pop");
      var check = a.querySelector(".check");
      if (check && !prefersReduced()) {
        check.style.animation = "none";
        void check.offsetWidth;
        check.style.animation = "";
      }
    });
    // Also pulse the active row
    var active = document.querySelector(".lesson-link.active");
    if (active && !prefersReduced()) {
      active.classList.remove("active");
      void active.offsetWidth;
      active.classList.add("active");
    }
  }

  function setupViewTransitions() {
    if (prefersReduced()) return;
    if (!document.startViewTransition) {
      // Fallback: ensure page-enter class on body/main
      var main = document.querySelector("main") || document.body;
      if (!main.classList.contains("page-enter")) {
        main.classList.add("page-enter");
      }
      return;
    }
    document.addEventListener(
      "click",
      function (e) {
        var a = e.target.closest && e.target.closest("a[href]");
        if (!a) return;
        if (e.defaultPrevented || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey)
          return;
        if (a.target && a.target !== "_self") return;
        var href = a.getAttribute("href");
        if (!href || href.charAt(0) === "#" || href.indexOf("mailto:") === 0)
          return;
        var url;
        try {
          url = new URL(a.href, location.href);
        } catch (err) {
          return;
        }
        if (url.origin !== location.origin) return;
        // Same-document hash only
        if (url.pathname === location.pathname && url.search === location.search)
          return;
        // Stay within course site (file or http)
        e.preventDefault();
        document.startViewTransition(function () {
          location.href = url.href;
        });
      },
      true
    );
  }

  function setupHeroParallax() {
    if (prefersReduced()) return;
    var hero = document.querySelector(".hero");
    if (!hero) return;
    var orbs = hero.querySelector(".hero-orbs");
    if (!orbs) return;
    // Disable on coarse pointer / touch-primary
    if (window.matchMedia && window.matchMedia("(pointer: coarse)").matches)
      return;
    orbs.classList.add("has-parallax");
    var ticking = false;
    hero.addEventListener(
      "mousemove",
      function (e) {
        if (ticking) return;
        ticking = true;
        requestAnimationFrame(function () {
          var rect = hero.getBoundingClientRect();
          var x = ((e.clientX - rect.left) / rect.width - 0.5) * 10;
          var y = ((e.clientY - rect.top) / rect.height - 0.5) * 6;
          orbs.style.setProperty("--px", x.toFixed(2));
          orbs.style.setProperty("--py", y.toFixed(2));
          ticking = false;
        });
      },
      { passive: true }
    );
  }

  function onUiUpdated() {
    setStaggerIndices(document);
    // Dashboard cards: ensure reveal classes
    var dash = document.getElementById("module-dashboard");
    if (dash) {
      dash.classList.add("stagger-children");
      Array.prototype.forEach.call(dash.children, function (card, i) {
        card.classList.add("reveal-up", "lift");
        card.style.setProperty("--i", String(i));
      });
    }
    observeReveals(document);
    animateProgressBars();
    enhanceQuizForms();
  }

  function init() {
    setStaggerIndices(document);
    observeReveals(document);
    enhanceQuizForms();
    setupViewTransitions();
    setupHeroParallax();

    // Progress bars after course.js paints widths
    requestAnimationFrame(function () {
      animateProgressBars();
    });

    // Late dashboard render / sidebar
    setTimeout(function () {
      onUiUpdated();
    }, 60);

    document.addEventListener("ms:ui-updated", onUiUpdated);
    document.addEventListener("ms:lesson-complete", onLessonComplete);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

  window.MechatronicsMotion = {
    revealAll: revealAll,
    rescan: onUiUpdated
  };
})();
