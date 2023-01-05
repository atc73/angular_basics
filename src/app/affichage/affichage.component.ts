import { Component, OnDestroy, OnInit } from '@angular/core';
import { GestionsDatasService } from '../services/gestions-datas.service';

@Component({
  selector: 'app-affichage',
  templateUrl: './affichage.component.html',
  styleUrls: ['./affichage.component.css']
})
export class AffichageComponent implements OnInit, OnDestroy {

  datasSaisies!: string[];

  constructor(private gestionsDatas: GestionsDatasService) { }

  ngOnInit(): void {
    this.gestionsDatas
        .emetteurDesSaisies.subscribe(values => this.datasSaisies = values)
  }

  ngOnDestroy(): void {
    this.gestionsDatas.emetteurDesSaisies.unsubscribe();
  }

}
