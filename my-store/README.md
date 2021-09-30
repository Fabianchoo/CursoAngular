# MyStore

Proyecto generado con [Angular CLI] version 12.2.7. alojado en [http://localhost:4200/]


# Pasos para crear un proyecto
Para ver a detalle las tecnologías utilizadas de Angular:
- ``ng version``

Al estar dentro ya de la carpeta donde se realizará el desarrolo, para crear un nuevo proyecto se necesita utilizar el comando:    
- ``ng new nombre-del-proyecto``

En la misma ubicacion, para generar un servidor de desarrollo:
- ``ng serve``

Para lanzar el servidor de desarrollo y que abra el navegador con la direccion automaticamente:
- ``ng serve -o``

Para elegir el puerto especifico en el que quieres que se aloje el servidor en localhost:
- ``ng serve -o --port=numero-que-quieras(Ej: --port=2000)``


# Conceptos de TypeScript en Angular

### - String Interpolation
Es la forma en que ``"{ { } }"`` puedes realizar una operacion y obtener un resultado con ella con funciones de TypeScript o JavaScript.

#### - EJ: Escribir "hola mundo"
- Una forma normal de escribir un hola mundo en HTML sería de la siguiente manera:
    + `<h1>hola mundo<h1>`

    Pero una forma de hacerlo con TypeScript para utilizarlo dentro de alguna funcion sería:
    + `<h1>{{'hola mundo'.repeat(5)}}<h1>`
        En esta linea se le agregaron 3 cosas:

        + 1. "{ { } }" para dar paso a utilizar alguna funcion de JavaScript
        + 2. Antes, solo se escribía "hola mundo" en medio del tag `<h1>` pero ahora, con las llaves puestas, es necesario definir como String, el "hola mundo" utilizando las comillas simples (' texto ').
        + 3. Y por ultimo, al poder ahora si utilizar JavaScript, se usó la funcion `.repeat()`, ya que ahora nos permite hacerlo. 

#### - EJ2: Realizar una operacion matematica
- La sintaxis es la siguiente `<p> 3 + 3 = {{ 3 + 3 }}</p>`
    + Lo que se encuentra fuera de las llaves "{{}}" se incorporará al parrafo como texto plano, pero lo que se encuentra dentro de este `{{ 3 + 3 }}` será devuelto como una funcion/resultado. En este caso, sería 6. Ademas, de que en nuestra pagina web, debería entregar lo siguiente: `3 + 3 = 6`

Dentro de estas llaves tambien pueden ir variables con algun valor definido anteriormente, para esto debes **ASEGURARTE** de que dichas variables sean publicas y esten disponibles para su uso.


### Property Binding}

**Property Binding** es una forma de controlar dinamicamente (al igual que en String Interpolation) algunas propiedades de HTML de un objeto en la capa logica.
  + Solo funcionan en una direccion desde la capa logica (conponent.ts) al objeto destino (atributo html), a esto se le conoce como flujo de datos.
  Quiere decir que los parametros a utilizar se crean en Component.ts y se deben utilizar en el atributo html.

  #### EJ: Propiedad disabled de un boton

    Una forma literal de desabilitar un boton, es de la siguiente manera:

    ```html
    {
        <button disabled = "false"></button>
    }
    ```
    Donde la propiedad HTML *disabled* está regida por ``"false"``.

    Por otra parte, al utilizar **Property Binding**, lo que haremos será en el archivo de components crear una ``funcion booleana`` para definir el estado de *disabled*.

    ```javascript
    {
          btnDisabled = true;
    }
    ```
    Para utilizar esta funcion dentro de una propiedad HTML, a dicha propiedad se debe "encerrar" dentro de corchetes [], así se puede dar paso a llamar, en este caso, a *btnDisabled*. Quedaría de la siguiente manera:
    
    ```html
    {
        <button [disabled] = "btnDisabled"></button>
    }
    ```
    Esto mismo se puede realizar con valores como nombre, edad e imagen como anteriormente se hizo.