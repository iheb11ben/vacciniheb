import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './core/acceuil/layout/layout/layout.component';
import { EtablissementComponent } from './core/etablissement/etablissement.component';
import { ParentListComponent } from './core/parent/parent-list/parent-list.component';
import { ParentComponent } from './core/parent/parent.component';
import { PatientListComponent } from './core/patient/patient-list/patient-list.component';
import { PatientComponent } from './core/patient/patient.component';
import { VaccinListComponent } from './core/vaccin/vaccin-list/vaccin-list.component';

const routes: Routes = [
  {path:'',component:LayoutComponent},
  {path:'patient',component:PatientComponent},
  {path:'lpatient',component:PatientListComponent},
  {path:'parent',component:ParentComponent},
  {path:'lparent',component:ParentListComponent},
  {path:'lvaccin',component:VaccinListComponent},
  {path:'etabli',component:EtablissementComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
