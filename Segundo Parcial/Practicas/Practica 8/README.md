# Proyecto de Gestión de Alquiler de Vehículos con WebSockets
Instalar las dependencias necesarias utilizando npm
Configurar las variables de entorno en un archivo .env para la base de datos y el puerto de la aplicación.
Levantar el proyecto con npm run start para poner en marcha el servidor.
Verificar que el servidor esté corriendo correctamente en el puerto configurado.
Probar los WebSockets utilizando una herramienta como Postman.
Para crear un vehículo, suscribirse al evento create-vehiculo y enviar los datos correspondientes. Verificar la respuesta del servidor con el evento vehiculo-created.
Consultar la lista de vehículos mediante el evento listar-vehiculos y verificar que la respuesta contenga la lista de vehículos.
Crear un espacio de parqueo utilizando el evento create-espacio-parqueo y confirmar que el servidor responda con el espacio creado.
Probar la creación de una transacción de parqueo enviando los datos al evento create-parquear y verificar que el servidor confirme la transacción.
Consultar las transacciones activas con el evento consultar-activos y asegurarse de que el servidor devuelva las transacciones en curso.

Evidencias:

[message-from-server-message-from-client] (Mensajes C-S.png) -> cambiado a message to server
[Transacciones] (Transacciones.png) Muestra los parqueos creados desde ws//localhost/3003/
[Vehiculos] (Vehiculos.png) Muestra los vehiculos creados desde ws://localhost:3003/