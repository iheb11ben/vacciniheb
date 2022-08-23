import { Component, OnInit } from '@angular/core';
import { Parent } from 'src/app/model/parent';
import { ParentService } from 'src/app/service/parent.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  lparent:Parent={email:"",nom:"",phone:0}
  constructor(private parentService:ParentService,private router:ActivatedRoute) { 
    if (this.router.snapshot.params["id"]>-1){
      this.lparent=parentService.getByIDParentService(this.router.snapshot.params["id"])
    }
  }

  
ngOnInit(): void {
  
  }
addParentController(){
  this.parentService.addParentService(this.lparent)
  console.log("parent ajoutée");
}
 
}
