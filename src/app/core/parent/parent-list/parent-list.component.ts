import { Component, OnInit } from '@angular/core';
import { Parent } from 'src/app/model/parent';
import { ParentService } from 'src/app/service/parent.service';

@Component({
  selector: 'app-parent-list',
  templateUrl: './parent-list.component.html',
  styleUrls: ['./parent-list.component.scss']
})
export class ParentListComponent implements OnInit {
  parent!: Parent[]
  constructor(private parentService: ParentService) { }

  ngOnInit(): void {
    this.getAllParentController()
  }
  getAllParentController() {
    this.parent = this.parentService.getAllParentService()
  }
  deleteByName(name: string) {
    this.parentService.deleteParentServiceByName(name)
    this.parent = this.parentService.getAllParentService()
  }
}