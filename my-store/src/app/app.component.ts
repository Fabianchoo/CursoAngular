import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name = 'Fabian';
  age = 18;
  img = 'https://media.discordapp.net/attachments/516433396596211712/893168319966896168/ExT9Z8kWQAEHiak.png';
  btnDisabled = true;

  //Objeto para realizar la Property Binding
  persona = {
    name: 'Fabian',
    age: 18,
    avatar: 'https://media.discordapp.net/attachments/516433396596211712/893168319966896168/ExT9Z8kWQAEHiak.png'
  }
}
