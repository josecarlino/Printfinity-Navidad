(function () {
  var cats = window.CATALOG_CATEGORIES || [];
  var main = document.getElementById("main");
  PF.defs();
  PF.chrome();

  var slug = new URLSearchParams(location.search).get("cat");
  var index = -1;
  cats.forEach(function (c, i) { if (c.slug === slug) index = i; });
  var current = cats[index];

  if (!current) {
    document.title = "Catálogo no encontrado · Printfinity";
    main.innerHTML =
      '<section class="not-found"><div class="wrap">' +
        "<h1>No encontramos ese catálogo</h1>" +
        "<p>El enlace puede estar incompleto. Vuelve a la página principal y elige una categoría.</p>" +
        '<a class="btn btn-primary" href="index.html#catalogos">Ver todos los catálogos</a>' +
      "</div></section>";
    return;
  }

  document.title = "Catálogo de " + current.name + " · Printfinity Navidad";
  var aspect = current.aspect || "16 / 9";
  var greeting = (window.SITE_CONFIG || {}).whatsappGreeting || "Hola";
  var orderUrl = PF.whatsappUrl(greeting + '. Quiero cotizar un modelo de la categoría "' + current.name + '".');
  var waButton = function (label) {
    return '<a class="btn btn-whatsapp" target="_blank" rel="noopener" href="' + orderUrl + '">' + PF.icons.whatsapp + label + "</a>";
  };

  var viewer;
  if (current.embedUrl) {
    viewer =
      '<div class="frame" style="aspect-ratio:' + aspect + '">' +
        '<div class="loading" id="loading"><span>Cargando catálogo…</span></div>' +
        '<iframe id="embed" loading="lazy" src="' + current.embedUrl + '" title="Catálogo de ' + current.name + ' en Canva" allowfullscreen allow="fullscreen"></iframe>' +
      "</div>";
  } else {
    viewer =
      '<div class="frame is-empty">' +
        '<div class="empty">' + PF.render(current) +
          "<strong>Este catálogo estará disponible próximamente</strong>" +
          "<span>Mientras tanto, escríbenos y te enviamos fotos de las piezas de " + (/[A-Z]/.test(current.name.slice(1)) ? current.name : current.name.toLowerCase()) + ".</span>" +
        "</div>" +
      "</div>";
  }

  var others = cats.filter(function (c) { return c.slug !== current.slug; });

  main.innerHTML =
    '<section class="cat-hero"><div class="wrap">' +
      '<div class="cat-intro">' +
        "<div>" +
          "<h1>Catálogo de <em>" + current.name + "</em></h1>" +
        "</div>" +
        '<a class="back" href="index.html">' + PF.icons.back + "Página principal</a>" +
      "</div>" +
    "</div></section>" +

    '<section class="viewer" aria-label="Catálogo"><div class="wrap">' +
      viewer +
      '<div class="band">' +
        "<div>" +
          "<h2>¿Te interesa algún modelo?</h2>" +
          "<p>El precio depende del tamaño y el tiempo de impresión de cada pieza, puedes cotizar sin compromiso.</p>" +
        "</div>" +
        waButton("Cotizar por WhatsApp") +
      "</div>" +
    "</div></section>" +

    '<section class="others" aria-labelledby="others-title">' +
      '<div class="garland" aria-hidden="true"></div>' +
      '<div class="wrap">' +
        '<h2 id="others-title"><span class="pulse"></span>Otros catálogos</h2>' +
        '<ul class="tags mini-tags">' +
          others.map(function (c) {
            return '<li><a class="tag" href="catalogo.html?cat=' + c.slug + '"><div class="tag-body">' +
              '<div class="tag-art">' + PF.cover(c) + "</div><h3>" + c.name + "</h3></div></a></li>";
          }).join("") +
        "</ul>" +
      "</div>" +
    "</section>";

  var iframe = document.getElementById("embed");
  if (iframe) {
    iframe.addEventListener("load", function () {
      var l = document.getElementById("loading");
      l.style.opacity = "0";
      setTimeout(function () { l.remove(); }, 300);
    });
  }
})();
