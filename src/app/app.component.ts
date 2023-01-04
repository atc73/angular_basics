import { Component } from '@angular/core';
import { ReglesMetiersService } from './services/regles-metiers.service';

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
  nombres: number[] = [1, 3, 4, 8, 15, 16];

  constructor(private reglesMetiersServices: ReglesMetiersService) {}

  onClick() {
    console.log("Button clicked!")
  }

  getClasses(nombre: number) {
    const estPaire = this.reglesMetiersServices.estPaire(nombre);
    return { 'vert': estPaire, 'rouge': !estPaire };
  }
}
