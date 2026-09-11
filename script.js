const CATEGORIES = {
  "Alkali Metal":        "#f85149",
  "Alkaline Earth Metal":"#ff7b72",
  "Transition Metal":    "#ffa657",
  "Post-transition Metal":"#ffd43b",
  "Metalloid":           "#a5d6ff",
  "Nonmetal":            "#63e6be",
  "Halogen":             "#39d353",
  "Noble Gas":           "#74c0fc",
  "Lanthanide":          "#d2a8ff",
  "Actinide":            "#f778ba",
  "Unknown":             "#8b949e",
};

// [atomic number, symbol, name, atomic mass, category, group (column), period (row)]
const ELEMENTS = [
  [1,"H","Hydrogen",1.008,"Nonmetal",1,1],
  [2,"He","Helium",4.0026,"Noble Gas",18,1],
  [3,"Li","Lithium",6.94,"Alkali Metal",1,2],
  [4,"Be","Beryllium",9.0122,"Alkaline Earth Metal",2,2],
  [5,"B","Boron",10.81,"Metalloid",13,2],
  [6,"C","Carbon",12.011,"Nonmetal",14,2],
  [7,"N","Nitrogen",14.007,"Nonmetal",15,2],
  [8,"O","Oxygen",15.999,"Nonmetal",16,2],
  [9,"F","Fluorine",18.998,"Halogen",17,2],
  [10,"Ne","Neon",20.180,"Noble Gas",18,2],
  [11,"Na","Sodium",22.990,"Alkali Metal",1,3],
  [12,"Mg","Magnesium",24.305,"Alkaline Earth Metal",2,3],
  [13,"Al","Aluminium",26.982,"Post-transition Metal",13,3],
  [14,"Si","Silicon",28.085,"Metalloid",14,3],
  [15,"P","Phosphorus",30.974,"Nonmetal",15,3],
  [16,"S","Sulfur",32.06,"Nonmetal",16,3],
  [17,"Cl","Chlorine",35.45,"Halogen",17,3],
  [18,"Ar","Argon",39.95,"Noble Gas",18,3],
  [19,"K","Potassium",39.098,"Alkali Metal",1,4],
  [20,"Ca","Calcium",40.078,"Alkaline Earth Metal",2,4],
  [21,"Sc","Scandium",44.956,"Transition Metal",3,4],
  [22,"Ti","Titanium",47.867,"Transition Metal",4,4],
  [23,"V","Vanadium",50.942,"Transition Metal",5,4],
  [24,"Cr","Chromium",51.996,"Transition Metal",6,4],
  [25,"Mn","Manganese",54.938,"Transition Metal",7,4],
  [26,"Fe","Iron",55.845,"Transition Metal",8,4],
  [27,"Co","Cobalt",58.933,"Transition Metal",9,4],
  [28,"Ni","Nickel",58.693,"Transition Metal",10,4],
  [29,"Cu","Copper",63.546,"Transition Metal",11,4],
  [30,"Zn","Zinc",65.38,"Transition Metal",12,4],
  [31,"Ga","Gallium",69.723,"Post-transition Metal",13,4],
  [32,"Ge","Germanium",72.630,"Metalloid",14,4],
  [33,"As","Arsenic",74.922,"Metalloid",15,4],
  [34,"Se","Selenium",78.971,"Nonmetal",16,4],
  [35,"Br","Bromine",79.904,"Halogen",17,4],
  [36,"Kr","Krypton",83.798,"Noble Gas",18,4],
  [37,"Rb","Rubidium",85.468,"Alkali Metal",1,5],
  [38,"Sr","Strontium",87.62,"Alkaline Earth Metal",2,5],
  [39,"Y","Yttrium",88.906,"Transition Metal",3,5],
  [40,"Zr","Zirconium",91.224,"Transition Metal",4,5],
  [41,"Nb","Niobium",92.906,"Transition Metal",5,5],
  [42,"Mo","Molybdenum",95.95,"Transition Metal",6,5],
  [43,"Tc","Technetium","(98)","Transition Metal",7,5],
  [44,"Ru","Ruthenium",101.07,"Transition Metal",8,5],
  [45,"Rh","Rhodium",102.91,"Transition Metal",9,5],
  [46,"Pd","Palladium",106.42,"Transition Metal",10,5],
  [47,"Ag","Silver",107.87,"Transition Metal",11,5],
  [48,"Cd","Cadmium",112.41,"Transition Metal",12,5],
  [49,"In","Indium",114.82,"Post-transition Metal",13,5],
  [50,"Sn","Tin",118.73,"Post-transition Metal",14,5],
  [51,"Sb","Antimony",121.76,"Metalloid",15,5],
  [52,"Te","Tellurium",127.60,"Metalloid",16,5],
  [53,"I","Iodine",126.90,"Halogen",17,5],
  [54,"Xe","Xenon",131.29,"Noble Gas",18,5],
  [55,"Cs","Caesium",132.91,"Alkali Metal",1,6],
  [56,"Ba","Barium",137.33,"Alkaline Earth Metal",2,6],
  [57,"La","Lanthanum",138.91,"Lanthanide",3,6],
  [58,"Ce","Cerium",140.12,"Lanthanide",4,6],
  [59,"Pr","Praseodymium",140.91,"Lanthanide",5,6],
  [60,"Nd","Neodymium",144.24,"Lanthanide",6,6],
  [61,"Pm","Promethium","(145)","Lanthanide",7,6],
  [62,"Sm","Samarium",150.50,"Lanthanide",8,6],
  [63,"Eu","Europium",151.96,"Lanthanide",9,6],
  [64,"Gd","Gadolinium",157.25,"Lanthanide",10,6],
  [65,"Tb","Terbium",158.93,"Lanthanide",11,6],
  [66,"Dy","Dysprosium",162.50,"Lanthanide",12,6],
  [67,"Ho","Holmium",164.93,"Lanthanide",13,6],
  [68,"Er","Erbium",167.26,"Lanthanide",14,6],
  [69,"Tm","Thulium",168.93,"Lanthanide",15,6],
  [70,"Yb","Ytterbium",173.05,"Lanthanide",16,6],
  [71,"Lu","Lutetium",174.97,"Lanthanide",17,6],
  [72,"Hf","Hafnium",178.49,"Transition Metal",4,6],
  [73,"Ta","Tantalum",180.95,"Transition Metal",5,6],
  [74,"W","Tungsten",183.84,"Transition Metal",6,6],
  [75,"Re","Rhenium",186.21,"Transition Metal",7,6],
  [76,"Os","Osmium",190.23,"Transition Metal",8,6],
  [77,"Ir","Iridium",192.22,"Transition Metal",9,6],
  [78,"Pt","Platinum",195.08,"Transition Metal",10,6],
  [79,"Au","Gold",196.97,"Transition Metal",11,6],
  [80,"Hg","Mercury",200.59,"Transition Metal",12,6],
  [81,"Tl","Thallium",204.38,"Post-transition Metal",13,6],
  [82,"Pb","Lead",207.2,"Post-transition Metal",14,6],
  [83,"Bi","Bismuth",208.98,"Post-transition Metal",15,6],
  [84,"Po","Polonium","(209)","Post-transition Metal",16,6],
  [85,"At","Astatine","(210)","Halogen",17,6],
  [86,"Rn","Radon","(222)","Noble Gas",18,6],
  [87,"Fr","Francium","(223)","Alkali Metal",1,7],
  [88,"Ra","Radium","(226)","Alkaline Earth Metal",2,7],
  [89,"Ac","Actinium","(227)","Actinide",3,7],
  [90,"Th","Thorium",232.04,"Actinide",4,7],
  [91,"Pa","Protactinium",231.04,"Actinide",5,7],
  [92,"U","Uranium",238.03,"Actinide",6,7],
  [93,"Np","Neptunium","(237)","Actinide",7,7],
  [94,"Pu","Plutonium","(244)","Actinide",8,7],
  [95,"Am","Americium","(243)","Actinide",9,7],
  [96,"Cm","Curium","(247)","Actinide",10,7],
  [97,"Bk","Berkelium","(247)","Actinide",11,7],
  [98,"Cf","Californium","(251)","Actinide",12,7],
  [99,"Es","Einsteinium","(252)","Actinide",13,7],
  [100,"Fm","Fermium","(257)","Actinide",14,7],
  [101,"Md","Mendelevium","(258)","Actinide",15,7],
  [102,"No","Nobelium","(259)","Actinide",16,7],
  [103,"Lr","Lawrencium","(266)","Actinide",17,7],
  [104,"Rf","Rutherfordium","(267)","Transition Metal",4,7],
  [105,"Db","Dubnium","(268)","Transition Metal",5,7],
  [106,"Sg","Seaborgium","(269)","Transition Metal",6,7],
  [107,"Bh","Bohrium","(270)","Transition Metal",7,7],
  [108,"Hs","Hassium","(277)","Transition Metal",8,7],
  [109,"Mt","Meitnerium","(278)","Unknown",9,7],
  [110,"Ds","Darmstadtium","(281)","Unknown",10,7],
  [111,"Rg","Roentgenium","(282)","Unknown",11,7],
  [112,"Cn","Copernicium","(285)","Transition Metal",12,7],
  [113,"Nh","Nihonium","(286)","Unknown",13,7],
  [114,"Fl","Flerovium","(289)","Unknown",14,7],
  [115,"Mc","Moscovium","(290)","Unknown",15,7],
  [116,"Lv","Livermorium","(293)","Unknown",16,7],
  [117,"Ts","Tennessine","(294)","Unknown",17,7],
  [118,"Og","Oganesson","(294)","Unknown",18,7],
];

const table = document.getElementById("periodic-table");
const tooltip = document.getElementById("tooltip");

// Legend
const legend = document.getElementById("legend");
for (const [name, color] of Object.entries(CATEGORIES)) {
  const span = document.createElement("span");
  span.innerHTML = `<i style="background:${color}"></i>${name}`;
  legend.appendChild(span);
}

// Spacer to push main table right of lanthanide/actinide markers
const spacer = document.createElement("div");
spacer.className = "element placeholder";
spacer.style.setProperty("--col", "3");
spacer.style.setProperty("--row", "8");
table.appendChild(spacer);

ELEMENTS.forEach(([num, sym, name, mass, cat, col, row]) => {
  const el = document.createElement("div");
  el.className = "element";
  const color = CATEGORIES[cat];
  el.style.setProperty("--cat-color", color);

  let r = row, isFBlock = false;
  if (row === 6 && cat === "Lanthanide") { r = 9; isFBlock = true; }
  if (row === 7 && cat === "Actinide")   { r = 10; isFBlock = true; }
  let c = col;
  if (isFBlock) c = col - 2; // La..Lu -> columns 3..17 in the f-block rows

  el.style.setProperty("--col", c);
  el.style.setProperty("--row", r);
  el.innerHTML = `
    <span class="num">${num}</span>
    <span class="symbol">${sym}</span>
    <span class="name">${name}</span>
    <span class="mass">${typeof mass === "number" ? mass.toFixed(2) : mass}</span>
  `;

  el.addEventListener("mouseenter", (e) => showTooltip(el, num, sym, name, mass, cat, color));
  el.addEventListener("mousemove", (e) => moveTooltip(e));
  el.addEventListener("mouseleave", hideTooltip);
  el.addEventListener("click", () => {
    window.open(`https://en.wikipedia.org/wiki/Element_${num}`, "_blank");
  });
  table.appendChild(el);
});

// Placeholder cells for empty gaps (keep grid shape clean)
[[3,1],[4,1],[5,1],[6,1],[7,1],[8,1],[9,1],[10,1],[11,1],[12,1],
 [3,2],[4,2],[5,2],[6,2],[7,2],[8,2],[9,2],[10,2],[11,2],[12,2]]
.forEach(([c, r]) => {
  const p = document.createElement("div");
  p.className = "element placeholder";
  p.style.setProperty("--col", c);
  p.style.setProperty("--row", r);
  table.appendChild(p);
});

function showTooltip(el, num, sym, name, mass, cat, color) {
  tooltip.style.setProperty("--cat-color", color);
  const massStr = typeof mass === "number" ? mass.toFixed(3) + " u" : mass + " u";
  const block = { "Alkali Metal":"s", "Alkaline Earth Metal":"s", "Transition Metal":"d",
    "Post-transition Metal":"d/p", "Metalloid":"p", "Nonmetal":"p", "Halogen":"p",
    "Noble Gas":"p", "Lanthanide":"f", "Actinide":"f", "Unknown":"?" }[cat];
  tooltip.innerHTML = `
    <h3><span class="sym">${sym}</span><span>${name}</span></h3>
    <span class="cat">${cat}</span>
    <table>
      <tr><td>Atomic number</td><td>${num}</td></tr>
      <tr><td>Atomic mass</td><td>${massStr}</td></tr>
      <tr><td>Group</td><td>${cat === "Lanthanide" || cat === "Actinide" ? "f-block" : el.style.getPropertyValue("--col").trim()}</td></tr>
      <tr><td>Period</td><td>${el.style.getPropertyValue("--row").trim() > 8 ? (el.style.getPropertyValue("--row").trim() - 3) : el.style.getPropertyValue("--row").trim()}</td></tr>
      <tr><td>Block</td><td>${block}</td></tr>
    </table>
    <div class="hint">Click to open Wikipedia</div>
  `;
  tooltip.classList.add("visible");
}
function moveTooltip(e) {
  const pad = 16;
  const w = tooltip.offsetWidth, h = tooltip.offsetHeight;
  let x = e.clientX + pad, y = e.clientY + pad;
  if (x + w > window.innerWidth - 8)  x = e.clientX - w - pad;
  if (y + h > window.innerHeight - 8) y = e.clientY - h - pad;
  tooltip.style.left = x + "px";
  tooltip.style.top = y + "px";
}
function hideTooltip() {
  tooltip.classList.remove("visible");
}
