// Datos de las 8 categorías del catálogo navideño de Printfinity.
//
// Para publicar un catálogo de Canva en una categoría:
//   1. En Canva, abre el diseño > Compartir > Insertar en un sitio web.
//   2. Copia la URL que aparece dentro de src="..." (termina en /view?embed)
//      y pégala en "embedUrl".
//   3. Copia el enlace normal del diseño (el del botón "Ver diseño") en "canvaLink".
//   4. Si una categoría tiene "embedUrl: null", la página muestra un aviso
//      de "Este catálogo llega pronto".
//
// Campos opcionales:
//   - image: ruta a una foto propia (ej. "assets/img/esferas.jpg"). Si es null,
//     la tarjeta usa la ilustración de líneas de impresión indicada en "art".
//   - aspect: proporción del diseño de Canva (por defecto "16 / 9").
//     Para un catálogo vertical tipo A4 usa "1 / 1.414".
//   - tone: color de la ilustración: "rojo", "verde", "oro" o "nieve".
//
// El orden de la lista es el orden en la página principal.
window.CATALOG_CATEGORIES = [
  {
    slug: "grinchverse",
    name: "Grinchverse",
    art: "grinch",
    tone: "rojo",
    shortDescription: "Modelos del Grinch para todos los gustos.",
    image: null,
    imageAlt: "",
    embedUrl: "https://www.canva.com/design/DAHbOcXgYpc/0biN_E0m_wAJ1W6yWNXjyQ/view?embed",
    canvaLink: "https://www.canva.com/design/DAHbOcXgYpc/0biN_E0m_wAJ1W6yWNXjyQ/view?utm_content=DAHbOcXgYpc&utm_campaign=designshare&utm_medium=embeds&utm_source=link",
    author: "José Carlos Lino",
    aspect: "16 / 9"
  },
  {
    slug: "navicat",
    name: "NaviCAT",
    art: "gato",
    tone: "oro",
    shortDescription: "Para los amantes de la Navidad y los gatos :3",
    image: null,
    imageAlt: "",
    embedUrl: null,
    canvaLink: null,
    author: "José Carlos Lino",
    aspect: "16 / 9"
  },
  {
    slug: "arboles",
    name: "Árboles",
    art: "arboles",
    tone: "verde",
    shortDescription: "Variedad de modelos, no todos son verdes.",
    image: null,
    imageAlt: "",
    embedUrl: null,
    canvaLink: null,
    author: "José Carlos Lino",
    aspect: "16 / 9"
  },
  {
    slug: "munecos-de-nieve",
    name: "Muñecos de nieve",
    art: "muneco",
    tone: "nieve",
    shortDescription: "No se derriten ni en pleno verano.",
    image: null,
    imageAlt: "",
    embedUrl: null,
    canvaLink: null,
    author: "José Carlos Lino",
    aspect: "16 / 9"
  },
  {
    slug: "adornos",
    name: "Adornos",
    art: "esfera",
    tone: "rojo",
    shortDescription: "Para presumirlos cada Navidad.",
    image: null,
    imageAlt: "",
    embedUrl: null,
    canvaLink: null,
    author: "José Carlos Lino",
    aspect: "16 / 9"
  },
  {
    slug: "figuras-y-personajes",
    name: "Figuras y personajes",
    art: "reno",
    tone: "oro",
    shortDescription: "Santa, renos y toda su compañía.",
    image: null,
    imageAlt: "",
    embedUrl: null,
    canvaLink: null,
    author: "José Carlos Lino",
    aspect: "16 / 9"
  },
  {
    slug: "luces",
    name: "Luces y luces",
    art: "luces",
    tone: "oro",
    shortDescription: "Porque las luces de siempre quedan cortas.",
    image: null,
    imageAlt: "",
    embedUrl: null,
    canvaLink: null,
    author: "José Carlos Lino",
    aspect: "16 / 9"
  },
  {
    slug: "obras-maestras",
    name: "Obras maestras",
    art: "obra",
    tone: "rojo",
    shortDescription: "Horas y hasta días de impresión, minutos de asombro.",
    image: null,
    imageAlt: "",
    embedUrl: null,
    canvaLink: null,
    author: "José Carlos Lino",
    aspect: "16 / 9"
  }
];
