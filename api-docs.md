# Documentación de la API

## Endpoints

### Obtener todos los libros

- **Endpoint**: `/api/books/`
- **Método HTTP**: GET
- **Descripción**: Este endpoint devuelve todos los libros almacenados en la base de datos.
- **Parámetros**:
  - Ninguno
- **Tipo de respuesta**: Un arreglo JSON con todos los libros almacenados.
- **Código de estado HTTP**:
  - 200 OK: Se devuelve el arreglo de libros correctamente.
  - 500 Internal Server Error: Se produce un error al intentar obtener los libros.

### Añadir un nuevo libro

- **Endpoint**: `/api/books/`
- **Método HTTP**: POST
- **Descripción**: Este endpoint permite añadir un nuevo libro a la base de datos.
- **Parámetros de la solicitud**:
  - `title`: Título del libro (cadena de caracteres).
  - `author`: Autor del libro (cadena de caracteres).
- **Tipo de respuesta**: Un objeto JSON con la información del libro añadido.
- **Código de estado HTTP**:
  - 200 OK: El libro se añadió correctamente.
  - 500 Internal Server Error: Se produjo un error al intentar añadir el libro.

### Actualizar un libro

- **Endpoint**: `/api/books/:id`
- **Método HTTP**: PUT
- **Descripción**: Este endpoint permite actualizar la información de un libro existente.
- **Parámetros de la solicitud**:
  - `id`: ID del libro a actualizar (parámetro de ruta).
  - `title`: Título del libro (cadena de caracteres, opcional).
  - `author`: Autor del libro (cadena de caracteres, opcional).
  - `isBorrowed`: Estado de préstamo del libro (booleano, opcional).
  - `borrowedBy`: Usuario que tomó prestado el libro (cadena de caracteres, opcional).
  - `currentPage`: Página actual del libro (número, opcional).
- **Tipo de respuesta**: Un objeto JSON con la información actualizada del libro.
- **Código de estado HTTP**:
  - 200 OK: El libro se actualizó correctamente.
  - 404 Not Found: No se encontró el libro.
  - 500 Internal Server Error: Se produjo un error al intentar actualizar el libro.

### Eliminar un libro

- **Endpoint**: `/api/books/:id`
- **Método HTTP**: DELETE
- **Descripción**: Este endpoint permite eliminar un libro de la base de datos.
- **Parámetros de la solicitud**:
  - `id`: ID del libro a eliminar (parámetro de ruta).
- **Tipo de respuesta**: Un mensaje de confirmación de eliminación.
- **Código de estado HTTP**:
  - 200 OK: El libro se eliminó correctamente.
  - 404 Not Found: No se encontró el libro.
  - 500 Internal Server Error: Se produjo un error al intentar eliminar el libro.

### Registrar un usuario

- **Endpoint**: `/api/users/register`
- **Método HTTP**: POST
- **Descripción**: Este endpoint permite registrar un nuevo usuario.
- **Parámetros de la solicitud**:
  - `name`: Nombre del usuario (cadena de caracteres).
  - `email`: Email del usuario (cadena de caracteres).
  - `password`: Contraseña del usuario (cadena de caracteres).
- **Tipo de respuesta**: Un objeto JSON con la información del usuario registrado y el token de autenticación.
- **Código de estado HTTP**:
  - 200 OK: El usuario se registró correctamente.
  - 400 Bad Request: La solicitud no es válida.
  - 500 Internal Server Error: Se produjo un error al intentar registrar el usuario.

### Iniciar sesión de usuario

- **Endpoint**: `/api/users/login`
- **Método HTTP**: POST
- **Descripción**: Este endpoint permite a un usuario iniciar sesión.
- **Parámetros de la solicitud**:
  - `email`: Email del usuario (cadena de caracteres).
  - `password`: Contraseña del usuario (cadena de caracteres).
- **Tipo de respuesta**: Un objeto JSON con la información del usuario autenticado y el token de autenticación.
- **Código de estado HTTP**:
  - 200 OK: El usuario inició sesión correctamente.
  - 400 Bad Request: La solicitud no es válida.
  - 401 Unauthorized: Credenciales incorrectas.
  - 500 Internal Server Error: Se produjo un error al intentar iniciar sesión.

### Obtener información de usuario

- **Endpoint**: `/api/users/`
- **Método HTTP**: GET
- **Descripción**: Este endpoint permite obtener la información del usuario autenticado.
- **Parámetros de la solicitud**: Ninguno.
- **Tipo de respuesta**: Un objeto JSON con la información del usuario.
- **Código de estado HTTP**:
  - 200 OK: Se obtuvo la información del usuario correctamente.
  - 401 Unauthorized: El usuario no está autenticado.
  - 500 Internal Server Error: Se produjo un error al intentar obtener la información del usuario.
