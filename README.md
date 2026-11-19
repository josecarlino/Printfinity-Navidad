# Printfinity — Catálogo de Navidad

Sitio estático (HTML + CSS + JavaScript, sin frameworks ni build) con los 8 catálogos navideños de Printfinity, embebidos desde Canva.

Concepto visual: **"Navidad, capa por capa"**. En la portada, una impresora dibuja un árbol capa por capa (con botón para repetir la impresión) bajo una nevada sutil; cada categoría es una etiqueta de regalo colgante de una guirnalda de luces, con una ilustración hecha de líneas de impresión 3D.

La estructura (encabezado, pie con Materiales y Personalización, bloque "¿Te interesa algún modelo?" y "Otros catálogos") es la misma del catálogo de Halloween. Tipografías: Fraunces (títulos) y Figtree (texto). Si el dispositivo tiene activado "reducir movimiento" (en Windows: Configuración → Accesibilidad → Efectos visuales → Efectos de animación), se quitan solo los desplazamientos; la nieve, las luces y la impresión del árbol se mantienen.

## Estructura

```
printfinity-navidad/
├── index.html            # Portada: animación de impresión + 8 etiquetas de categoría
├── catalogo.html         # Visor de catálogo (usa ?cat=<slug>)
└── assets/
    ├── css/styles.css    # Todo el diseño (colores en :root)
    ├── js/categories.js  # ← Aquí se editan las 8 categorías y los enlaces de Canva
    ├── js/site-config.js # Número de WhatsApp y saludo
    ├── js/art.js         # Ilustraciones de líneas de impresión
    ├── js/home.js        # Lógica de la portada
    ├── js/catalogo.js    # Lógica del visor
    └── img/              # favicon.svg (agrega aquí og-image.png y fotos opcionales)
```

## Agregar un catálogo de Canva

1. En Canva: **Compartir → Insertar en un sitio web**.
2. Copia la URL de `src="..."` (termina en `/view?embed`).
3. En `assets/js/categories.js`, en la categoría correspondiente:
   ```js
   embedUrl: "https://www.canva.com/design/XXXX/YYYY/view?embed",
   canvaLink: "https://www.canva.com/design/XXXX/YYYY/view?utm_content=...",
   aspect: "16 / 9"   // o "1 / 1.414" si el diseño es vertical tipo A4
   ```
4. Guarda y recarga. La etiqueta pierde el aviso "Próximamente" y la página muestra el catálogo.

Revisa que el diseño esté compartido como "Cualquier persona con el enlace puede ver".

## Usar fotos en vez de ilustraciones

Guarda la foto en `assets/img/` (JPG ~800 px) y en la categoría pon `image: "assets/img/esferas.jpg"` e `imageAlt: "descripción"`.

## Cambiar categorías

Edita `name`, `shortDescription` y `slug`. Ilustraciones disponibles para `art`: `grinch`, `gato`, `arboles`, `muneco`, `esfera`, `reno`, `luces`, `obra`, `arbol`, `nacimiento`, `gorro`, `estrella`, `regalo`, `campana`. Tonos para `tone`: `rojo`, `verde`, `oro`, `nieve`.

## Probar en local

```bash
python -m http.server 8080
```
y abre `http://localhost:8080`.

## Publicar en GitHub Pages

```bash
git init
git add -A
git commit -m "Catálogo de Navidad Printfinity"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/printfinity-navidad.git
git push -u origin main
```
Luego en GitHub: **Settings → Pages → Deploy from a branch → main / (root)**.
