# Colección de Postman para Hackaton-Final-Backend

## Importar la Colección

1. Abre Postman.
2. Haz clic en "Importar" en la esquina superior izquierda.
3. Selecciona la pestaña "Subir archivos".
4. Elige el archivo `Hackaton Final SV71072221.postman_collection.json` de esta carpeta.
5. Haz clic en "Importar".

## Usar la Colección

1. Asegúrate de que tu servidor backend esté en funcionamiento.
2. Utiliza las solicitudes en la colección para interactuar con la API.
3. Para las solicitudes que requieren autenticación, asegúrate de reemplazar `<token>` con un token JWT válido obtenido de la solicitud de inicio de sesión.

## Token de usuario 
Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3YWZhNzc0ZDVmM2E3MmIzYjE5YjkxNiIsImlhdCI6MTczOTU2NjE5NiwiZXhwIjoxNzQyMTU4MTk2fQ.JHBIb6_sytlgT5z2M-JWXovly6J65fNNz5EQnttmVVU

## Token de administrador
Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3Yjc3NDcwMmZlNzYxMzVmY2Y0NDU5NiIsImlhdCI6MTc0MDA3NzMwOSwiZXhwIjoxNzQyNjY5MzA5fQ.lljlQJS80G4dprRtAUbCrb3Hzuym3p8dBxDpOvMECzY

## Descripción de las Rutas

### Usuarios

- **Registrar usuario**
  - **Método**: POST
  - **URL**: `https://hackaton-final-backend-production.up.railway.app/api/users/register`
  - **Body** (JSON):
    ```json
    {
      "name": "Roberto Pineda",
      "email": "rpineda@gmail.com",
      "password": "contraseñadeprueba",
      "role": "user"
    }
    ```

- **Iniciar sesión de usuario**
  - **Método**: POST
  - **URL**: `https://hackaton-final-backend-production.up.railway.app/api/users/login`
  - **Body** (JSON):
    ```json
    {
      "email": "eespinoza12@gmail.com",
      "password": "contraseñadeprueba"
    }
    ```

- **Modificar Usuario**
  - **Método**: PUT
  - **URL**: `https://hackaton-final-backend-production.up.railway.app/api/users/profile`
  - **Headers**:
    - `Authorization`: `Bearer <token>`
  - **Body** (JSON):
    ```json
    {
      "name": "Greta Butgenbach G",
      "email": "gretabg21@gmail.com"
    }
    ```

- **Eliminar usuario**
  - **Método**: DELETE
  - **URL**: `https://hackaton-final-backend-production.up.railway.app/api/users/:id`
  - **Headers**:
    - `Authorization`: `Bearer <token>`

- **Obtener todos los usuarios registrados**
  - **Método**: GET
  - **URL**: `https://hackaton-final-backend-production.up.railway.app/api/users`
  - **Headers**:
    - `Authorization`: `Bearer <token>`

### Productos

- **Obtener todos los productos**
  - **Método**: GET
  - **URL**: `https://hackaton-final-backend-production.up.railway.app/api/products`

- **Crear un producto**
  - **Método**: POST
  - **URL**: `https://hackaton-final-backend-production.up.railway.app/api/products`
  - **Headers**:
    - `Authorization`: `Bearer <token>`
  - **Body** (JSON):
    ```json
    {
      "name": "Cerveza Schauss 330ml Pilsener",
      "price": 18,
      "description": "Cerveza artesanal proveniente de Oxapampa, Perú",
      "category": "67afa04ad5f3a72b3b19b8fb",
      "stock": 10
    }
    ```

- **Modificar producto**
  - **Método**: PUT
  - **URL**: `https://hackaton-final-backend-production.up.railway.app/api/products/:id`
  - **Headers**:
    - `Authorization`: `Bearer <token>`
  - **Body** (JSON):
    ```json
    {
      "name": "Cerveza Witting Bier Negra 330ml",
      "price": 11,
      "stock": 5,
      "description": "Cerveza artesanal proveniente de Pozuzo"
    }
    ```

- **Eliminar producto**
  - **Método**: DELETE
  - **URL**: `https://hackaton-final-backend-production.up.railway.app/api/products/:id`
  - **Headers**:
    - `Authorization`: `Bearer <token>`

### Categorías

- **Obtener todas las categorías**
  - **Método**: GET
  - **URL**: `https://hackaton-final-backend-production.up.railway.app/api/categories`

- **Crear categoría**
  - **Método**: POST
  - **URL**: `https://hackaton-final-backend-production.up.railway.app/api/categories`
  - **Headers**:
    - `Authorization`: `Bearer <token>`
  - **Body** (JSON):
    ```json
    {
      "name": "Lacteos"
    }
    ```

- **Modificar categoría**
  - **Método**: PUT
  - **URL**: `https://hackaton-final-backend-production.up.railway.app/api/categories/:id`
  - **Headers**:
    - `Authorization`: `Bearer <token>`
  - **Body** (JSON):
    ```json
    {
      "name": "Derivados del cacao"
    }
    ```

- **Eliminar categoría**
  - **Método**: DELETE
  - **URL**: `https://hackaton-final-backend-production.up.railway.app/api/categories/:id`
  - **Headers**:
    - `Authorization`: `Bearer <token>`

### Órdenes

- **Obtener todas las órdenes**
  - **Método**: GET
  - **URL**: `https://hackaton-final-backend-production.up.railway.app/api/orders`
  - **Headers**:
    - `Authorization`: `Bearer <token>`

- **Crear una orden**
  - **Método**: POST
  - **URL**: `https://hackaton-final-backend-production.up.railway.app/api/orders`
  - **Headers**:
    - `Authorization`: `Bearer <token>`
  - **Body** (JSON):
    ```json
    {
      "products": [
        {
          "product": "67afa143d5f3a72b3b19b903",
          "quantity": 5
        },
        {
          "product": "67b787dc47d8b8c1a684d223",
          "quantity": 5
        }
      ],
      "totalPrice": 552,
      "status": "Pending"
    }
    ```

- **Obtener una orden por ID**
  - **Método**: GET
  - **URL**: `https://hackaton-final-backend-production.up.railway.app/api/orders/:id`
  - **Headers**:
    - `Authorization`: `Bearer <token>`

### Cupones

- **Obtener todos los cupones**
  - **Método**: GET
  - **URL**: `https://hackaton-final-backend-production.up.railway.app/api/coupons`
  - **Headers**:
    - `Authorization`: `Bearer <token>`

- **Crear cupón**
  - **Método**: POST
  - **URL**: `https://hackaton-final-backend-production.up.railway.app/api/coupons`
  - **Headers**:
    - `Authorization`: `Bearer <token>`
  - **Body** (JSON):
    ```json
    {
      "code": "SemSanta234",
      "discount": 0.48,
      "expirationDate": "2025-04-05"
    }
    ```

- **Modificar cupón**
  - **Método**: PUT
  - **URL**: `https://hackaton-final-backend-production.up.railway.app/api/coupons/:id`
  - **Headers**:
    - `Authorization`: `Bearer <token>`
  - **Body** (JSON):
    ```json
    {
      "code": "Apertura1201Oxa",
      "discount": 0.8
    }
    ```

- **Eliminar cupón**
  - **Método**: DELETE
  - **URL**: `https://hackaton-final-backend-production.up.railway.app/api/coupons/:id`
  - **Headers**:
    - `Authorization`: `Bearer <token>`