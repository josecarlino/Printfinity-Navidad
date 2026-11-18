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
  var COLORS = { red: "#D8434A", green: "#3FB57F", gold: "#E9B659", snow: "#F1F5F0" };
  var SOLID = { red: ["#F26C70", "#AC2C36"], green: ["#66D6A0", "#288A5E"], gold: ["#F8D892", "#C48A2A"], snow: ["#FFFFFF", "#C5D3CB"] };
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
