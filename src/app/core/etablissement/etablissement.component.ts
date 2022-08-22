import { Component, OnInit } from '@angular/core';
import { Etablissement } from 'src/app/model/etablissement';
import { EtablissementService } from 'src/app/service/etablissement.service';

@Component({
  selector: 'app-etablissement',
  templateUrl: './etablissement.component.html',
  styleUrls: ['./etablissement.component.scss']
})
export class EtablissementComponent implements OnInit {

  constructor(private etablissementService:EtablissementService) { }
  etablis:Etablissement={nom:"",jourVaccin:'',phone:0,email:'',province:''}
  ngOnInit(): void {
  }
  addEtabController(){
    this.etablissementService.addEtablissementService(this.etablis)
   
}
}