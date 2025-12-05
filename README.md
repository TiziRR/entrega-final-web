# Micro Ecommerce funcional

Este proyecto es una tienda web, construida totalmente desde cero sin frameworks en el frontend.

Incluye:

- Frontend en HTML + TypeScript, compilado a la carpeta /dist
- Backend en Node.js + Express + SQLite
- Panel de administrador con CRUD completo (crear, editar, eliminar)
- Listado de productos para clientes
- Carrito de compras persistido en localStorage
- Modal para editar productos
- Estilos personalizados con CSS

## 🚀 Características Principales

### 🔹 Frontend (Cliente)

- Diseñado 100% con HTML, CSS y TypeScript
- Listado de productos dinámico (se cargan desde la API)
- Carrito de compras con:
  - Agregar productos
  - Calcular total
  - Persistencia en localStorage
  - Minimodal desplegable
- Build generado a /dist para ser consumido desde el HTML

### 🔹 Backend (Servidor)

**Tecnologías:**
- Node.js
- Express
- SQLite
- Base de datos persistida como archivo .db

**Funciones principales:**
- ✔ Obtener productos
- ✔ Crear productos (admin)
- ✔ Editar productos (admin)
- ✔ Eliminar productos (admin)
- ✔ Buscar producto por ID

## 📁 Estructura del proyecto

```
/backend
   ├── db
   │    └── database.js
   ├── routes
   │    └── products.js
   └── server.js

/frontend
   ├── src
   │    ├── api
   │    │    ├── products.ts
   │    │    └── admin.ts
   │    ├── cart
   │    │    └── cart.ts
   │    ├── components
   │    │    ├── product_component.ts
   │    │    └── cart_component.ts
   │    ├── interfaces
   │    │    └── product.ts
   │    └── utils
   │         └── fetchProducts.ts
   ├── dist  (generado por tsc)
   └── pages
        ├── home.html
        └── admin.html
```

## ⚙️ Cómo ejecutar el proyecto

### 1️⃣ Instalar dependencias

**Backend:**
```bash
cd backend
npm install
```

**Frontend:**
```bash
cd frontend
npm install
```

### 2️⃣ Ejecutar el backend

```bash
npm run dev
```

El servidor correrá en: `http://localhost:3000`

### 3️⃣ Ejecutar el frontend

El frontend es HTML + TS, por lo que:

1. Compilar TypeScript:
```bash
npm run build
```

2. Abrir `pages/home.html` y `pages/admin.html` con Live Server o similar.

## 🖥️ Panel de Administración (CRUD)

El panel admin permite:
- Agregar un producto
- Listarlo
- Editarlo mediante un modal animado
- Eliminarlo con confirmación
- Vista moderna y limpia

## 🛒 Carrito de Compras

- Botones "Agregar al carrito" generados dinámicamente
- Carrito guardado en localStorage
- Minimodal con:
  - Lista de productos
  - Total actualizado
  - Botón de cerrar
- Se actualiza cuando se reabre el modal

## 🎨 Estilo y Diseño

- CSS puro con sombra, gradientes, tarjetas, botones modernos
- Diseño responsive
- Modal centrado con blur de fondo

## 📌 Tecnologías utilizadas

| Tecnología | Uso |
|---|---|
| HTML5 | Estructura del Frontend |
| CSS3 | Estilos y diseño |
| TypeScript | Lógica del Frontend |
| Node.js / Express | API REST |
| SQLite3 | Base de datos |
| LocalStorage | Carrito persistido en el cliente |

## 🧑‍💻 Autor

Proyecto desarrollado por Tiziano Rossi