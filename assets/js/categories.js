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
    shortDescription: "Se robó la Navidad, pero te la devolvemos impresa en 3D.",
    image: null,
    imageAlt: "",
    embedUrl: "https://www.canva.com/design/DAHbOcXgYpc/0biN_E0m_wAJ1W6yWNXjyQ/view?embed",
    canvaLink: "https://www.canva.com/design/DAHbOcXgYpc/0biN_E0m_wAJ1W6yWNXjyQ/view?utm_content=DAHbOcXgYpc&utm_campaign=designshare&utm_medium=embeds&utm_source=link",
    author: "José Carlos Lino",
    aspect: "16 / 9"
  },
  {
    slug: "arboles",
    name: "Árboles",
    art: "arbol",
    tone: "verde",
    shortDescription: "Árboles de mesa y escritorio, del mini al centro de mesa.",
    image: null,
    imageAlt: "",
    embedUrl: null,
    canvaLink: null,
    author: "José Carlos Lino",
    aspect: "16 / 9"
  },
  {
    slug: "nacimientos",
    name: "Nacimientos",
    art: "nacimiento",
    tone: "oro",
    shortDescription: "Pesebres completos y figuras sueltas para armar el tuyo.",
    image: null,
    imageAlt: "",
    embedUrl: null,
    canvaLink: null,
    author: "José Carlos Lino",
    aspect: "16 / 9"
  },
  {
    slug: "papa-noel",
    name: "Papá Noel",
    art: "gorro",
    tone: "rojo",
    shortDescription: "Santas, trineos y gorros para estantes y repisas.",
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
    shortDescription: "Muñecos de nieve que no se derriten en pleno diciembre.",
    image: null,
    imageAlt: "",
    embedUrl: null,
    canvaLink: null,
    author: "José Carlos Lino",
    aspect: "16 / 9"
  },
  {
    slug: "estrellas-y-luces",
    name: "Estrellas y luces",
    art: "estrella",
    tone: "oro",
    shortDescription: "Estrellas, lámparas y piezas para iluminar con LED.",
    image: null,
    imageAlt: "",
    embedUrl: null,
    canvaLink: null,
    author: "José Carlos Lino",
    aspect: "16 / 9"
  },
  {
    slug: "regalos",
    name: "Regalos y souvenirs",
    art: "regalo",
    tone: "rojo",
    shortDescription: "Detalles para regalar en el trabajo, el colegio o en familia.",
    image: null,
    imageAlt: "",
    embedUrl: null,
    canvaLink: null,
    author: "José Carlos Lino",
    aspect: "16 / 9"
  },
  {
    slug: "otros",
    name: "Otros",
    art: "campana",
    tone: "oro",
    shortDescription: "Campanas, cortadores de galletas y todo lo demás.",
    image: null,
    imageAlt: "",
    embedUrl: null,
    canvaLink: null,
    author: "José Carlos Lino",
    aspect: "16 / 9"
  }
];
