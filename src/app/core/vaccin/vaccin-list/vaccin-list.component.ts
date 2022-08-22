import { Component, OnInit } from '@angular/core';
import { Vaccin } from 'src/app/model/vaccin';
import { VaccinService } from 'src/app/service/vaccin.service';

@Component({
  selector: 'app-vaccin-list',
  templateUrl: './vaccin-list.component.html',
  styleUrls: ['./vaccin-list.component.scss']
})
export class VaccinListComponent implements OnInit {

  constructor(private vaccinService:VaccinService) { }
vaccin:Vaccin[]=[]
  ngOnInit(): void {
    
  }
getAllVaccinController(){
  this.vaccin=this.vaccinService.getAllVaccinService()
}
}
