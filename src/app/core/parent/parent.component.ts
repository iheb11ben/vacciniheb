import { Component, OnInit } from '@angular/core';
import { Parent } from 'src/app/model/parent';
import { ParentService } from 'src/app/service/parent.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  constructor(private parentService:ParentService) { }
lparent:Parent={email:"",nom:"",phone:0}
  ngOnInit(): void {
  
  }
addParentController(){
  this.parentService.addParentService(this.lparent)
  console.log("parent ajoutée");
}
 
}
