const themeButtons = document.querySelectorAll("[data-theme-choice]");
const savedTheme = localStorage.getItem("portfolio-theme") || "light";

function setTheme(theme) {
  document.body.classList.toggle("theme-dark", theme === "dark");
  document.documentElement.classList.toggle("theme-dark", theme === "dark");
  themeButtons.forEach(button => {
    button.setAttribute("aria-pressed", String(button.dataset.themeChoice === theme));
  });
  localStorage.setItem("portfolio-theme", theme);
}

setTheme(savedTheme);

themeButtons.forEach(button => {
  button.addEventListener("click", () => setTheme(button.dataset.themeChoice));
});
