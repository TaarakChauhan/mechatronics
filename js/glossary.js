/* Glossary page behaviour: live search, category filter, A to Z filter. */
(function () {
  "use strict";
  document.addEventListener("DOMContentLoaded", function () {
    var list = document.getElementById("g-list");
    if (!list) return;
    var search = document.getElementById("g-search");
    var select = document.getElementById("g-cat-select");
    var az = document.getElementById("g-az");
    var status = document.getElementById("g-status");
    var empty = document.getElementById("g-empty");
    var sections = Array.prototype.slice.call(list.querySelectorAll(".g-cat"));
    var entries = Array.prototype.slice.call(list.querySelectorAll(".g-entry"));
    var state = { q: "", cat: "all", letter: "all" };

    sections.forEach(function (s) {
      var o = document.createElement("option");
      o.value = s.getAttribute("data-cat");
      o.textContent = s.querySelector("h2").firstChild.textContent.trim();
      select.appendChild(o);
    });

    var letters = {};
    entries.forEach(function (e) { letters[e.getAttribute("data-letter")] = true; });
    var all = "#ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    var html = '<button type="button" class="g-letter is-active" data-letter="all" aria-pressed="true">All</button>';
    all.forEach(function (l) {
      var has = letters[l];
      html += '<button type="button" class="g-letter" data-letter="' + l + '" aria-pressed="false"' +
        (has ? "" : " disabled") + ">" + l + "</button>";
    });
    az.innerHTML = html;

    function apply() {
      var q = state.q.trim().toLowerCase();
      var terms = q ? q.split(/\s+/) : [];
      var shown = 0;
      sections.forEach(function (s) {
        var catOk = state.cat === "all" || s.getAttribute("data-cat") === state.cat;
        var n = 0;
        Array.prototype.forEach.call(s.querySelectorAll(".g-entry"), function (e) {
          var ok = catOk;
          if (ok && state.letter !== "all" && e.getAttribute("data-letter") !== state.letter) ok = false;
          if (ok && terms.length) {
            var hay = e.getAttribute("data-hay");
            for (var i = 0; i < terms.length; i++) { if (hay.indexOf(terms[i]) === -1) { ok = false; break; } }
          }
          e.hidden = !ok;
          if (ok) n++;
        });
        s.hidden = n === 0;
        var c = s.querySelector(".g-count");
        if (c) c.textContent = n;
        shown += n;
      });
      empty.hidden = shown !== 0;
      status.textContent = "Showing " + shown + " of " + entries.length + " terms.";
    }

    var timer;
    search.addEventListener("input", function () {
      clearTimeout(timer);
      timer = setTimeout(function () { state.q = search.value; apply(); }, 80);
    });
    select.addEventListener("change", function () { state.cat = select.value; apply(); });
    az.addEventListener("click", function (ev) {
      var b = ev.target.closest(".g-letter");
      if (!b || b.disabled) return;
      state.letter = b.getAttribute("data-letter");
      Array.prototype.forEach.call(az.querySelectorAll(".g-letter"), function (x) {
        var on = x === b;
        x.classList.toggle("is-active", on);
        x.setAttribute("aria-pressed", on ? "true" : "false");
      });
      apply();
    });

    /* Deep link support: glossary.html#q=term or an entry id */
    var m = /[#&]q=([^&]*)/.exec(location.hash);
    if (m) { search.value = decodeURIComponent(m[1]); state.q = search.value; }
    apply();
    if (location.hash && !m) {
      var t = document.getElementById(location.hash.slice(1));
      if (t) t.scrollIntoView();
    }
  });
})();
