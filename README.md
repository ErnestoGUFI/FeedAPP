# Feed de Reportes (React Native + Expo)

Pantalla desarrollada a partir de la imagen de referencia. Incluye un encabezado con botón "Agregar" y una lista de tarjetas de reportes con avatar, imagen de placeholder, descripción y acciones (Me gusta, Comentar, Compartir).

## Estructura de carpetas

```
.
├── App.tsx
├── src
│   ├── components
│   │   └── ReportCard.tsx
│   ├── screens
│   │   └── FeedScreen.tsx
│   └── styles
│       └── colors.ts
├── app.json
├── package.json
└── babel.config.js
```

- Componentes separados (`ReportCard`) y pantalla (`FeedScreen`).
- Estilos con `StyleSheet` y paleta centralizada en `src/styles/colors.ts`.

## Requisitos

- Node.js LTS
- npm o yarn
- Expo CLI (opcional, `npx expo` funciona sin instalación global)

## Instalación y ejecución

```bash
npm install
npm run start
# Luego, presiona 'a' para Android, 'i' para iOS (macOS), o abre en web
```

> En Windows, para Android se recomienda tener Android Studio con un emulador o conectar un dispositivo físico con depuración USB.

## Captura de pantalla

Ejecuta la app y toma una captura mostrando el "Feed de Reportes". Guarda la imagen para subirla junto con el enlace del repositorio.

## Publicación en GitHub

1. Crea un repositorio vacío en GitHub.
2. En la raíz del proyecto:

```bash
git init
git add .
git commit -m "feat: pantalla Feed de Reportes"
git branch -M main
git remote add origin https://github.com/USUARIO/feed-reportes.git
git push -u origin main
```

3. Entrega el enlace del repositorio y adjunta la captura de pantalla de la app en ejecución.

## Notas

- El placeholder de imagen usa emojis centrados para simplificar, pero puedes reemplazarlo por una `Image` con foto real.
- Iconos provienen de `@expo/vector-icons`.
