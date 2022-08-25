import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './core/acceuil/layout/layout/layout.component';
import { EtablissementComponent } from './core/etablissement/etablissement.component';
import { HomeComponent } from './core/home/home.component';
import { JourFerieeComponent } from './core/jour-feriee/jour-feriee.component';
import { LoginComponent } from './core/login/login.component';

import { ParentListComponent } from './core/parent/parent-list/parent-list.component';
import { ParentComponent } from './core/parent/parent.component';
import { PatientListComponent } from './core/patient/patient-list/patient-list.component';
import { PatientComponent } from './core/patient/patient.component';
import { VaccinListComponent } from './core/vaccin/vaccin-list/vaccin-list.component';
import { AuthGuardsGuard } from './guard/auth-guards.guard';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'home',component:HomeComponent,children:[
  {path:'patient',component:PatientComponent},
  {path:'patient/:id',component:PatientComponent},
  {path:'lpatient',component:PatientListComponent},
  {path:'parent',component:ParentComponent},
  {path:'parent/:id',component:ParentComponent},
  {path:'lparent',component:ParentListComponent},
  {path:'lvaccin',component:VaccinListComponent},
  {path:'etabli',component:EtablissementComponent},
  {path:'chart',component:LayoutComponent}]},
  {path:'jourf',component:JourFerieeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
