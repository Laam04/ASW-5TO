
Archivos de Configuracón nuevos:
config/ database.ts
app.ts (CORS aplicado)
services/ parquear.service.ts

Lo principal para el funcionamiento del proyecto proviene de las entidades, controladores y rutas; otros archivos pueden considerarse "complementos" para su funcionamiento, excepto por los archivos que permiten la configuracion y conexion a la base de datos. 
Las entidades (models en el proyecto anterior) fueron modificados para el nuevo funcionamiento
los controladores tambien fueron modificados para el nuevo  funcionamiento
el index.ts tambien  fue modificado para el nuevo funcionamiento con CORS.

A parte de esos cambios el resto del proyecto no ha sido modificado.

No pude aplicar la ruta con PATCH pero funciona de igual forma con PUT.

  [PUT Vehiculo](PUT.png)
  [GET Vehiculo](GET.png)
  [POST Vehiculo](POST.png)
