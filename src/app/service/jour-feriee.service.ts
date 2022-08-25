import { Injectable } from '@angular/core';
import { JourFeriee } from '../model/jour-feriee';

@Injectable({
  providedIn: 'root'
})
export class JourFerieeService {

  jourFeriees:JourFeriee[]=[
    {dateJF:new Date("01/01/2010"),jourFeriee:"JF1"},
    {dateJF:new Date("01/02/2010"),jourFeriee:"JF2"},
    {dateJF:new Date("01/03/2010"),jourFeriee:"JF3"},
    {dateJF:new Date("01/04/2010"),jourFeriee:"JF4"},
    {dateJF:new Date("01/05/2010"),jourFeriee:"JF5"},
   ]
     constructor() { }
     getAlljourFeriees(){
       return this.jourFeriees
     }
     getjourFerieeByID(id:number){
       return this.jourFeriees[id]
     }
     deleteByName(name:string){
       console.log(this.jourFeriees);
       
       this.jourFeriees=  this.jourFeriees.filter(x=>x.jourFeriee!=name)
       console.log(this.jourFeriees);
       
     }
     add(jourFeriee:JourFeriee){
      
       this.jourFeriees.push(jourFeriee)
     }
   }