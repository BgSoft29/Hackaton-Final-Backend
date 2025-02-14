# Ecommerce Backend

Este es el backend de una aplicación de ecommerce desarrollada con Node.js, Express, MongoDB y JWT para autenticación.

## Instalación

1. Clona el repositorio:
    ```bash
    git clone <URL_DEL_REPOSITORIO>
    cd ecommerce-backend
    ```

2. Instala las dependencias:
    ```bash
    npm install
    ```

3. Configura las variables de entorno en un archivo [.env](http://_vscodecontentref_/12):
    ```
    PORT=4000
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret
    ```

4. Inicia el servidor:
    ```bash
    node [app.js](http://_vscodecontentref_/13)
    ```

## Endpoints

### Usuarios

- `POST /api/users/register`: Registrar un nuevo usuario.
- `POST /api/users/login`: Iniciar sesión de un usuario.

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