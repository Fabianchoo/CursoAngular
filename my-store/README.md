# MyStore

Proyecto generado con [Angular CLI] version 12.2.7. alojado en [http://localhost:4200/]
<hr>

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

<hr>

# Conceptos de TypeScript en Angular

### - String Interpolation
- Es la forma en que ``"{ { } }"`` puedes realizar una operacion y obtener un resultado con ella con funciones de TypeScript o JavaScript.

- EJ: Escribir "hola mundo"
+ Una forma normal de escribir un hola mundo en HTML sería de la siguiente manera:
    + `<h1>hola mundo<h1>`

    Pero una forma de hacerlo con TypeScript para utilizarlo dentro de alguna funcion sería:
    + `<h1>{{'hola mundo'.repeat(5)}}<h1>`
        En esta linea se le agregaron 3 cosas:

        + 1. "{ { } }" para dar paso a utilizar alguna funcion de JavaScript
        + 2. Antes, solo se escribía "hola mundo" en medio del tag `<h1>` pero ahora, con las llaves puestas, es necesario definir como String, el "hola mundo" utilizando las comillas simples (' texto ').
        + 3. Y por ultimo, al poder ahora si utilizar JavaScript, se usó la funcion `.repeat()`, ya que ahora nos permite hacerlo. 

- **EJ2: Realizar una operacion matematica**
- La sintaxis es la siguiente `<p> 3 + 3 = {{ 3 + 3 }}</p>`
    + Lo que se encuentra fuera de las llaves "{{}}" se incorporará al parrafo como texto plano, pero lo que se encuentra dentro de este `{{ 3 + 3 }}` será devuelto como una funcion/resultado. En este caso, sería 6. Ademas, de que en nuestra pagina web, debería entregar lo siguiente: `3 + 3 = 6`

Dentro de estas llaves tambien pueden ir variables con algun valor definido anteriormente, para esto debes **ASEGURARTE** de que dichas variables sean publicas y esten disponibles para su uso.

<hr>
### Property Binding

- Property Binding es una forma de controlar dinamicamente (al igual que en String Interpolation) algunas propiedades de HTML de un objeto en la capa logica.
+ Solo funcionan en una direccion desde la capa logica (conponent.ts) al objeto destino (atributo html), a esto se le conoce como flujo de datos.

Quiere decir que los parametros a utilizar se crean en Component.ts y se deben utilizar en el atributo html.

  **EJ: Propiedad disabled de un boton**
  
  Una forma literal de desabilitar un boton, es de la siguiente manera:

  ```html
        
            <button disabled = "false"></button>
        
   ```
   Donde la propiedad HTML *disabled* está regida por ``"false"``.

   Por otra parte, al utilizar **Property Binding**, lo que haremos será en el archivo de components crear una ``funcion booleana`` para definir el estado de *disabled*.

   ```JavaScript
            
            btnDisabled = true;
            
   ```
   Para utilizar esta funcion dentro de una propiedad HTML, a dicha propiedad se debe "encerrar" dentro de corchetes [], así se puede dar paso a llamar, en este caso, a *btnDisabled*. Quedaría de la siguiente manera:
    
   ```html
        
            <button [disabled] = "btnDisabled"></button>
        
   ```
   Esto mismo se puede realizar con valores como nombre, edad, imagen y **objetos**.
   
   Un ejemplo de la realizacion de este procedimiento con un objeto sería el siguiente:
   - Se crea un objeto en el archivo `app.components.ts` que es donde tenemos todos nuestras propiedades listas para ser utilizadas
   
   ```JavaScript
   
    persona = {
    name: 'Fabian',
    age: 18,
    avatar: 'https://media.discordapp.net/attachments/516433396596211712/893168319966896168/ExT9Z8kWQAEHiak.png'}
    
   ```
   - Como se puede ver, tenemos nombre, edad y una imagen dentro de un objeto **`Persona`**. Para utilizar estas propiedades, solo debemos añadir el objeto antes de la propiedad cuando se invocan. Quedaría de la siguiente manera:
   
   ```HTML
      <input type="text" [value]="persona.name">
      <progress max = "100" [value] ="persona.age"></progress>
      <img [src]="persona.avatar">
   ```
<hr>
### Event Binding
- Permiten escuchar y responder a las acciones del utuario, como pulsaciones de teclas, movimientos del mouse, clicks y toques. 
+ Para vincular un elemento **HTML** a un **evento**, debemos indicarlo de la siguiente manera ``(Nom_Evento)=nom_Funcion()``. Se vería algo así:

  ```HTML
    <button (click) = "toggleButton()">Toggle Button</button>
  ```  
+ Y la funcion que se está llamando `"toggleButton()"` sería así:
```JavaScript
    toggleButton(){
    this.btnDisabled = false;}
```
+ Lo que haría esta funcion, sería cambiar el estado de un boton, de deshabilitado a habilitado cuando se registre un click sobre el button que lo capturará.
<hr>
### Data Binding con ngModel
- Fusion entre escuchar un evento y "setear" una propiedad. Esto se realiza con la siguiente sintaxis: `[(ngModel)] = someValue`.
- Sirve para hacer validaciones de los campos, como por ejemplo, `La edad debe ser mayor que x y menos que y` tambien sirve para "escuchar" o esperar algun cambio dentro de textBox, buttons o cualquier accionador para generar un cambio de manera automatica.
<hr>
### Uso de *ngIf
- Es una ``Estructura de control`` que se realiza bajo la siguiente sintaxis:

```html
<div *ngIf = "condicional">
  Resultado de condicional
</div>
```

- Es importante mantener las minusculas y mayusculas de la sintaxis. Un ejemplo sería el siguiente:

```html
  <h1>*ngIf</h1>
  <input type="text" required  [(ngModel)]="persona.name">
  <p *ngIf="persona.name === 'Fabian'">74999232</p>
  <p *ngIf="persona.name === 'Julian'">55566644</p>
```

- Se define un **input** que será lo que nos ayude a comprar la condicional de `ngIf`. La cual, dentro de un parrafo `<p>` dice que si el nombre de la persona (persona.name) es igual a 'Fabian' mostrará un numero especifico para ese resultado, pero si se escribe 'Julian', el resultado será algo completamente distinto. Así funciona la conficional `ngIf`.
- A esta condicional se le pueden seguir agregando condicionales utilizando operadores logicos (OR, AND, NAND, entre otros).

- Ademas, esta condicional se puede juntar con codigo JavaScript dentro de la sintaxis utilizando `<ng-template #nom_temp>`.

```html
  <p *ngIf="persona.name === 'Julian' && persona.age === 18; else myBlock">55566644</p>
  <ng-template #myBlock>
    <p>
      Bloque de else
    </p>
  </ng-template>
```

Esto quiere decir que si el nombre de la persona es igual a 'Julian' y su edad es igual a 18 años, va a mostrar '55566644', **pero mientras no sea ese resultado**, mostrará el template #myBlock, en sí el texto `Bloque de else`.
<hr>

### Uso de *ngFor
- Sirve para iterar un Array (Strings, numeros u objetos). Dicho Array **debe estar dentro de los componentes de tu codigo**, en este caso, debe estar dentro de `app.components.ts`. Su sintaxis es la siguiente:

```html
  <h1>*ngFor</h1>
  <ul>
    <li *ngFor = "let name of names">
      {{name}}
    </li>
  </ul>
```

- Donde **ngFor** se utiliza como una propiedad de html, se define lo siguiente: 

  + `ngFor = let -se define una variable con let-`
  + `name -nombre de la variable-`
  + `of -de donde se extraeran los datos-` 
  + `names -array creado con datos en su interior-`
  + `{{name}} -con el nombre de la variable y mediante String Interpolation se utiliza-` 

- Por otra parte, los **arrays** pueden tener distintos tipos de datos como imagenes, numeros, letras, objetos. Para poder tener un "estandar" de los tipos de objetos que pueden haber dentro de un array, existen las `INTERFACES`.
+ A las **Interfaces** se les puede definir cual es el tipo de dato que tendrá cada objeto creado.
+ Para crear una interface primero se debe crear en el repositorio de `app` el componente `product.model.ts` la cual es una "clase" específica para nuestro array. 

```TypeScript
  export interface Producto{
      nombre: string;
      precio: Number;
      imagen: string;
}
```
- Para poder utilizar esta interfaz en el lugar donde se encuentra nuestro array, se debe exportar. Para ello, es necesario escribir `export` antes de la funcion para que se concidere "pública". En la clase donde está nuestro array, quedaría la importacion de la siguiente manera:

```TypeScript
  import { Producto } from './product.model'
```

- Luego para asignar nuestra interfaz a nuestro array, solo se debe indicar con `:`.


```TypeScript

    Productos: Producto[] = [
    {
    nombre:'El mejor juguete',
    precio: 2000,
    imagen:'./assets/images/toy.jpg'
    }]
```

- Donde "Productos" es el nombre del Array y "Producto[]" es nuestra interfaz. Ahora si cualquier valor no coincide con el tipo de dato requerido para nuestro array, generará un alerta temprana de dato incorrecto.
<hr>

### Uso de *ngSwitch
- ngSwitch sirve para realizar comparaciones o condiciones de una manera mas amena, en vez de anillar incontables `ngIf`. Para esto, solo se le debe pasar la variable con que se va a hacer match dentro del ngSwitch y las posibles respuestas con `ngSwitchCase = `. Cabe destacar que ngSwitch cuenta con una variable por defecto o sea, un `ngSwitchDefault` dondo se activa cuando no haya ningun match dentro de los case. Esto se representa de la siguiente manera:

```HTML
<h1>ngSwitch</h1>
  <input type="text" required  [(ngModel)]="persona.name">
  <div [ngSwitch] = "persona.name">
    <p *ngSwitchCase="'Fabian'">La persona es Fabian</p>
    <p *ngSwitchCase="'Julian'">La persona es Julian</p>
    <p *ngSwitchCase="'Ricardo'">La persona es Ricardo</p>
    <p *ngSwitchDefault>No hace match</p>
  </div>
```

### Angular DevTools
- es una extencion para navegadores de internet que permite la depuracion u analisis mas profundo respecto a las paginas o localhost desarrollados con Angular.

<hr>

# Clases de Organizacion y Css (16, 17, 18, 19)
