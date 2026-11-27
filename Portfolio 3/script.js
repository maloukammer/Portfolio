/* ---------- Einstellungen ---------- */
const BILD = "images/Hintergrundbild4.jpg";   // Hintergrundbild mit einem Streifen pro Projekt
// obere Kante jedes Streifens im Bild (in Pixeln), zuletzt die untere Kante des letzten
const STREIFEN = [0, 165, 334, 502, 670, 838, 1007, 1174, 1344, 1510, 1677];
const LAYOUT = "frei";                 // "frei" | "treppe" (links) | "rechts"
const NAECHSTE_AKTION = [0.25, 0.9];   // Sekunden zwischen Änderungen pro Zeile
const SCHWINGUNG = 0.7;                // wie weit Kreise hin- und herpendeln (x Höhe)
const PROJEKTNAMEN = [
  "24 Stunden",                      // data-project="0"
  "Jahresausstellung Plakat",        // data-project="1"
  "Designer und Leuchten",           // data-project="2"
  "Just Around The Corner",          // data-project="3"
  "Grundlagen der Gestaltung",       // data-project="4"
  "Master-Abschlusskonzerte-Plakat", // data-project="5"
  "Wort in Bewegung",                // data-project="6"
  "Avec Ou Sans Bulles",             // data-project="7"
  "Objekt, Schallplatte, Schrift",   // data-project="8"
  "Sensi Burger"                     // data-project="9"
];
const PROJEKTBESCHREIBUNGEN = [
  "Ein Film, der innerhalb von 24 Stunden spielt und aus 14 kurzen Geschichten besteht, bildet die Grundlage dieses Drehbuchs. Die einzelnen Szenen werden durch eine Kombination aus Bildern und Texten erzählt und in einem übersichtlichen Buch zusammengeführt. Die vertikal angeordneten Fotografien erinnern an analoge Filmstreifen und verleihen der Gestaltung einen filmischen Charakter. Ergänzt wird das Konzept durch eine Monospace-Schrift, die sich an der klassischen Ästhetik von Drehbüchern orientiert und das Gesamtbild abrundet.",
  "In Zusammenarbeit mit Sinah Aregger gestaltete ich das Plakat für die Jahresausstellung 2026 der Fachklasse Grafik. Als Grundlage dienten zwei illustrative Postkartenmotive, die wir in einem früheren Projekt im Siebdruck umgesetzt hatten. Daraus entstand ein zweiseitiges Plakat, das auf jeder Seite eines der beiden Motive zeigt und die Informationen doppelt sichtbar macht. Ein Teil der Plakate wurde zusätzlich zu Flyern gefaltet. Dabei konnte ich meine Fähigkeiten in der Teamarbeit weiterentwickeln und erstmals den gesamten Gestaltungsprozess bis zum offiziellen Druck miterleben.",
  "Drei verschiedene Leuchten und ihre Designer bilden den Inhalt dieses Katalogprojekts. Ziel war es, die Designobjekte durch eine verspielte Platzierung der Typografie spannend in Szene zu setzen und ihre jeweilige Stimmung auf die Lesenden zu übertragen. Dabei wird viel mit vertikal gesetzter Typografie gearbeitet, die sich durch das gesamte Layout zieht. Ein verkürzter Vorsatz gibt bereits einen ersten Einblick in das Gestaltungskonzept und simuliert den Moment, in dem eine Leuchte eingeschaltet wird.",
  "Zwanzig Corner Shops in London und ihre ganz eigenen Geschichten bilden die Grundlage dieses Buchprojekts. Während eines Studienaufenthalts in London haben alle angehenden Grafiker*innen der Fachklasse Grafik einen Laden erkundet, fotografiert und dokumentiert. Aus den unterschiedlichen Beobachtungen und gesammelten Materialien entstand mein Buch. Die Gestaltung führt durch die verschiedenen Shops und stellt sie auf einzelnen Seiten gegenüber. Fotografien, persönliche Eindrücke und Texte geben Einblicke in ihren Alltag und zeigen, was die kleinen Geschäfte verbindet und voneinander unterscheidet.",
  "In diesem Grundlagenprojekt setzte ich mich mit der Wirkung von Formen und Schrift auseinander. Im ersten Teil entwickelte ich verschiedene Abfolgen mit Quadraten, um einfache Abläufe und Bewegungen grafisch darzustellen. Im zweiten Teil beschäftigte ich mich mit semantischer Typografie, bei der die Bedeutung eines Wortes allein durch seine typografische Gestaltung vermittelt wird. Das Projekt half mir, ein besseres Verständnis für grafische Gestaltung zu entwickeln und die gewonnenen Erkenntnisse auch in späteren Projekten anzuwenden.",
  "Im Rahmen eines Wettbewerbs der Hochschule Luzern – Musik gestaltete ich ein Plakat für die Master-Abschlusskonzerte. Ziel war es, die Stimmung der Konzerte einzufangen und mit einer auffälligen Gestaltung Aufmerksamkeit zu erzeugen. Ergänzend zum Plakat entwickelte ich eine passende Animation. Im Gestaltungsprozess experimentierte ich zunächst mit verschiedenen analogen Techniken und übertrug diese anschliessend ins Digitale. So konnte ich unterschiedliche Möglichkeiten ausprobieren und herausfinden, wie sich Bewegung und Gestaltung wirkungsvoll kombinieren lassen.",
  "Zum Erlernen der Programme After Effects und Cavalry entstand ein experimentelles Animationsprojekt. Ausgangspunkt war das Wort «herunterfallen», das auf unterschiedliche Arten animiert und interpretiert wurde. Dabei entstanden verschiedene kurze Animationen, in denen entweder die Schrift selbst zur fallenden Bewegung wird oder Formen die Aktion darstellen. Das Projekt verbindet spielerisches Experimentieren mit typografischer Gestaltung und zeigt, wie vielseitig sich ein einzelnes Wort in Bewegung umsetzen lässt.",
  "Während meines zweiwöchigen Aufenthalts in Paris habe ich in der Nationalbibliothek Menschen beobachtet, skizziert und fotografiert. Meine Eindrücke und Gedanken zur Lernsituation hielt ich in einem Skizzenheft fest. Aus diesem gesammelten Material entstand ein Buch, das verschiedene Lernmaterialien untersucht und analoge mit digitalen Lernformen vergleicht. Es verbindet Texte, Skizzen und Collagen zu einer vielseitigen Gestaltung. Kleine, übereinanderliegende Texte und das wiederkehrende Kreiselement prägen das Erscheinungsbild und laden dazu ein, das Buch genauer zu entdecken.",
  "Ausgangspunkt dieses Projekts war ein Etikettenausdruckgerät, das ich zunächst in Illustrator nachgebaut habe und anschliessend dekonstruiert habe. Dabei entstanden spannende Muster und Formen, die als Grundlage für ein Plattencover zum Lied «Eisbär» von Grauzone dienten. In einem weiteren Schritt entwickelte ich eine eigene Schrift, die vom gestalteten Cover inspiriert ist. Der mehrteilige Prozess verband analoges Experimentieren mit digitaler Gestaltung und ermöglichte mir, meine Kenntnisse in Programmen wie Illustrator und Glyphs zu vertiefen.",
  "Eine erfundene Restaurantkette für Menschen mit Unverträglichkeiten bildet die Grundlage dieses Corporate-Design-Projekts. Das Fast-Food-Restaurant ermöglicht es, Burger individuell zusammenzustellen und Zutaten nach den eigenen Bedürfnissen auszuwählen. Das Konzept macht das Bestellen unkompliziert und bietet auch für wählerische Esser*innen eine grosse Auswahl. Das Logo greift die Idee der individuellen Zusammenstellung auf und zeigt, wie vielfältig die Möglichkeiten sind. Ergänzt wird es durch ein einheitliches Erscheinungsbild, das sich durch das gesamte Branding zieht."
];
const PROJEKTNAMEN_EN = [
  "24 Hours",
  "Annual Exhibition Poster",
  "Designers and Lamps",
  "Just Around The Corner",
  "Fundamentals of Design",
  "Master's Graduation Concerts Poster",
  "Word in Motion",
  "Avec Ou Sans Bulles",
  "Object, Record, Typeface",
  "Sensi Burger"
];
const PROJEKTBESCHREIBUNGEN_EN = [
  "A film that takes place over 24 hours and consists of 14 short stories forms the basis of this screenplay. The individual scenes are told through a combination of images and text and brought together in a clearly structured book. The vertically arranged photographs recall analogue film strips and give the design a cinematic character. The concept is complemented by a monospaced typeface that draws on the classic aesthetic of screenplays and rounds off the overall look.",
  "In collaboration with Sinah Aregger, I designed the poster for the 2026 annual exhibition of Fachklasse Grafik. It was based on two illustrated postcard motifs that we had screen-printed in an earlier project. The result was a double-sided poster with one of the two motifs on each side, making the information visible twice. Some of the posters were also folded into flyers. This project allowed me to further develop my teamwork skills and, for the first time, follow the entire design process through to the final print run.",
  "Three different lamps and their designers form the basis of this catalogue project. The aim was to stage the design objects in an engaging way through a playful placement of typography and to convey their individual mood to the reader. Vertically set typography plays a major role and runs throughout the entire layout. A shortened endpaper offers a first glimpse of the design concept and recalls the moment a lamp is switched on.",
  "Twenty corner shops in London and their very own stories form the basis of this book project. During a study trip to London, every aspiring graphic designer in the Fachklasse Grafik explored, photographed and documented one shop. My book grew out of these different observations and collected materials. The design guides the reader through the various shops, presenting them side by side on individual pages. Photographs, personal impressions and texts offer insights into their everyday lives and show what connects these small businesses and what sets them apart.",
  "In this foundation project, I explored the effects of shapes and type. In the first part, I developed various sequences of squares to graphically represent simple processes and movements. In the second part, I focused on semantic typography, where the meaning of a word is conveyed solely through its typographic design. The project helped me develop a better understanding of graphic design and apply the insights I gained in later projects.",
  "As part of a competition held by the Lucerne University of Applied Sciences and Arts – Music, I designed a poster for the Master's graduation concerts. The aim was to capture the atmosphere of the concerts and attract attention with a striking design. Alongside the poster, I developed a matching animation. In the design process, I first experimented with various analogue techniques and then transferred them into the digital realm. This allowed me to try out different approaches and discover how movement and design can be combined effectively.",
  "This experimental animation project was created to learn how to use the programs After Effects and Cavalry. The starting point was the word \"herunterfallen\" (\"to fall down\"), which was animated and interpreted in different ways. This resulted in a series of short animations in which either the lettering itself becomes the falling movement or shapes depict the action. The project combines playful experimentation with typographic design and shows how versatile a single word can become in motion.",
  "During my two-week stay in Paris, I observed, sketched and photographed people in the National Library. I recorded my impressions and thoughts on the learning environment in a sketchbook. This material became the basis for a book that explores different learning resources and compares analogue and digital forms of learning. It combines texts, sketches and collages into a varied design. Small, overlapping texts and a recurring circle element define its visual identity and invite readers to explore the book more closely.",
  "The starting point of this project was a label maker, which I first recreated in Illustrator and then deconstructed. This produced exciting patterns and shapes that served as the basis for a record cover for the song \"Eisbär\" by Grauzone. In a further step, I developed my own typeface inspired by the finished cover. This multi-stage process combined analogue experimentation with digital design and allowed me to deepen my skills in programs such as Illustrator and Glyphs.",
  "A fictional restaurant chain for people with food intolerances forms the basis of this corporate design project. The fast-food restaurant lets guests put together their own burgers and choose ingredients according to their individual needs. The concept makes ordering easy and offers a wide selection, even for picky eaters. The logo picks up on the idea of individual combinations and shows how diverse the possibilities are. It is complemented by a consistent visual identity that runs throughout the entire branding."
];
const ANZAHL = PROJEKTNAMEN.length;    // Anzahl Zeilen = Anzahl Projekte (wird automatisch gezählt)
const HANDY_BREITE = 700;              // unter dieser Fensterbreite gilt das Handy-Layout

/* ---------- Setup ---------- */
const canvas = document.getElementById("c");
paper.setup(canvas);
const { Point, Path, CompoundPath, Group, Raster, Size } = paper;
const R = (a, b) => a + Math.random() * (b - a);
const shuffle = a => a.map(x => [Math.random(), x]).sort((p, q) => p[0] - q[0]).map(p => p[1]);
const navigationType = performance.getEntriesByType("navigation")[0]?.type;
const referrerIsSameSite = document.referrer
  ? new URL(document.referrer).origin === location.origin
  : false;
if (navigationType === "reload" || !referrerIsSameSite) {
  sessionStorage.setItem("portfolio-language", "de");
}
let W, H, G, VG, rows = [], img, selectedProject = -1;
let currentLanguage = sessionStorage.getItem("portfolio-language") === "en" ? "en" : "de";
let mobil = false, kreisMin = 3, kreisMax = 8;   // werden in build() je nach Fensterbreite gesetzt
let letzterZeiger = "mouse";                      // "touch" = Finger, "mouse" = Maus
let pendingHandyProject = -1;
let overviewIntro = { active: false, start: 0 };
const gesamtHoehe = () => ANZAHL * H + (ANZAHL - 1) * VG;
const shadeLayer = document.querySelector(".row-shades");
const titleLabel = document.querySelector(".project-title");
// Alle Projekt-Raster der Seite (pro Projekt ein <section class="project-grid" data-project="NUMMER">)
const projectGrids = Array.from(document.querySelectorAll(".project-grid"));
// Zeigt nur das Raster des gewählten Projekts (hidden = true blendet alle aus)
function setGridHidden(hidden) {
  projectGrids.forEach(g => {
    const active = !hidden && Number(g.dataset.project) === selectedProject;
    g.classList.toggle("is-active", active);
    g.setAttribute("aria-hidden", String(!active));
  });
}
const descriptionToggle = document.querySelector(".project-info-toggle");
const projectInfo = document.querySelector(".project-info");
const projectDescription = document.querySelector(".project-description");
const descriptionText = projectDescription.querySelector("p");
const languageToggle = document.querySelector("#language-toggle");
const projectsLink = document.querySelector("#projects-link");
const aboutLink = document.querySelector(".topbar-link");
const rowShades = Array.from({ length: ANZAHL }, () => {
  const shade = document.createElement("div");
  shade.className = "row-shade";
  shadeLayer.appendChild(shade);
  return shade;
});
let activeRow = -1;

function getProjectNames() {
  return currentLanguage === "en" ? PROJEKTNAMEN_EN : PROJEKTNAMEN;
}

function getProjectDescriptions() {
  return currentLanguage === "en" ? PROJEKTBESCHREIBUNGEN_EN : PROJEKTBESCHREIBUNGEN;
}

function updateLanguage() {
  const isEnglish = currentLanguage === "en";
  const names = getProjectNames();
  document.documentElement.lang = currentLanguage;
  projectsLink.textContent = isEnglish ? "Projects" : "Projekte";
  aboutLink.textContent = isEnglish ? "About Me" : "Über mich";
  languageToggle.setAttribute("aria-label", isEnglish ? "Switch language to German" : "Sprache zu Englisch wechseln");
  languageToggle.setAttribute("aria-pressed", String(isEnglish));
  projectInfo.setAttribute("aria-label", isEnglish ? "Project information" : "Projektinformation");
  projectDescription.setAttribute("aria-label", isEnglish ? "Project description" : "Projektbeschreibung");
  descriptionToggle.setAttribute(
    "aria-label",
    descriptionToggle.getAttribute("aria-expanded") === "true"
      ? isEnglish ? "Close project description" : "Projektbeschreibung schließen"
      : isEnglish ? "Show project description" : "Projektbeschreibung anzeigen"
  );
  projectGrids.forEach((grid, index) => {
    grid.setAttribute("aria-label", `${isEnglish ? "Project content" : "Projektinhalt"} ${names[index]}`);
  });

  const titleIndex = activeRow >= 0 ? activeRow : selectedProject;
  titleLabel.textContent = titleIndex >= 0 ? names[titleIndex] : "";
  descriptionText.textContent = selectedProject >= 0
    ? getProjectDescriptions()[selectedProject]
    : isEnglish ? "Choose a project to read its description." : "Wähle ein Projekt aus, um seine Beschreibung zu lesen.";
}

languageToggle.addEventListener("click", () => {
  currentLanguage = currentLanguage === "de" ? "en" : "de";
  sessionStorage.setItem("portfolio-language", currentLanguage);
  updateLanguage();
});

updateLanguage();

function setDescriptionOpen(isOpen) {
  document.body.classList.toggle("project-description-open", isOpen);
  descriptionToggle.setAttribute("aria-expanded", String(isOpen));
  descriptionToggle.setAttribute(
    "aria-label",
    isOpen
      ? currentLanguage === "en" ? "Close project description" : "Projektbeschreibung schließen"
      : currentLanguage === "en" ? "Show project description" : "Projektbeschreibung anzeigen"
  );
  projectDescription.setAttribute("aria-hidden", String(!isOpen));
}

descriptionToggle.addEventListener("click", () => {
  setDescriptionOpen(descriptionToggle.getAttribute("aria-expanded") !== "true");
});

document.addEventListener("pointerdown", event => {
  if (
    descriptionToggle.getAttribute("aria-expanded") === "true" &&
    !projectDescription.contains(event.target) &&
    !descriptionToggle.contains(event.target)
  ) {
    setDescriptionOpen(false);
  }
});

function setActiveRow(index) {
  activeRow = index;
  rowShades.forEach((shade, i) => shade.classList.toggle("is-dimmed", index >= 0 && i !== index));
  const names = getProjectNames();
  titleLabel.textContent = index >= 0 ? names[index] : selectedProject >= 0 ? names[selectedProject] : "";
  titleLabel.classList.toggle("is-visible", index >= 0 && selectedProject < 0);
  titleLabel.classList.toggle("is-selected", selectedProject >= 0);
}

function startOverviewIntro() {
  if (!rows.length) return;
  overviewIntro = { active: true, start: performance.now() };
  rows.forEach(row => { row.hoverProgress = 0; });
  setActiveRow(-1);
}

function openProject(index) {
  overviewIntro.active = false;
  pendingHandyProject = -1;
  selectedProject = index;
  descriptionText.textContent = getProjectDescriptions()[index];
  setDescriptionOpen(false);
  document.body.classList.add("project-open");
  document.body.classList.remove("project-grid-visible");
  setGridHidden(true);
  canvas.classList.remove("is-project-hovered");
  setActiveRow(-1);
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function returnToOverview() {
  pendingHandyProject = -1;
  selectedProject = -1;
  setDescriptionOpen(false);
  document.body.classList.remove("project-grid-visible", "project-open");
  setGridHidden(true);
  if (W && H) paper.view.viewSize = new Size(W, gesamtHoehe());
  canvas.classList.remove("is-project-hovered");
  setActiveRow(-1);
  startOverviewIntro();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// merkt sich, ob zuletzt ein Finger oder die Maus benutzt wurde
document.addEventListener("pointerdown", event => {
  letzterZeiger = event.pointerType;
  // Handy: Tippen ausserhalb der Zeilen nimmt die Markierung wieder weg
  if (event.pointerType === "touch" && event.target !== canvas && selectedProject < 0) {
    pendingHandyProject = -1;
    canvas.classList.remove("is-project-hovered");
    setActiveRow(-1);
  }
});
canvas.addEventListener("pointermove", event => {
  if (event.pointerType === "touch") return;        // Finger: kein Hover, siehe click unten
  if (!H || !VG) return;
  const y = event.clientY - canvas.getBoundingClientRect().top;
  const index = selectedProject >= 0
    ? y >= 0 && y <= H ? selectedProject : -1
    : Math.floor(y / (H + VG));
  const isProjectHovered = selectedProject >= 0
    ? index >= 0
    : index >= 0 && index < rows.length && y <= index * (H + VG) + H;
  canvas.classList.toggle("is-project-hovered", isProjectHovered);
  setActiveRow(isProjectHovered ? index : -1);
});
canvas.addEventListener("pointerleave", event => {
  if (event.pointerType === "touch") return;        // beim Finger bleibt die Markierung nach dem Tippen stehen
  canvas.classList.remove("is-project-hovered");
  setActiveRow(-1);
});
canvas.addEventListener("click", event => {
  if (!H) return;
  const y = event.clientY - canvas.getBoundingClientRect().top;
  if (selectedProject >= 0) {
    if (y >= 0 && y <= H) returnToOverview();
    return;
  }
  const index = Math.floor(y / (H + VG));
  if (index < rows.length && y <= index * (H + VG) + H) {
    // Handy: Balken erst vollständig verbreitern, danach Projekt öffnen
    if (letzterZeiger === "touch") {
      pendingHandyProject = index;
      canvas.classList.add("is-project-hovered");
      setActiveRow(index);
      return;
    }
    openProject(index);
  }
});
document.querySelector("#projects-link").addEventListener("click", returnToOverview);
titleLabel.addEventListener("click", () => {
  if (selectedProject >= 0) window.scrollTo({ top: 0, behavior: "smooth" });
});

/* ---------- Meta-Ball-Brücke zwischen zwei gleich grossen Kreisen ----------
   (angelehnt an paperjs.org/examples/meta-balls) */
const V = (a, l) => new Point(Math.cos(a) * l, Math.sin(a) * l), P2 = Math.PI / 2;
function neck(c1, c2, r, k) {
  const d = c2.x - c1.x;
  const u = d < 2 * r ? Math.acos(Math.max(-1, Math.min(1, d / (2 * r)))) : 0;
  const a1 = 0, a2 = P2;
  const a1a = a1 + u + (a2 - u) * k,           a1b = a1 - u - (a2 - u) * k;
  const a2a = a1 + Math.PI - u - (Math.PI - u - a2) * k;
  const a2b = a1 - Math.PI + u + (Math.PI - u - a2) * k;
  const p1a = c1.add(V(a1a, r)), p1b = c1.add(V(a1b, r));
  const p2a = c2.add(V(a2a, r)), p2b = c2.add(V(a2b, r));
  let d2 = Math.min(k * 2.4, p1a.subtract(p2a).length / (2 * r));
  d2 *= Math.min(1, d / r);
  const h = r * d2;
  const p = new Path({ segments: [p1a, p2a, p2b, p1b], closed: true }), s = p.segments;
  s[0].handleOut = V(a1a - P2, h); s[1].handleIn = V(a2a + P2, h);
  s[2].handleOut = V(a2b - P2, h); s[3].handleIn = V(a1b + P2, h);
  p.clockwise = true;
  return p;
}

function roundedShape(left, top, width, height, topLeft, topRight, bottomRight, bottomLeft) {
  const maxRadius = Math.min(width / 2, height / 2);
  const [tl, tr, br, bl] = [topLeft, topRight, bottomRight, bottomLeft]
    .map(radius => Math.max(0, Math.min(maxRadius, radius)));
  const k = .5522847498;
  const segment = (x, y, handleIn = [0, 0], handleOut = [0, 0]) =>
    new paper.Segment(new Point(x, y), new Point(...handleIn), new Point(...handleOut));
  const path = new Path({
    segments: [
      segment(left + tl, top, [-k * tl, 0]),
      segment(left + width - tr, top, [0, 0], [k * tr, 0]),
      segment(left + width, top + tr, [0, -k * tr]),
      segment(left + width, top + height - br, [0, 0], [0, k * br]),
      segment(left + width - br, top + height, [k * br, 0]),
      segment(left + bl, top + height, [0, 0], [-k * bl, 0]),
      segment(left, top + height - bl, [0, k * bl]),
      segment(left, top + tl, [0, 0], [0, -k * tl])
    ],
    closed: true,
    fillColor: "#000"
  });
  path.clockwise = true;
  return path;
}

/* ---------- Zeilen ----------
   Jede Zeile ist eine Liste von Elementen:
   b = Balken, c = Kreis, s = Leerraum, f = flexibler Rest (füllt die Zeile auf)
   "cur" ist die aktuelle Breite, "tgt" die Zielbreite – cur läuft weich zu tgt. */
const total = row => row.items.reduce((s, i) => s + (i.t === "f" ? 0 : i.tgt), 0);

function neueZeile(index) {
  const y = index * (H + VG);
  const bar = () => { const a = H + G + R(0, W * .1); return { t: "b", cur: a, tgt: a, ph: R(0, 6.28), sp: R(.9, 2.2) }; };
  const circ = () => ({ t: "c", cur: H + G, tgt: H + G, ph: R(0, 6.28), sp: R(1.5, 3.6) });
  const space = () => ({ t: "s", cur: 0, tgt: 0 });

  const nBars = mobil ? 1 : 2;                                          // Handy: 1 Balken
  const nCircs = mobil ? 2 + Math.floor(R(0, 2)) : 4 + Math.floor(R(0, 3)); // Handy: 2–3 Kreise
  const items = shuffle([...Array.from({ length: nBars }, bar), ...Array.from({ length: nCircs }, circ)]);
  items.unshift(space());
  items.splice(1 + Math.floor(R(0, items.length - 1)), 0, space());
  const flexCount = LAYOUT === "frei" ? 3 : 1;
  for (let n = 0; n < flexCount; n++) {
    const flex = { t: "f" };
    if (LAYOUT === "treppe") items.push(flex);
    else if (LAYOUT === "rechts") items.unshift(flex);
    else items.splice(Math.floor(R(0, items.length + 1)), 0, flex);
  }

  // jede Zeile darf unterschiedlich voll werden – die meisten bleiben luftig
  const row = { items, y, next: R(.2, 1.5), lim: R(.92, .98) * W, hoverProgress: 0 };
  while (total(row) > row.lim && items.filter(i => i.t === "c").length > kreisMin)
    items.splice(items.findIndex(i => i.t === "c"), 1);

  // Bildstreifen dieser Zeile ausschneiden und als Raster hinter die Maske legen
  const dpr = window.devicePixelRatio || 1;
  const sourceScale = img.height / STREIFEN[STREIFEN.length - 1];
  const top = (STREIFEN[index] + 4) * sourceScale;
  const bottom = (STREIFEN[index + 1] - 4) * sourceScale;
  const oc = document.createElement("canvas");
  oc.width = W * dpr; oc.height = H * dpr;
  // "cover": das Bild füllt die Zeile immer ganz, der Überschuss wird rundum gleichmässig abgeschnitten
  const s = Math.max(oc.width / img.width, oc.height / (bottom - top));
  const sw = oc.width / s, sh = oc.height / s;
  const sx = (img.width - sw) / 2, sy = top + ((bottom - top) - sh) / 2;
  oc.getContext("2d").drawImage(img, sx, sy, sw, sh, 0, 0, oc.width, oc.height);
  const raster = new Raster(oc);
  raster.scale(1 / dpr);
  raster.position = [W / 2, y + H / 2];

  // Die Maske (CompoundPath) wird in jedem Frame neu gebaut; das Bild bleibt starr.
  row.clip = new CompoundPath({ children: [new Path.Circle([0, 0], 1)], fillColor: "#000" });
  new Group({ children: [row.clip, raster], clipped: true });
  row.raster = raster;
  row.viewY = y;
  return row;
}

/* ---------- zufällige Aktionen: Balken wachsen/schrumpfen, Kreise lösen sich ab ---------- */
function aktion(row) {
  const it = row.items, r = Math.random(), U = H + G;
  const room = row.lim - total(row);
  const bars = it.filter(x => x.t === "b"), b = bars[Math.floor(R(0, bars.length))];
  const i = it.indexOf(b), nx = it[i + 1];
  const nCirc = it.filter(x => x.t === "c" && x.tgt > 0).length;
  if (r < .4) {
    if (nx && nx.t === "c" && nx.tgt > 0 && nCirc > kreisMin && Math.random() < .5) { nx.tgt = 0; b.tgt += U; }   // Kreis wird aufgesogen
    else if (b.tgt >= 2 * U - 1 && nCirc < kreisMax && !(nx && nx.t === "c" && nx.tgt === 0)) {                // Kreis spaltet sich ab
      b.tgt -= U; it.splice(i + 1, 0, { t: "c", cur: 0, tgt: U, ph: R(0, 6.28), sp: R(1.5, 3.6) });
    }
  } else if (r < .75) {                                   // Balken ändert seine Länge
    const n = U + Math.pow(Math.random(), 1.4) * W * .32;
    if (n - b.tgt <= room) b.tgt = n;
  } else {                                                // Leerraum ändert sich → Elemente wandern
    const sp = it.filter(x => x.t === "s"), s = sp[Math.floor(R(0, sp.length))];
    const n = Math.random() < .35 ? 0 : R(0, W * .28);
    if (n - s.tgt <= room) s.tgt = n;
  }
}

/* ---------- Aufbau & Animation ---------- */
function build() {
  W = canvas.parentElement.clientWidth;
  mobil = W < HANDY_BREITE;
  // Reserviert oben und unten je 24 px Luft und skaliert die Zeilen passend ein.
  const maxHoehe = Math.max(1, (window.innerHeight - 64 - 48) / (ANZAHL + (ANZAHL - 1) * .2));
  const gewuenschteHoehe = mobil ? Math.max(60, Math.min(84, W * .2)) : Math.max(22, Math.min(64, W / 16));
  H = Math.min(gewuenschteHoehe, maxHoehe);
  G = H * .3; VG = H * .2;
  // Handy: weniger Kreise pro Zeile, damit es nicht überfüllt wirkt
  kreisMin = mobil ? 1 : 3;
  kreisMax = mobil ? 4 : 8;
  paper.project.clear();
  paper.view.viewSize = new Size(W, gesamtHoehe());
  document.body.classList.remove("project-grid-visible");
  setGridHidden(true);
  shadeLayer.style.height = `${gesamtHoehe()}px`;   // Höhe der Abdunkel-Ebene passt sich der Zeilenzahl an
  rowShades.forEach((shade, i) => {
    shade.style.top = `${i * (H + VG)}px`;
    shade.style.height = `${H}px`;
  });
  rows = Array.from({ length: ANZAHL }, (_, i) => neueZeile(i));
  setActiveRow(-1);
  startOverviewIntro();
}

paper.view.onFrame = e => {
  if (!rows.length) return;
  const dt = Math.min(.05, e.delta), k = 1 - Math.exp(-dt * 4.5), T = e.time;
  const r = H / 2, maxD = H + G + H * .5;            // ab dieser Distanz reisst die Brücke ab

  rows.forEach(row => {
    if (selectedProject >= 0 && rows[selectedProject] !== row) {
      row.clip.removeChildren();
      return;
    }
    const it = row.items;
    const isHovered = rows.indexOf(row) === activeRow;
    const hoverTarget = isHovered ? 1 : 0;
    if (overviewIntro.active) {
      const introElapsed = (performance.now() - overviewIntro.start) / 1000;
      if (introElapsed < .75) {
        const t = Math.max(0, Math.min(1, introElapsed / .75));
        row.hoverProgress = t * t * (3 - 2 * t);
      } else if (introElapsed < 1.45) {
        row.hoverProgress = 1;
      } else if (introElapsed < 2.25) {
        const t = Math.max(0, Math.min(1, (introElapsed - 1.45) / .8));
        row.hoverProgress = 1 - t * t * (3 - 2 * t);
      } else {
        row.hoverProgress = 0;
      }
    } else {
      // Grössere Zahl = schnellere Balken-Verbreiterung
      const hoverGeschwindigkeit = mobil ? 5 : 2;
      row.hoverProgress += (hoverTarget - row.hoverProgress) * (1 - Math.exp(-dt * hoverGeschwindigkeit));
    }
    if (!isHovered) {
      row.next -= dt;
      if (row.next < 0) { aktion(row); row.next = R(...NAECHSTE_AKTION); }
      it.forEach(i => { if (i.t !== "f") i.cur += (i.tgt - i.cur) * k; });
      for (let j = it.length - 1; j >= 0; j--) if (it[j].t === "c" && it[j].tgt === 0 && it[j].cur < .5) it.splice(j, 1);
    }

    const flexCount = it.filter(i => i.t === "f").length;
    const rest = Math.max(0, W - it.reduce((s, i) => s + (i.t === "f" ? 0 : i.cur), 0)) / Math.max(1, flexCount);
    const targetY = selectedProject === rows.indexOf(row) ? 0 : row.y;
    row.viewY += (targetY - row.viewY) * k;
    const y = row.viewY, shapes = [], p = row.hoverProgress;
    const smoothing = Math.max(0, Math.min(1, (p - .45) / .55));
    const innerRadius = r * (1 - smoothing);
    row.raster.position = [W / 2, y + H / 2];
    let x = 0;
    it.forEach(i => {
      const a = i.t === "f" ? rest : i.cur;
      if (i.t === "b") {                                           // Balken "atmet"
        const m = Math.sin(T * i.sp + i.ph) * H * .45 * (1 - p);
        shapes.push([x - m * .5, Math.max(H, a - G + m)]);
      } else if (i.t === "c") {                                    // Kreis pendelt
        const off = Math.sin(T * i.sp + i.ph) * H * SCHWINGUNG * Math.min(1, a / (H + G)) * (1 - p);
        shapes.push([x + a - H - G + off, H]);
      }
      x += a;
    });
    if (p > 0 && shapes.length) {
      shapes.sort((a, b) => a[0] - b[0]);
      const original = shapes.map(([left, width]) => [left, left + width]);

      // Schritt 1: Die Formen wachsen in die Lücken und verbinden sich.
      const closeGaps = Math.min(1, p / .45);
      shapes.forEach((shape, i) => {
        const leftGap = i > 0 ? Math.max(0, original[i][0] - original[i - 1][1]) : 0;
        const rightGap = i < shapes.length - 1 ? Math.max(0, original[i + 1][0] - original[i][1]) : 0;
        const growLeft = leftGap * .6 * closeGaps;
        const growRight = rightGap * .6 * closeGaps;
        shape[0] -= growLeft;
        shape[1] += growLeft + growRight;
      });

      // Schritt 2: Danach ziehen die Enden auf fast volle Breite.
      const extend = Math.max(0, Math.min(1, (p - .45) / .55));
      if (extend > 0) {
        const first = shapes[0];
        const last = shapes[shapes.length - 1];
        const firstRight = first[0] + first[1];
        const lastRight = last[0] + last[1];
        const newLeft = first[0] * (1 - extend) + W * .015 * extend;
        const newRight = lastRight * (1 - extend) + W * .985 * extend;
        first[1] = firstRight - newLeft;
        first[0] = newLeft;
        last[1] = newRight - last[0];
      }
    }
    shapes.sort((p, q) => p[0] + p[1] / 2 - q[0] - q[1] / 2);

    // Pillen (Balken/Kreise) + Brücken zwischen benachbarten Elementen
    const parts = shapes.map(([l, w], index) => {
      const first = index === 0;
      const last = index === shapes.length - 1;
      return roundedShape(
        l, y, w, H,
        first ? r : innerRadius,
        last ? r : innerRadius,
        last ? r : innerRadius,
        first ? r : innerRadius
      );
    });
    for (let j = 0; j + 1 < shapes.length; j++) {
      const a = shapes[j][0] + shapes[j][1] - r, b = shapes[j + 1][0] + r, d = b - a;
      if (d <= 1 || d >= maxD) continue;
      const kk = .5 * Math.min(1, (maxD - d) / (H * .5)) * (1 - smoothing);
      if (kk >= .03) parts.push(neck(new Point(a, y + r), new Point(b, y + r), r, kk));
    }
    row.clip.removeChildren();
    row.clip.addChildren(parts);
  });

  if (overviewIntro.active && performance.now() - overviewIntro.start >= 2250) {
    overviewIntro.active = false;
  }

  if (pendingHandyProject >= 0) {
    const pendingRow = rows[pendingHandyProject];
    if (pendingRow && pendingRow.hoverProgress >= .995) {
      openProject(pendingHandyProject);
    }
  }

  const selectedRow = selectedProject >= 0 ? rows[selectedProject] : null;
  if (selectedRow && !document.body.classList.contains("project-grid-visible") && Math.abs(selectedRow.viewY) < .5) {
    paper.view.viewSize = new Size(W, H);
    document.body.classList.add("project-grid-visible");
    setGridHidden(false);
  }
};

img = new Image();
img.onload = build;
img.src = BILD;
let timer; addEventListener("resize", () => { clearTimeout(timer); timer = setTimeout(() => img.complete && build(), 150); });
