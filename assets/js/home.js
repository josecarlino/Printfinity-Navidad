(function () {
  var cats = window.CATALOG_CATEGORIES || [];
  PF.defs();
  PF.chrome();

  document.getElementById("hero-whatsapp").href = PF.whatsappUrl();

  // Contadores
  document.getElementById("hero-cta").textContent = "Ver los " + cats.length + " catálogos";
  document.getElementById("fact-count").textContent = cats.length + " catálogos";
  document.getElementById("category-count").textContent = cats.length + " Catálogos";

  // Etiquetas de categoría
  document.getElementById("category-grid").innerHTML = cats.map(function (c, i) {
    return (
      '<li class="reveal" style="--i:' + (i % 4) + '">' +
        '<a class="tag" href="catalogo.html?cat=' + c.slug + '">' +
          '<div class="tag-body">' +
            '<div class="tag-art">' +
              PF.cover(c) +
              '<span class="tag-num">' + PF.pad(i + 1) + "</span>" +
              (c.embedUrl ? "" : '<span class="badge">Próximamente</span>') +
            "</div>" +
            "<h3>" + c.name + "</h3>" +
            "<p>" + c.shortDescription + "</p>" +
            '<span class="go">Ver catálogo<i>' + PF.icons.arrow + "</i></span>" +
          "</div>" +
        "</a>" +
      "</li>"
    );
  }).join("");
  PF.reveal();

  // ---------- Animación de impresión del árbol ----------
  var printer = document.getElementById("printer");
  var mask = document.getElementById("print-mask");
  var nozzle = document.getElementById("nozzle");
  var gantry = document.getElementById("gantry");
  var status = document.getElementById("print-status");
  var bar = document.getElementById("print-bar");
  var replay = document.getElementById("print-replay");
  var BOTTOM = 440, TOP = 66, LAYER = 3.2, DURATION = 5200;
  var layers = Math.ceil((BOTTOM - TOP) / LAYER);
  var start = null;

  function finish() {
    mask.setAttribute("y", 0);
    mask.setAttribute("height", BOTTOM);
    bar.style.width = "100%";
    printer.classList.add("done");
    status.textContent = "Impresión terminada · " + layers + " capas";
    replay.hidden = false;
  }

  function halfWidth(y) {
    if (y > 382) return 24;
    return Math.max(6, 142 * (y - TOP) / (382 - TOP));
  }

  function frame(t) {
    if (start === null) start = t;
    var p = Math.min(1, (t - start) / DURATION);
    var eased = p * p * (3 - 2 * p) * 0.15 + p * 0.85;
    var exact = eased * layers;
    var layer = Math.floor(exact);
    var y = BOTTOM - layer * LAYER;
    var f = exact - layer;
    var hw = halfWidth(y);
    var x = layer % 2 === 0 ? 210 - hw + f * 2 * hw : 210 + hw - f * 2 * hw;

    mask.setAttribute("y", y);
    mask.setAttribute("height", BOTTOM - y);
    nozzle.setAttribute("transform", "translate(" + x.toFixed(1) + " " + y.toFixed(1) + ")");
    gantry.setAttribute("y", (y - 34).toFixed(1));
    bar.style.width = (p * 100).toFixed(1) + "%";
    status.textContent = "Imprimiendo · capa " + Math.min(layer + 1, layers) + " de " + layers;

    if (p < 1) requestAnimationFrame(frame);
    else finish();
  }

  // Fase previa: el cabezal sube de temperatura antes de empezar a imprimir.
  var HEAT_MS = 1600, T_START = 24, T_TARGET = 210, heatStart = null;
  function heat(t) {
    if (heatStart === null) heatStart = t;
    var p = Math.min(1, (t - heatStart) / HEAT_MS);
    var temp = Math.round(T_START + (T_TARGET - T_START) * (1 - Math.pow(1 - p, 2)));
    status.textContent = "Calentando la impresora · " + temp + " °C";
    if (p < 1) { requestAnimationFrame(heat); return; }
    printer.classList.remove("heating");
    requestAnimationFrame(frame);
  }

  function print() {
    start = null;
    heatStart = null;
    replay.hidden = true;
    printer.classList.remove("done");
    printer.classList.add("heating");
    mask.setAttribute("y", BOTTOM);
    mask.setAttribute("height", 0);
    nozzle.setAttribute("transform", "translate(210 " + BOTTOM + ")");
    gantry.setAttribute("y", BOTTOM - 34);
    bar.style.width = "0%";
    requestAnimationFrame(heat);
  }

  replay.addEventListener("click", print);
  setTimeout(print, 600);

  // ---------- Nieve sutil en la portada ----------
  var canvas = document.getElementById("snow");
  if (!canvas.getContext) return;
  var ctx = canvas.getContext("2d");
  var W = 0, H = 0, flakes = [], running = false, last = 0;

  function resize() {
    var dpr = Math.min(window.devicePixelRatio || 1, 2);
    W = canvas.clientWidth; H = canvas.clientHeight;
    canvas.width = W * dpr; canvas.height = H * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    var n = Math.round(Math.min(90, W / 16));
    flakes = [];
    for (var i = 0; i < n; i++) {
      var depth = Math.random();
      flakes.push({
        x: Math.random() * W, y: Math.random() * H,
        r: .6 + depth * 1.7, v: 10 + depth * 26,
        a: .12 + depth * .4, phase: Math.random() * 6.28, sway: 6 + Math.random() * 14
      });
    }
  }

  function tick(t) {
    if (!running) return;
    var dt = Math.min(.05, (t - last) / 1000 || 0);
    last = t;
    ctx.clearRect(0, 0, W, H);
    ctx.fillStyle = "#F1F5F0";
    for (var i = 0; i < flakes.length; i++) {
      var f = flakes[i];
      f.y += f.v * dt;
      f.phase += dt * .8;
      if (f.y > H + 4) { f.y = -4; f.x = Math.random() * W; }
      ctx.globalAlpha = f.a;
      ctx.beginPath();
      ctx.arc(f.x + Math.sin(f.phase) * f.sway, f.y, f.r, 0, 6.2832);
      ctx.fill();
    }
    requestAnimationFrame(tick);
  }

  resize();
  window.addEventListener("resize", resize);
  // Solo anima mientras la portada está visible.
  new IntersectionObserver(function (entries) {
    var visible = entries[0].isIntersecting;
    if (visible && !running) { running = true; last = 0; requestAnimationFrame(tick); }
    else if (!visible) running = false;
  }).observe(canvas);
})();
