# Ecommerce Backend

Este es el backend de una aplicación de ecommerce desarrollada con Node.js, Express, MongoDB.

## Instalación

1. Clona el repositorio:
    ```bash
    git clone https://github.com/BgSoft29/Hackaton-Final-Backend.git
    npm install
    npm start
    ```

## Endpoints

### Usuarios

- `POST /api/users/register`: Registrar un nuevo usuario.
- `POST /api/users/login`: Iniciar sesión de un usuario.
- `GET /api/users/`: Obtener todos los usuarios.

### Productos

- `POST /api/products`: Crear un nuevo producto.
- `GET /api/products`: Obtener todos los productos.
- `GET /api/products/:id`: Obtener un producto por ID.
- `PUT /api/products/:id`: Actualizar un producto por ID.
- `DELETE /api/products/:id`: Eliminar un producto por ID.

### Órdenes

- `POST /api/orders`: Crear una nueva orden (requiere autenticación).
- `GET /api/orders`: Obtener todas las órdenes del usuario autenticado.
- `GET /api/orders/:id`: Obtener una orden por ID (requiere autenticación).

### Categorías

- `POST /api/categories`: Crear una nueva categoría.
- `GET /api/categories`: Obtener todas las categorías.
- `GET /api/categories/:id`: Obtener una categoría por ID.
- `PUT /api/categories/:id`: Actualizar una categoría por ID.
- `DELETE /api/categories/:id`: Eliminar una categoría por ID.