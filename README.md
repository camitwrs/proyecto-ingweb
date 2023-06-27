# PeluAdopta

# De qué se trata

Una aplicación web que ayude a la búsqueda y adopción de mascotas (perros y gatos específicamente). 

Tipos de usuario: 
1. Publicador: Publican (crean perfil de mascota) con detalles como la raza, género, tamaño, historial médico (vacunas, alergias), personalidad, ubicación. Pueden agregar fotos. (idea visual: tipo feed de instagram)
2. Adoptante: A través de filtros buscan mascotas para adoptar (por cercanía es el más importante). Deben pasar por una verificación de antecedentes (de un formulario a su perfil) para garantizar mayor información y así sea más fácil para el publicador elegir adoptante. A través de un sistema podrán mostrar interés en una o más mascotas (botón ""me interesa"" que le comunica al publicador que hay gente interesada en la mascota publicada). 
Ambos usuarios llevarán a cabo la adopción dentro de un chat o mensaje para coordinarse entre ellos. (tipo marketplace de facebook)
La aplicación permitiría crear un espacio en común, ya que la mayoría de las veces estos avisos se comunican a través del boca a boca o por las historias de instagram.
La adopción de animales brinda muchos beneficios positivos para los humanos además de salvar vidas.

# Tecnologías y utilidades

Sigue un stack MERN (MongoDB, Express, React, NodeJS)

Frontend: 
- React + Vite
- Bootstrap
- Axios

Backend: 
- Express
- MongoDB (localmente)
- Bcrypt
- JWT

# Cómo ejecutar

- Instalar las depencias con npm install, en la carpeta raiz y en la carpeta client con cd client.
- Correr servidor local de mongodb: en la terminal de su sistema, ejecutar mongod y mantener la terminal abierta (o sino no se podrá ejercer la conexión)
- Abrir 2 terminales en vscode: una para el backend y otra para el frontend.
- Para la terminal del backend ejecutar el comando npm run dev (correrá express) 
- Para la terminal del frontend, moverse a la carpeta cliente con cd cliente y ejecutar el comando npm run dev (correrá vite)

# Importante

Ruta de la API del backend:

http://127.0.0.1:3000/api

Ruta de vite del frontend:

http://localhost:5173


