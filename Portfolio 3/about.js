const ABOUT_TEXTS = {
  de: [
    "Hallo, ich bin Malou Kammer – 18 Jahre alt und im fünften Semester meiner Ausbildung an der Fachklasse Grafik Luzern.",
    "Besonders begeistern mich Branding und Corporate Design, aber auch Motion Graphics und Webdesign. Ich probiere gerne Neues aus und entwickle eine Idee in einem intensiven Entwurfsprozess Schritt für Schritt weiter, bis daraus ein stimmiges Endprodukt entsteht. Dabei lerne ich ständig dazu und baue meine Fähigkeiten laufend aus.",
    "Mein Ziel ist es, meinen eigenen Gestaltungsstil weiterzuentwickeln: experimentell, aber mit klarer Ordnung. Ich möchte Gestaltung schaffen, die sichtbar wird und im Alltag der Menschen etwas bewirkt."
  ],
  en: [
    "Hi, I'm Malou Kammer – I'm 18 years old and in the fifth semester of my studies at the Fachklasse Grafik Luzern, a school for graphic design.",
    "I'm especially passionate about branding and corporate design, as well as motion graphics and web design. I love trying out new things and developing an idea step by step through an in-depth design process until it becomes a coherent final product. Along the way, I'm constantly learning and expanding my skills.",
    "My goal is to keep developing my own design style: experimental, yet clearly structured. I want to create design that gets noticed and makes a difference in people's everyday lives."
  ]
};

const languageToggle = document.querySelector("#language-toggle");
const projectsLink = document.querySelector(".topbar-link");
const aboutPageLabel = document.querySelector(".about-page-label");
const aboutDescription = document.querySelector(".about-description");
const navigationType = performance.getEntriesByType("navigation")[0]?.type;
const referrerIsSameSite = document.referrer
  ? new URL(document.referrer).origin === location.origin
  : false;
if (navigationType === "reload" || !referrerIsSameSite) {
  sessionStorage.setItem("portfolio-language", "de");
}
let currentLanguage = sessionStorage.getItem("portfolio-language") === "en" ? "en" : "de";

function updateAboutLanguage() {
  const isEnglish = currentLanguage === "en";
  const texts = ABOUT_TEXTS[currentLanguage];
  document.documentElement.lang = currentLanguage;
  document.querySelector(".about-page").setAttribute("aria-label", isEnglish ? "About Me" : "Über mich");
  document.querySelector(".about-grid").setAttribute("aria-label", isEnglish ? "About Malou Kammer" : "Über Malou Kammer");
  projectsLink.textContent = isEnglish ? "Projects" : "Projekte";
  aboutPageLabel.textContent = isEnglish ? "About Me" : "Über mich";
  languageToggle.setAttribute("aria-label", isEnglish ? "Switch language to German" : "Sprache zu Englisch wechseln");
  languageToggle.setAttribute("aria-pressed", String(isEnglish));
  aboutDescription.querySelectorAll("p").forEach((paragraph, index) => {
    paragraph.textContent = texts[index];
  });
}

languageToggle.addEventListener("click", () => {
  currentLanguage = currentLanguage === "de" ? "en" : "de";
  sessionStorage.setItem("portfolio-language", currentLanguage);
  updateAboutLanguage();
});

updateAboutLanguage();
