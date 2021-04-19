# MercadoLibre Challenge

Desarrollado con ❤ por Aaron Saban

## Pasos para levantar el proyecto: 

### Frontend  
Dentro de la carpeta `client` ejecutar los siguientes comandos: 

`npm i`
`npm start` => levanta el proyecto en http://localhost:1234

El proyecto incluye un `.env.example` que deberas renombar a `.env` para que el proyecto funcione correctamente.
### API

Dentro de la carpeta `server` ejecutar los siguientes comandos: 

`npm i`
`npm start` => levanta el proyecto en http://localhost:8080


## Tech stack 

Para la realizacion del challenge se hizo uso de las siguientes tecnologias:

__Front__: 
    - React
    - SASS 
    - Typescript

__Server__:
    - NodeJS
    - ExpressJS
    - Axios
    - Typescript


## Decisiones de diseño 

Para el lado de API agrego un campo `location`, referente a la `shipping_adress` del item, a los resultados obtenido por la API de busqueda, tambien un `link` referente al campo `permalink` en la informacion del item.


Del ladro Front agregue textos en la pantalla principal, animaciones de carga, muestra de errores y responsive en mobile, que no estaban en los diseños adjuntados para poder dar agregarle una mejor usabilidad al sitio.

Tambien le di funcionalidad al boton "Comprar" para que redireccione a la pagina del producto original.

En la decision del Stack decidi utilizar Typescript para tener una mejor escabilidad ya que nos permite escribir un codigo mas estructurado y ordenado, tambien utilice SCSS para los estilos utilizando la nomenclatura BEM en el nombre de clases y maquetado de estilos.

## Comentarios finales

Muy divertido el challenge, le dedique bastante horas y me mantuvo entretenido al momento de realizarlo, algunos comentarios que queria agregar, el tema SEO, no pude implementar mucho en ese aspecto, decidi en usar React con Client Side Rendering porque no estaba seguro si estaba permitido utilizar algun microframework que me permita Server Side Rendering (Next o Gabtsy).

Tambien agregue casos de test pero no la cantidad que hubiese querido, tuve que darle prioridad a otros retoques que quise a agregar del lado client.




