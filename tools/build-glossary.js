/* Prerenders the glossary entries into glossary.html so they show without JavaScript.
   Run from the repo root:  node tools/build-glossary.js */
const fs = require("fs");
global.window = {};
require("../js/glossary-data.js");
const G = window.GLOSSARY;
const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const slug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
const letterOf = (t) => { const c = t.trim()[0].toUpperCase(); return /[A-Z]/.test(c) ? c : "#"; };
let html = "";
G.categories.forEach((c) => {
  const items = G.entries.filter((e) => e.cat === c.id).sort((a, b) => a.term.localeCompare(b.term, "en", { sensitivity: "base" }));
  html += '<section class="g-cat" id="cat-' + c.id + '" data-cat="' + c.id + '" aria-labelledby="h-' + c.id + '">\n';
  html += '<h2 id="h-' + c.id + '">' + esc(c.name) + ' <span class="g-count">' + items.length + '</span></h2>\n<div class="g-grid">\n';
  items.forEach((e) => {
    const L = e.lesson ? G.lessons[e.lesson] : null;
    const hay = (e.term + " " + e.exp + " " + e.def).toLowerCase();
    html += '<article class="g-entry" id="' + slug(c.id + "-" + e.term) + '" data-letter="' + letterOf(e.term) + '" data-hay="' + esc(hay) + '">';
    html += '<h3>' + esc(e.term) + (e.exp ? ' <span class="g-exp">' + esc(e.exp) + '</span>' : "") + '</h3>';
    html += '<p>' + esc(e.def) + '</p>';
    if (L) html += '<p class="g-link"><a href="lessons/' + L[0] + '.html">Lesson: ' + esc(L[1]) + '</a></p>';
    html += '</article>\n';
  });
  html += '</div>\n</section>\n';
});
let page = fs.readFileSync("glossary.html", "utf8");
page = page.replace(/<!-- GLOSSARY:START -->[\s\S]*<!-- GLOSSARY:END -->/, "<!-- GLOSSARY:START -->\n" + html + "<!-- GLOSSARY:END -->");
page = page.replace(/(<span id="g-total">)\d*(<\/span>)/, "$1" + G.entries.length + "$2");
fs.writeFileSync("glossary.html", page);
console.log("entries", G.entries.length);
