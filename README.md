# Examen Técnico Frontend React

Este proyecto implementa un flujo completo de autenticación y perfil de usuario utilizando **React**, **Vite** y **Tailwind CSS v3**, consumiendo la API de DummyJSON.

---

## 📁 Estructura del proyecto
```
examen-react/
├─ node_modules/
├─ public
├─ src/
│ ├─ assets/ # Imágenes de sketch (login, profile)
│ │ ├─ login_screen.png
│ │ └─ profile-screen.png
│ ├─ components/ # Componentes UI
│ │ ├─ LoginComponent.jsx
│ │ └─ ProfileComponent.jsx
│ ├─ hooks/ # Hooks reutilizables
│ │ └─ useAuth.js
│ ├─ pages/ # Páginas con React Router
│ │ ├─ Login.jsx
│ │ └─ Profile.jsx
│ ├─ App.jsx # Router y layout global
│ ├─ index.css # CSS global (Tailwind directivas)
│ └─ main.jsx # Entrada de la aplicación
├─ PDF/ # Preguntas de retroalimentación en PDF/A
│ └─ Preguntas Prueba Tecnica.pdf
├─ tailwind.config.js # Configuración de Tailwind v3
├─ postcss.config.cjs # Configuración de PostCSS
├─ vite.config.js # Configuración de Vite
├─ package.json # Dependencias y scripts
└─ README.md # Este archivo
```


---

## 🚀 Instalación y arranque

1. **Clonar el repositorio**  
   ```bash
   git clone https://github.com/IvanGarciaG/Prueba-Tecnica-React.git
   cd Prueba-Tecnica-React
   ```

## Instalar las dependencias
```
   npm install
```

## Iniciar el servidor de desarrollo
```
   npm run dev

   El proyecto se ejecutará en http://localhost:3000.
```

## Flujo de autenticación

* Dirígete a `/login` y utiliza las credenciales de prueba:

  * **Usuario:** `emilys`
  * **Contraseña:** `emilyspass`

* Al autenticar correctamente, se redirige a `/profile` donde se muestra la tarjeta de perfil con datos reales obtenidos de la API DummyJSON.

* En caso de error de credenciales, se muestra un mensaje bajo el formulario.

* La sesión se guarda en `localStorage` y persiste tras recargar la página. Si no hay sesión, se redirige automáticamente a `/login`.

* Para cerrar sesión, utiliza el botón **Cerrar sesión** en la vista de perfil.

## Documentación de preguntas (PDF)

Las preguntas teóricas y sus respuestas se encuentran en la carpeta `PDF/` en formato PDF/A, según lo solicitado.

---


   ## Que se implemento 

   LoginComponent.jsx

Formulario con React‑Hook‑Form para validación de campos.

Consumo de POST https://dummyjson.com/auth/login.

Muestra errores de validación y de credenciales bajo el formulario.

useAuth.js

Hook que encapsula la lógica de login() y logout().

Tras login, obtiene token y hace GET /users/{id} para datos completos.

Guarda sesión en localStorage y ofrece user, login, logout.

ProfileComponent.jsx

Restaura sesión desde localStorage.

Redirige a /login si no hay sesión.

Renderiza tarjeta con avatar neón, nombre, email, ubicación, estadísticas y dirección.

Botón de “Cerrar sesión” que limpia storage y vuelve al login.

React Router (App.jsx)

Rutas /login y /profile protegida.

Redirección automática al login si no hay sesión.

Tailwind CSS v3

Clases utilitarias con colores primario #1F2226 y secundario #EA4D88.

Configuración mínima en tailwind.config.js y postcss.config.cjs.

---

