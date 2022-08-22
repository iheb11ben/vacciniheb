import { Injectable } from '@angular/core';
import { Patient } from '../model/patient';
import { Parent } from '../model/parent';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  parents:Parent[]=[
    {email:"fathi@gmail.com",nom:"fathi ben slama",phone:54749720},
    {email:"hedi@gmail.com",nom:"hedi Najjar",phone:28596720},
    {email:"hamed@gmail.com",nom:"hamed bouharb",phone:55229720},
   
  ]
  Patients:Patient[]=[
    {dateNaissance:new Date,nom:"rami",parent:this.parents[0]},
    {dateNaissance:new Date,nom:"sami",parent:this.parents[1]},
    {dateNaissance:new Date,nom:"hanen",parent:this.parents[2]},
   
  ]
  
  constructor() { }

  deletePatientServiceByName(name:string){
    console.log(name);
    this.Patients=this.Patients.filter(obj=>obj.nom!=name)
  }

  addOrUpdatePatientService(patient:Patient,id:number){
    if(id==-1){
    let newP:Patient={dateNaissance:patient.dateNaissance,parent:patient.parent,nom:patient.nom}
    this.Patients.push(patient)}
    else{
      this.Patients[id]={dateNaissance:patient.dateNaissance,parent:patient.parent,nom:patient.nom}

    }
  }
  
  getAllPatientService(){
    return this.Patients
  }
  getByIDPatientService(id:number){
    return this.Patients[id];
}
addPatientService(patient:Patient){
  this.Patients.push(patient);

}
}


