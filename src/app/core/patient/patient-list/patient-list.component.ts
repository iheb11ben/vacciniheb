import { Component, OnInit } from '@angular/core';
import { Patient } from 'src/app/model/patient';
import { PatientService } from 'src/app/service/patient.service';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.scss']
})
export class PatientListComponent implements OnInit {
  patients:Patient[]=[]
  
  constructor(private patientService:PatientService) { 
    
  }
  ngOnInit(): void {
    this.patients=this.patientService.getAllPatientService()

  }
  



  getAllPatientController(){
    this.patients=this.patientService.getAllPatientService()
  }
  deleteByName(name:string){
    this.patientService.deletePatientServiceByName(name)
    this.patients=  this.patientService.getAllPatientService()
  }
}