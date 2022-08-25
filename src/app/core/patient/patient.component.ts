import { Component, OnInit } from '@angular/core';
import { Parent } from 'src/app/model/parent';
import { Patient } from 'src/app/model/patient';
import { ParentService } from 'src/app/service/parent.service';
import { PatientService } from 'src/app/service/patient.service';
import * as moment from 'moment';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss']
})
export class PatientComponent implements OnInit {
  patients:Patient[]=[]
  patient!:Patient
  parent!:Parent
  parents:Parent[]
  date:any
  date12!:string;
  constructor(private patientService:PatientService, private parentService:ParentService) { 
      this.date=new Date("01/01/2010")
    this.parents=this.parentService.getAllParentService()
    // this.patient={dateNaissance:this.date.moment.format("MMM Do YY"),nom:"",parent:this.parents[0]}
  
  
  };
    
    
  ngOnInit(): void {
    this.patients=this.patientService.getAllPatientService()
    console.log('moment test', this.patient);
    
    console.log(moment().subtract(10, 'days').calendar());
    
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