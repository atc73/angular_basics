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
  informations: string[] = [
    'La France est en quart',
    'Le canard est dans la voiture',
    'La fraise est toute verte'
  ];
  classesAAppliquer = {
    'rouge': this.informations.length <= 2,
    'vert': this.informations.length > 2
  }
  dateCreationComposant = new Date();

  onClick() {
    console.log("Button clicked!")
  }
}
