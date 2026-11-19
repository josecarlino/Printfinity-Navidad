// Ilustraciones de categorías, en colores lisos con un degradado suave.
// Los degradados (y el patrón de capas del árbol de la portada) se definen en un <svg>
// compartido (ver window.PF.defs). No hace falta editar este archivo para usar el sitio.
(function () {
  var TONES = { rojo: "red", verde: "green", oro: "gold", nieve: "snow" };

  function star(cx, cy, R, r, n) {
    n = n || 5;
    var pts = [];
    for (var i = 0; i < n * 2; i++) {
      var rad = i % 2 === 0 ? R : r;
      var a = -Math.PI / 2 + (i * Math.PI) / n;
      pts.push((cx + rad * Math.cos(a)).toFixed(1) + "," + (cy + rad * Math.sin(a)).toFixed(1));
    }
    return pts.join(" ");
  }

  // Un foco de la guirnalda: halo, casquillo y bombilla, girado sobre el cable.
  function bulb(x, y, deg, color) {
    var t = "translate(" + x + " " + y + ") rotate(" + deg + ") scale(1.25)";
    return [
      ["circle", { cx: 0, cy: 22, r: 15, transform: t, opacity: ".28", fill: color }],
      ["path", { d: "M-8 8 C-13 18 -7 32 0 34 C7 32 13 18 8 8 Z", transform: t, fill: color }],
      ["ellipse", { cx: -3.5, cy: 17, rx: 2, ry: 5, transform: t, fill: "shine" }],
      ["rect", { x: -5, y: 0, width: 10, height: 9, rx: 2, transform: t, fill: "green" }]
    ];
  }

  // "main" = color del tono de la categoría; "bg" = fondo sólido (para recortes).
  var ART = {
    esfera: [
      ["path", { d: "M54 22 a6 6 0 1 1 12 0", stroke: "gold" }],
      ["rect", { x: 50, y: 24, width: 20, height: 12, rx: 2, fill: "gold" }],
      ["circle", { cx: 60, cy: 72, r: 38, fill: "main" }],
      ["ellipse", { cx: 44, cy: 52, rx: 7, ry: 11, transform: "rotate(35 44 52)", fill: "shine" }],
      ["path", { d: "M23 64 Q60 80 97 64 L98 76 Q60 92 22 76 Z", fill: "gold" }]
    ],
    grinch: [
      ["rect", { x: 83, y: 2, width: 2, height: 18, fill: "gold" }],
      ["rect", { x: 78, y: 18, width: 12, height: 8, rx: 2, fill: "gold" }],
      ["circle", { cx: 84, cy: 48, r: 23, fill: "red" }],
      ["ellipse", { cx: 75, cy: 38, rx: 4, ry: 7, transform: "rotate(35 75 38)", fill: "shine" }],
      ["path", { d: "M-4 124 40 82", stroke: "red", w: 30 }],
      ["path", { d: "M36 88 46 78", stroke: "snow", w: 36 }],
      ["circle", { cx: 60, cy: 66, r: 14, fill: "green" }],
      ["path", { d: "M62 58Q64 42 74 36M68 64Q78 56 84 46M70 72Q84 70 92 60", stroke: "green", w: 7 }],
      ["path", { d: "M52 74Q46 66 52 58", stroke: "green", w: 7 }]
    ],
    // Gato con gorro navideño.
    gato: [
      ["polygon", { points: "28,64 30,30 54,50", fill: "main" }],
      ["polygon", { points: "34,56 35,40 46,50", fill: "red" }],
      ["polygon", { points: "92,64 90,30 66,50", fill: "main" }],
      ["ellipse", { cx: 60, cy: 76, rx: 36, ry: 30, fill: "main" }],
      ["ellipse", { cx: 46, cy: 62, rx: 6, ry: 9, transform: "rotate(35 46 62)", fill: "shine" }],
      ["path", { d: "M50 48 C54 26 76 12 98 18 C106 20 108 30 102 36 C92 30 84 36 82 48 Z", fill: "red" }],
      ["circle", { cx: 102, cy: 36, r: 7, fill: "snow" }],
      ["rect", { x: 44, y: 42, width: 46, height: 11, rx: 5.5, transform: "rotate(-10 67 47)", fill: "snow" }],
      ["ellipse", { cx: 47, cy: 76, rx: 4, ry: 6, fill: "bg" }],
      ["ellipse", { cx: 73, cy: 76, rx: 4, ry: 6, fill: "bg" }],
      ["polygon", { points: "55,87 65,87 60,93", fill: "red" }],
      ["path", { d: "M60 93 Q56 99 51 96 M60 93 Q64 99 69 96", stroke: "bg", w: 2.5 }],
      ["path", { d: "M16 82 L38 85 M18 94 L38 91 M104 82 L82 85 M102 94 L82 91", stroke: "snow", w: 1.6 }]
    ],
    // Dos árboles: uno verde y otro blanco.
    arboles: [
      ["path", { d: "M46 16 L66 42 H57 L76 68 H64 L84 96 H8 L28 68 H16 L35 42 H26 Z", fill: "green" }],
      ["rect", { x: 40, y: 96, width: 12, height: 12, fill: "gold" }],
      ["polygon", { points: star(46, 14, 8, 3.4), fill: "gold" }],
      ["circle", { cx: 40, cy: 56, r: 3.5, fill: "red" }],
      ["circle", { cx: 56, cy: 80, r: 3.5, fill: "gold" }],
      ["circle", { cx: 30, cy: 86, r: 3.5, fill: "red" }],
      ["path", { d: "M92 44 L106 64 H99 L113 84 H105 L118 102 H66 L79 84 H71 L85 64 H78 Z", fill: "snow" }],
      ["rect", { x: 88, y: 102, width: 8, height: 8, fill: "gold" }],
      ["circle", { cx: 88, cy: 76, r: 3, fill: "red" }],
      ["circle", { cx: 100, cy: 92, r: 3, fill: "green" }]
    ],
    // Reno con bufanda.
    reno: [
      ["path", { d: "M44 40 C38 26 36 18 28 8 M37 26 C30 24 24 26 18 20 M76 40 C82 26 84 18 92 8 M83 26 C90 24 96 26 102 20", stroke: "gold", w: 6 }],
      ["ellipse", { cx: 32, cy: 54, rx: 13, ry: 6, transform: "rotate(-25 32 54)", fill: "brown" }],
      ["ellipse", { cx: 88, cy: 54, rx: 13, ry: 6, transform: "rotate(25 88 54)", fill: "brown" }],
      ["path", { d: "M60 36 C80 36 88 52 86 70 C84 90 74 104 60 104 C46 104 36 90 34 70 C32 52 40 36 60 36 Z", fill: "brown" }],
      ["ellipse", { cx: 50, cy: 52, rx: 5, ry: 9, transform: "rotate(30 50 52)", fill: "shine" }],
      ["ellipse", { cx: 60, cy: 88, rx: 17, ry: 13, fill: "gold" }],
      ["ellipse", { cx: 60, cy: 83, rx: 7, ry: 5, fill: "bg" }],
      ["circle", { cx: 49, cy: 66, r: 3.6, fill: "bg" }],
      ["circle", { cx: 71, cy: 66, r: 3.6, fill: "bg" }],
      ["path", { d: "M30 106 Q60 120 90 106 L92 116 Q60 130 28 116 Z", fill: "red" }]
    ],
    // Guirnalda de focos.
    luces: [
      ["path", { d: "M0 34 Q30 58 60 44 Q90 30 120 54", stroke: "green", w: 3 }]
    ].concat(bulb(19, 45, -12, "red"), bulb(45, 49, 6, "gold"), bulb(78, 39, -6, "snow"), bulb(104, 44, 12, "red")),
    // Impresora 3D terminando un castillo.
    obra: [
      ["rect", { x: 12, y: 14, width: 6, height: 92, rx: 2, fill: "green" }],
      ["rect", { x: 102, y: 14, width: 6, height: 92, rx: 2, fill: "green" }],
      ["rect", { x: 10, y: 10, width: 100, height: 7, rx: 3, fill: "green" }],
      ["path", { d: "M30 100 V66 H37 V72 H44 V66 H51 V100 Z M69 100 V66 H76 V72 H83 V66 H90 V100 Z", fill: "main" }],
      ["path", { d: "M48 100 V54 H54 V60 H60 V54 H66 V60 H72 V54 V100 Z", fill: "main" }],
      ["rect", { x: 30, y: 74, width: 60, height: 5, fill: "shade" }],
      ["path", { d: "M53 100 V88 a7 7 0 0 1 14 0 V100 Z", fill: "bg" }],
      ["rect", { x: 6, y: 100, width: 108, height: 8, rx: 3, fill: "gold" }],
      ["rect", { x: 18, y: 34, width: 84, height: 4, rx: 2, fill: "snow" }],
      ["rect", { x: 52, y: 26, width: 16, height: 14, rx: 3, fill: "snow" }],
      ["polygon", { points: "56,40 64,40 61,47 59,47", fill: "gold" }],
      ["polygon", { points: star(96, 52, 7, 2.6, 4), fill: "gold" }],
      ["polygon", { points: star(24, 48, 5, 1.9, 4), fill: "gold" }]
    ],
    arbol: [
      ["path", { d: "M60 10 L86 44 H73 L96 74 H80 L104 102 H16 L40 74 H24 L47 44 H34 Z", fill: "main" }],
      ["rect", { x: 52, y: 102, width: 16, height: 12, fill: "gold" }],
      ["circle", { cx: 50, cy: 60, r: 4, fill: "red" }],
      ["circle", { cx: 72, cy: 84, r: 4, fill: "gold" }],
      ["circle", { cx: 44, cy: 90, r: 4, fill: "snow" }]
    ],
    nacimiento: [
      ["polygon", { points: star(60, 13, 9, 4), fill: "gold" }],
      ["path", { d: "M12 58 L60 26 L108 58 Z", fill: "main" }],
      ["rect", { x: 22, y: 58, width: 76, height: 50, fill: "green" }],
      ["path", { d: "M44 108 V84 a16 16 0 0 1 32 0 V108 Z", fill: "bg" }]
    ],
    gorro: [
      ["path", { d: "M22 84 C28 52 52 26 84 22 C98 20 106 32 100 46 C86 40 72 52 66 84 Z", fill: "main" }],
      ["circle", { cx: 100, cy: 50, r: 11, fill: "snow" }],
      ["rect", { x: 12, y: 80, width: 80, height: 20, rx: 10, fill: "snow" }]
    ],
    muneco: [
      ["circle", { cx: 60, cy: 86, r: 27, fill: "main" }],
      ["circle", { cx: 60, cy: 46, r: 17, fill: "main" }],
      ["rect", { x: 46, y: 12, width: 28, height: 16, fill: "green" }],
      ["rect", { x: 39, y: 26, width: 42, height: 6, rx: 2, fill: "green" }],
      ["rect", { x: 40, y: 60, width: 40, height: 8, rx: 4, fill: "red" }],
      ["circle", { cx: 54, cy: 44, r: 2.6, fill: "bg" }],
      ["circle", { cx: 66, cy: 44, r: 2.6, fill: "bg" }],
      ["polygon", { points: "59,49 61,49 76,53", fill: "gold" }]
    ],
    estrella: [
      ["polygon", { points: star(60, 62, 50, 21), fill: "main" }],
      ["circle", { cx: 60, cy: 62, r: 9, fill: "snow" }]
    ],
    regalo: [
      ["rect", { x: 20, y: 54, width: 80, height: 56, rx: 3, fill: "main" }],
      ["rect", { x: 20, y: 56, width: 80, height: 6, fill: "shade" }],
      ["rect", { x: 14, y: 40, width: 92, height: 16, rx: 3, fill: "main" }],
      ["rect", { x: 54, y: 40, width: 12, height: 70, fill: "gold" }],
      ["path", { d: "M60 40 C46 16 26 26 44 40 Z M60 40 C74 16 94 26 76 40 Z", fill: "gold" }]
    ],
    campana: [
      ["path", { d: "M60 22 C47 9 34 13 28 22 C38 25 50 27 60 22 Z", fill: "green" }],
      ["path", { d: "M60 22 C73 9 86 13 92 22 C82 25 70 27 60 22 Z", fill: "green" }],
      ["path", { d: "M60 26 C42 26 36 46 36 64 C36 78 28 84 22 92 H98 C92 84 84 78 84 64 C84 46 78 26 60 26 Z", fill: "main" }],
      ["circle", { cx: 60, cy: 100, r: 8, fill: "main" }],
      ["path", { d: "M48 38 C44 46 43 56 43 66", stroke: "shine" }],
      ["circle", { cx: 56, cy: 20, r: 4, fill: "red" }],
      ["circle", { cx: 64, cy: 20, r: 4, fill: "red" }]
    ]
  };

  function paint(key, tone) {
    if (key === "bg") return "var(--art-bg)";
    if (key === "shine") return "rgba(255,255,255,.32)";
    if (key === "shade") return "rgba(6,23,19,.2)";
    var color = key === "main" ? TONES[tone] || "red" : key;
    return "url(#pf-solid-" + color + ")";
  }

  function render(cat) {
    var shapes = ART[cat.art] || ART.campana;
    var body = shapes.map(function (s) {
      var tag = s[0], a = s[1], attrs = "";
      Object.keys(a).forEach(function (k) {
        if (k === "fill") attrs += ' fill="' + paint(a.fill, cat.tone) + '"';
        else if (k === "w") return;
        else if (k === "stroke") attrs += ' fill="none" stroke-width="' + (a.w || 4) + '" stroke-linecap="round" stroke="' + paint(a.stroke, cat.tone) + '"';
        else attrs += " " + k + '="' + a[k] + '"';
      });
      return "<" + tag + attrs + "/>";
    }).join("");
    return '<svg class="art" viewBox="0 0 120 120" aria-hidden="true" focusable="false">' + body + "</svg>";
  }

  // Patrones de capas compartidos por todas las ilustraciones de la página.
  var COLORS = { red: "#D8434A", green: "#3FB57F", gold: "#E9B659", snow: "#F1F5F0", brown: "#A26F3E" };
  var SOLID = { red: ["#F26C70", "#AC2C36"], green: ["#66D6A0", "#288A5E"], gold: ["#F8D892", "#C48A2A"], snow: ["#FFFFFF", "#C5D3CB"], brown: ["#C9925C", "#74481F"] };
  function defs() {
    var p = Object.keys(COLORS).map(function (k) {
      return '<pattern id="pf-layers-' + k + '" width="6" height="3.2" patternUnits="userSpaceOnUse">' +
        '<rect width="6" height="2.3" rx="1.1" fill="' + COLORS[k] + '"/></pattern>';
    }).join("");
    // Degradados lisos (claro arriba-izquierda, oscuro abajo-derecha) para las ilustraciones.
    p += Object.keys(SOLID).map(function (k) {
      var s = SOLID[k];
      return '<linearGradient id="pf-solid-' + k + '" x1="0" y1="0" x2="1" y2="1">' +
        '<stop offset="0" stop-color="' + s[0] + '"/><stop offset=".5" stop-color="' + COLORS[k] + '"/>' +
        '<stop offset="1" stop-color="' + s[1] + '"/></linearGradient>';
    }).join("");
    var holder = document.createElement("div");
    holder.innerHTML = '<svg width="0" height="0" style="position:absolute" aria-hidden="true"><defs>' + p + "</defs></svg>";
    document.body.prepend(holder.firstChild);
  }

  function whatsappUrl(text) {
    var cfg = window.SITE_CONFIG || {};
    return "https://wa.me/" + cfg.whatsappNumber + "?text=" + encodeURIComponent(text || cfg.whatsappGreeting || "Hola");
  }

  function cover(cat, cls) {
    if (cat.image) {
      return '<img class="' + (cls || "") + ' cover-img" src="' + cat.image + '" alt="' + (cat.imageAlt || "") + '" loading="lazy">';
    }
    return render(cat);
  }

  var ICONS = {
    arrow: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14m-6-6 6 6-6 6" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    back: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19 12H5m6-6-6 6 6 6" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    whatsapp: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.2-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.7.7 2.3.8 3.2.6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.5-.3Z"/></svg>'
  };

  function pad(n) { return (n < 10 ? "0" : "") + n; }

  // Comportamiento común: la cabecera gana borde al hacer scroll.
  function chrome() {
    var header = document.getElementById("site-header");
    if (!header) return;
    function onScroll() { header.classList.toggle("scrolled", window.scrollY > 8); }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  // Aparición suave de elementos .reveal al entrar en pantalla.
  function reveal(root) {
    var els = (root || document).querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      els.forEach(function (el) { el.classList.add("in"); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
      });
    }, { rootMargin: "0px 0px -8% 0px" });
    els.forEach(function (el) { io.observe(el); });
  }

  window.PF = { render: render, cover: cover, defs: defs, whatsappUrl: whatsappUrl, icons: ICONS, pad: pad, chrome: chrome, reveal: reveal };
})();
