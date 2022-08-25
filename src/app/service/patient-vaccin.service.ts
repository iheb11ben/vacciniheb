import { Injectable } from '@angular/core';
import { Patient } from '../model/patient';
import { PatientVaccin } from '../model/patient-vaccin';
import { Vaccin } from '../model/vaccin';
import { PatientService } from './patient.service';
import { VaccinService } from './vaccin.service';


@Injectable({
  providedIn: 'root'
})
export class PatientVaccinService {
vaccins!:Vaccin[]
patients!:Patient[]
  patientvacc:PatientVaccin[]=[
  
]
  constructor(private patientService:PatientService, private vaccinService:VaccinService) { 
   this.patients=this.patientService.getAllPatientService()
   this.vaccins=this.vaccinService.getAllVaccinService()
   this.patientvacc=[
    {datePrevu:new Date("15/04/2022"),dateVaccin:new Date("15/04/2022"),effectuePar:'docteur 1',etat:false,heureVaccin:{hours:10,minutes:56},patient:this.patients[0],vaccin:this.vaccins[3]}
    {datePrevu:new Date("15/04/2022"),dateVaccin:new Date("15/04/2022"),effectuePar:'docteur 1',etat:false,heureVaccin:{hours:10,minutes:56},patient:this.patients[0],vaccin:this.vaccins[2]}
    {datePrevu:new Date("15/04/2022"),dateVaccin:new Date("15/04/2022"),effectuePar:'docteur 1',etat:false,heureVaccin:{hours:10,minutes:56},patient:this.patients[0],vaccin:this.vaccins[1]}
  ]
  }
getAllPatVacc(){
  return this.patientvacc;
}

}
