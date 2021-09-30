# MyStore

Proyecto generado con [Angular CLI] version 12.2.7. alojado en [http://localhost:4200/]


# Pasos para crear un proyecto
Para ver a detalle las tecnologías utilizadas de Angular:
-ng version

Al estar dentro ya de la carpeta donde se realizará el desarrolo, para crear un nuevo proyecto se necesita utilizar el comando:    
- ng new nombre-del-proyecto

En la misma ubicacion, para generar un servidor de desarrollo:
- ng serve

Para lanzar el servidor de desarrollo y que abra el navegador con la direccion automaticamente:
- ng serve -o

Para elegir el puerto especifico en el que quieres que se aloje el servidor en localhost:
- ng serve -o --port=numero-que-quieras(Ej: --port=2000)


# Conceptos de TypeScript en Angular

### - String Interpolation
Es la forma en que "{ { } }" puedes realizar una operacion y obtener un resultado con ella con funciones de TypeScript o JavaScript.

#### - EJ: Escribir "hola mundo"
- Una forma normal de escribir un hola mundo en HTML sería de la siguiente manera:
    + `<h1>hola mundo<h1>`

    Pero una forma de hacerlo con TypeScript para utilizarlo dentro de alguna funcion sería:
    +`<h1>{{'hola mundo'.repeat(5)}}<h1>`
    En esta linea se le agregaron 3 cosas:
        + 1) "{ { } }" para dar paso a utilizar alguna funcion de JavaScript
        + 2) Antes, solo se escribía "hola mundo" en medio del tag `<h1>` pero ahora, con los corchetes puestos, es necesario definir como String, el "hola mundo" utilizando las comillas simples (' texto ').
        + 3) Y por ultimo, al poder ahora si utilizar JavaScript, se usó la funcion `.repeat()`, ya que ahora nos permite hacerlo. 
