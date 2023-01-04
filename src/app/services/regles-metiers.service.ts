import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReglesMetiersService {

  constructor() { }

  estPaire(nombre: number): boolean {
    return nombre ? nombre % 2 === 0 : false;
  }
}
