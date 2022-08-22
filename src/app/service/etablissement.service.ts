import { Injectable } from '@angular/core';
import { Etablissement } from '../model/etablissement';

@Injectable({
  providedIn: 'root'
})
export class EtablissementService {
etabli!:Etablissement[]
  constructor() { }
  getEtablissementService(){
    return this.etabli;
  }
  addEtablissementService(etab:Etablissement){
    this.etabli.push(etab);
}
}
