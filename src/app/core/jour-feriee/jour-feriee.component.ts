import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JourFeriee } from 'src/app/model/jour-feriee';
import { JourFerieeService } from 'src/app/service/jour-feriee.service';

@Component({
  selector: 'app-jour-feriee',
  templateUrl: './jour-feriee.component.html',
  styleUrls: ['./jour-feriee.component.scss']
})
export class JourFerieeComponent implements OnInit {

 

  jourFeriee:JourFeriee={dateJF:new Date(),jourFeriee:""}
  constructor(private router:ActivatedRoute,private jourFerieeService:JourFerieeService ) { 
    if (this.router.snapshot.params["id"]>-1){
      this.jourFeriee=jourFerieeService.getjourFerieeByID(this.router.snapshot.params["id"])
    }
  }

  ngOnInit(): void {
  }
  add(){
    if (this.router.snapshot.params["id"]==-1){
      this.jourFerieeService.add(this.jourFeriee)
    }
  }



}