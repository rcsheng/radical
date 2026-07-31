/* ============================================================
   Radical AI — Prototype Gallery
   Shared interaction chrome: journey stepper, glossary popovers,
   learning-mode toggle, toast. Each prototype adds its own
   bespoke console behavior on top of this in an inline <script>.
   ============================================================ */

(function () {
  "use strict";

  /* ---------- journey stepper ---------- */
  // Any <nav class="journey"> with buttons [data-step="x"] paired with
  // .step-panel[data-step-panel="x"] elsewhere on the page.
  function initSteppers() {
    document.querySelectorAll(".journey").forEach(function (nav) {
      var buttons = nav.querySelectorAll("[data-step]");
      buttons.forEach(function (btn) {
        btn.addEventListener("click", function () {
          goToStep(nav, btn.getAttribute("data-step"));
        });
      });
    });
  }

  function goToStep(nav, step) {
    var buttons = nav.querySelectorAll("[data-step]");
    buttons.forEach(function (b) {
      if (b.getAttribute("data-step") === step) {
        b.setAttribute("aria-current", "step");
      } else {
        b.removeAttribute("aria-current");
      }
    });
    document.querySelectorAll(".step-panel").forEach(function (p) {
      p.classList.toggle("active", p.getAttribute("data-step-panel") === step);
    });
    var evt = new CustomEvent("radical:step", { detail: { step: step, nav: nav } });
    document.dispatchEvent(evt);
  }
  window.RadicalUI = window.RadicalUI || {};
  window.RadicalUI.goToStep = goToStep;

  /* ---------- glossary popovers ---------- */
  // <button class="term" data-term="SDAS" data-def="...">SDAS</button>
  function initGlossary() {
    document.addEventListener("click", function (e) {
      var term = e.target.closest(".term");
      document.querySelectorAll(".term-pop.open").forEach(function (p) {
        if (!term || p.dataset.owner !== term.dataset.id) closePop(p);
      });
      if (!term) return;
      e.stopPropagation();
      var existing = term.querySelector(".term-pop");
      if (existing) {
        existing.classList.toggle("open");
        term.setAttribute("aria-expanded", existing.classList.contains("open") ? "true" : "false");
        return;
      }
      var pop = document.createElement("span");
      pop.className = "term-pop open";
      var label = document.createElement("span");
      label.className = "tp-label";
      label.textContent = term.getAttribute("data-term") || "Definition";
      var body = document.createElement("span");
      body.textContent = term.getAttribute("data-def") || "";
      pop.appendChild(label);
      pop.appendChild(document.createElement("br"));
      pop.appendChild(body);
      term.appendChild(pop);
      term.setAttribute("aria-expanded", "true");
    });
    document.addEventListener("click", function (e) {
      if (!e.target.closest(".term")) {
        document.querySelectorAll(".term-pop.open").forEach(closePop);
      }
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") {
        document.querySelectorAll(".term-pop.open").forEach(closePop);
      }
    });
  }
  function closePop(pop) {
    pop.classList.remove("open");
    var owner = pop.closest(".term");
    if (owner) owner.setAttribute("aria-expanded", "false");
  }

  /* ---------- learning mode ---------- */
  function initLearningMode() {
    var toggles = document.querySelectorAll("[data-learning-toggle]");
    var stored = window.localStorage ? localStorage.getItem("radical-learning-mode") : null;
    if (stored === "on") document.body.classList.add("learning-on");
    toggles.forEach(function (t) {
      t.addEventListener("click", function () {
        var on = document.body.classList.toggle("learning-on");
        try { localStorage.setItem("radical-learning-mode", on ? "on" : "off"); } catch (err) {}
      });
    });
  }

  /* ---------- toast ---------- */
  function toast(msg) {
    var el = document.querySelector(".toast");
    if (!el) {
      el = document.createElement("div");
      el.className = "toast";
      document.body.appendChild(el);
    }
    el.textContent = msg;
    el.classList.add("show");
    clearTimeout(el._t);
    el._t = setTimeout(function () { el.classList.remove("show"); }, 2400);
  }
  window.RadicalUI.toast = toast;

  document.addEventListener("DOMContentLoaded", function () {
    initSteppers();
    initGlossary();
    initLearningMode();
  });
})();
