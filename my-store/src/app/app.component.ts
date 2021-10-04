import { BoundText } from '@angular/compiler/src/render3/r3_ast';
import { Component } from '@angular/core';
import { Producto } from './product.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  widthImg = 10;
  name = 'Fabian';
  age = 18;
  img = 'https://media.discordapp.net/attachments/516433396596211712/893168319966896168/ExT9Z8kWQAEHiak.png';
  btnDisabled = true;
  register = {
    name: '',
    email: '',
    password: ''
  }

  //Objeto para realizar la Property Binding
  persona = {
    name: 'Fabian',
    age: 18,
    avatar: 'https://media.discordapp.net/attachments/516433396596211712/893168319966896168/ExT9Z8kWQAEHiak.png'
  }

  toggleButton(){
    this.btnDisabled = !this.btnDisabled;
  }
  PlusButton(){
    this.persona.age += 1;
  }
  onScroll(event: Event){
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);
  }

  changeName(event : Event){
    const element = event.target as HTMLInputElement;
    this.persona.name = element.value;
  }

  //ngFor Array
  emojis =[ '😂' , '🐦', '🐳','🌮', '💚']
  newName = '';
  caja = {
    width: 50,
    height: 100,
    background: 'red'
  };
  Productos: Producto[] = [

    {
    nombre:'El mejor juguete',
    precio: 2000,
    imagen:'./assets/images/toy.jpg',
    category: 'todo'
    },
    {
    nombre:'Bicicleta casi nueva',
    precio: 55000,
    imagen:'./assets/images/bike.jpg'
    },
    {
    nombre:'Album',
    precio: 500,
    imagen:'./assets/images/album.jpg'
    },
    {
    nombre:'Mis libros',
    precio: 30000,
    imagen:'./assets/images/books.jpg'
    },
    {
    nombre:'Casa para perro',
    precio: 50000,
    imagen:'./assets/images/house.jpg'
    },
    {
    nombre:'Gafas',
    precio: 2500,
    imagen:'./assets/images/glasses.jpg'
    },
    
];  


  addName(){
    this.emojis.push(this.newName);
    this.newName = '';
  }
  delName(index: number){
    this.emojis.splice(index, 1);
  }
  
  OnRegister(){
    console.log(this.register);
  }
}
