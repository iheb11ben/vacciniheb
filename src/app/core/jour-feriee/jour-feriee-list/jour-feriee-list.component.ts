import { Component, OnInit } from '@angular/core';
import { JourFeriee } from 'src/app/model/jour-feriee';
import { JourFerieeService } from 'src/app/service/jour-feriee.service';

@Component({
  selector: 'app-jour-feriee-list',
  templateUrl: './jour-feriee-list.component.html',
  styleUrls: ['./jour-feriee-list.component.scss']
})
export class JourFerieeListComponent implements OnInit {

  jourFeriees:JourFeriee[]=[]
  constructor(private jourFerieeService:JourFerieeService) { 
   
  }

  ngOnInit(): void {
    this.jourFeriees=this.jourFerieeService.getAlljourFeriees()

  }
  deleteByName(name:string){
    
    this.jourFerieeService.deleteByName(name)
    this.jourFeriees=this.jourFerieeService.getAlljourFeriees()

  }
}