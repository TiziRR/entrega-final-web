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

## Características Principales

### Frontend (Cliente)

- Diseñado 100% con HTML, CSS y TypeScript
- Listado de productos dinámico (se cargan desde la API)
- Carrito de compras con:
  - Agregar productos
  - Calcular total
  - Persistencia en localStorage
  - Minimodal desplegable
- Build generado a /dist para ser consumido desde el HTML

### Backend (Servidor)

**Tecnologías:**
- Node.js
- Express
- SQLite (archivo ecommerce.db)

**Funciones principales:**
- Obtener productos
- Crear productos (admin)
- Editar productos (admin)
- Eliminar productos (admin)
- Autenticación básica (rutas de auth)
- Buscar producto por ID

## Estructura del proyecto

```
final-web/
├── Backend/
│   └── src/
│       ├── db/
│       │   ├── database.ts
│       │   └── ecommerce.db
│       ├── interfaces/
│       │   ├── product.ts
│       │   └── usuario.ts
│       ├── routes/
│       │   ├── auth.routes.ts
│       │   └── product.routes.ts
│       └── server.ts
│
└── Frontend/
    └── src/
        ├── api/
        │   ├── admin.ts
        │   └── products.ts
        ├── assets/
        │   └── (imágenes, fuentes, etc.)
        ├── components/
        │   ├── cart_components.ts
        │   └── product_component.ts
        ├── interfaces/
        │   └── product.ts
        ├── styles/
        │   ├── admin.css
        │   ├── auth.css
        │   ├── cart.css
        │   └── home.css
        ├── utils/
        │   └── cart.ts
        └── views/
            ├── admin.html
            ├── home.html
            ├── login.html
            └── register.html
```

## Cómo ejecutar el proyecto

### 1️⃣ Instalar dependencias

**Backend:**
```bash
cd Backend
npm install
```

**Frontend:**
```bash
cd Frontend
npm install
```

### 2️⃣ Ejecutar el backend

```bash
cd Backend
npm run dev
```

El servidor correrá en: `http://localhost:3000` (ajustar según configuración en server.ts)

### 3️⃣ Ejecutar el frontend

El frontend es HTML + TS, por lo que:

1. Compilar TypeScript (desde Frontend):
```bash
npm run build
```

2. Servir o abrir los archivos en `src/views/` (`home.html`, `admin.html`, `login.html`, `register.html`) con Live Server o similar.

## Panel de Administración (CRUD)

El panel admin permite:
- Agregar un producto
- Listarlo
- Editarlo mediante un modal animado
- Eliminarlo con confirmación

## Carrito de Compras

- Botones "Agregar al carrito" generados dinámicamente
- Carrito guardado en localStorage
- Minimodal con:
  - Lista de productos
  - Total actualizado
  - Botón de cerrar

## Estilo y Diseño

- CSS puro con sombras, gradientes y diseños modernos
- Diseño responsive

## Tecnologías utilizadas

| Tecnología | Uso |
|---|---|
| HTML5 | Estructura del Frontend |
| CSS3 | Estilos y diseño |
| TypeScript | Lógica del Frontend |
| Node.js / Express | API REST |
| SQLite3 | Base de datos (ecommerce.db) |
| LocalStorage | Carrito persistido en el cliente |

## Autor

Proyecto desarrollado por Tiziano Rossi