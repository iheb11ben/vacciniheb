import { Injectable } from '@angular/core';
import { Vaccin } from '../model/vaccin';

@Injectable({
  providedIn: 'root'
})
export class VaccinService {
vaccin!:Vaccin[]
  constructor() {
    this.vaccin=[
      { nom:"BCG+VHB-0",age:0},
      { nom:"Pentavalent-1+VPI+VPC-1",age:2},
      { nom:"Pentavalent-2+VPI",age:3},
      { nom:"VPC-2",age:4},
      { nom:"Pentavalent-3+VPO",age:6},
      { nom:"VPC-3",age:11},
      { nom:"RR-1+VHA",age:12},
      { nom:"DTC4+VPO+RR-2",age:18},
    ]
   }
   getAllVaccinService(){
    return this.vaccin;
   }
   deleteParentServiceByName(name: string) {
    console.log(name);
    this.vaccin = this.vaccin.filter(obj => obj.nom != name)
  }
}
