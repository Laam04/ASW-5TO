Pasos de Desarrollo

Este proyecto fue creado a partir del entorno ya usado en la practica 6, como un nuevo proyecto NestJS.
npm install -g @nestjs/cli para instalar NestJS

Creacion del proyecto: nest new proyecto-nestjs-graphql
Configurar GraphQL

dependencias:
npm install @nestjs/graphql @nestjs/apollo apollo-server-express graphql

npm install @nestjs/typeorm typeorm mysql2


Configuracion de la conexión en database.config.ts.

Configuracion de app controller, module, service y main.ts.

Se crearon las Entidades, modulos, resolver y service para cada entidad.

Usar el decorador @Entity para definir tablas, y @ObjectType para exponerlas en GraphQL.

Pruebas de GraphQL con Postman.

Se realizaron las respectivas mutaciones antes de usar un query para la consulta.

  [mutation-espacio](mutation-espacio.png)
  [mutation-vehiculo](mutation-vehiculo.png)
  [query-parquear](query-parquear.png)
