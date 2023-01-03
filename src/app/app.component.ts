import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Alboukazim';
  valeurInput = 'une valeur venant du composant';
  zoneSaisie: any;

  onClick() {
    console.log("Button clicked!")
  }
}
