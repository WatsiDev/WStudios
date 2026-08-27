🚀 Astro Premium Boilerplate

Plantilla base de alto rendimiento para proyectos web, enfocada en velocidad estática (SSG), animaciones fluidas y SEO técnico avanzado. Ideal para landing pages, portfolios tipo "Hub" y aplicaciones web modernas.

🛠️ Stack Tecnológico

Framework: Astro (con View Transitions nativas activadas)

Estilado: Tailwind CSS

Animaciones: Anime.js

Iconografía: Astro Icon + Iconify (Bytesize)

Tipografía: Fontsource (Local hosting)

SEO: Astro SEO + Astro Sitemap

Formateo: Prettier + Plugins para Astro y Tailwind

📦 Guía de Instalación Rápida

Si estás levantando este stack desde cero en un proyecto nuevo de Astro, ejecuta los siguientes comandos agrupados por funcionalidad.

1. Inicialización y Estilos Base

Instala Astro y configura Tailwind CSS automáticamente:

npm create astro@latest
npx astro add tailwind


2. SEO y Rastreo

Añade el generador automático de sitemaps y el gestor de etiquetas meta (astro-seo):

npx astro add sitemap
npm install astro-seo


3. Iconografía (Astro Icon + Paquetes de Iconify)

Instala el gestor de iconos de Astro y los paquetes específicos de Iconify (por defecto usamos bytesize para un look técnico minimalista):

npm install astro-icon @iconify-json/bytesize


Nota: Si necesitas usar otra colección en el futuro (ej. Material Design), instala @iconify-json/mdi.

4. Tipografía (Self-hosted)

Instala las fuentes a través de Fontsource para evitar peticiones a Google Fonts, bloqueos de renderizado y mejorar el rendimiento:

npm install @fontsource/geist-sans @fontsource/jetbrains-mono


Para usarlas, importa los paquetes en tu Layout.astro:

import '@fontsource/geist-sans';
import '@fontsource/jetbrains-mono';


5. Animaciones

Instala Anime.js para orquestar micro-interacciones y transiciones complejas en el cliente:

npm install animejs


(Opcional: Si usas TypeScript, instala los tipos):

npm install -D @types/animejs


6. Herramientas de Desarrollo (Prettier)

Instala el formateador y los plugins necesarios para ordenar el código de Astro y auto-organizar las clases de Tailwind:

npm install -D prettier prettier-plugin-astro prettier-plugin-tailwindcss


⚙️ Configuraciones Clave Requeridas

Archivo .prettierrc

Crea este archivo en la raíz para habilitar el ordenamiento automático de Tailwind en los archivos .astro:

{
  "plugins": ["prettier-plugin-astro", "prettier-plugin-tailwindcss"],
  "overrides": [
    {
      "files": "*.astro",
      "options": {
        "parser": "astro"
      }
    }
  ]
}


Habilitar View Transitions (App-like feel)

En tu archivo principal src/layouts/Layout.astro, asegúrate de importar e inyectar el componente en el <head>:

---
import { ViewTransitions } from 'astro:transitions';
---
<head>
  <ViewTransitions/>
  <!-- Resto de etiquetas head -->
</head>


Plantilla mantenida para desarrollo de alto rendimiento y arquitectura limpia.
