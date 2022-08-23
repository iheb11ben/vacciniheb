import { Component, OnInit } from '@angular/core';
import { Parent } from 'src/app/model/parent';
import { Patient } from 'src/app/model/patient';
import { ParentService } from 'src/app/service/parent.service';
import { PatientService } from 'src/app/service/patient.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss']
})
export class PatientComponent implements OnInit {
  patients:Patient[]=[]
  patient:Patient
  parent!:Parent
  parents:Parent[]
  constructor(private patientService:PatientService, private parentService:ParentService) { 
    this.parents=this.parentService.getAllParentService()
    this.patient={dateNaissance:new Date("01/01/2010"),nom:"",parent:this.parents[0]}}
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
  addPatientController(){
    this.patientService.addPatientService(this.patient)
    console.log("parent ajoutée");
  }
   

}