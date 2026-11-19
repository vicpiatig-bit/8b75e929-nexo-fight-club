const menu = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
const mobile = window.matchMedia("(max-width: 780px)");

function setMenu(open) {
  menu.setAttribute("aria-expanded", String(open));
  nav.toggleAttribute("data-open", open);
}

function syncMenu() {
  menu.hidden = !mobile.matches;
  setMenu(false);
}

nav.classList.add("enhanced-nav");
syncMenu();
mobile.addEventListener("change", syncMenu);
menu.addEventListener("click", () => setMenu(!nav.hasAttribute("data-open")));
nav.addEventListener("click", (event) => {
  const link = event.target.closest("a");
  if (!link || !mobile.matches) return;
  setMenu(false);
  const section = document.getElementById(link.hash.slice(1));
  if (section) {
    section.tabIndex = -1;
    section.focus({ preventScroll: true });
  }
});
document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape" || !nav.hasAttribute("data-open")) return;
  setMenu(false);
  menu.focus();
});

const trial = document.querySelector(".trial");
const form = trial.querySelector(".trial-form");
const slot = form.querySelector("select");
const result = trial.querySelector(".trial-result");

if (typeof trial.showModal === "function") {
  for (const link of document.querySelectorAll("[data-trial]")) {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      form.reset();
      result.hidden = true;
      trial.showModal();
      slot.focus();
    });
  }
}

form.addEventListener("change", () => {
  result.hidden = true;
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  result.textContent = `Turno elegido: ${slot.value}. La simulación terminó. No se hizo una reserva real.`;
  result.hidden = false;
  result.focus();
});
