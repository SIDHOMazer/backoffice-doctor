import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientComponent } from './patient/patient/patient.component';
import { DocteurComponent } from './docteur/docteur/docteur.component';
import { AdminComponent } from './admin/admin/admin.component';
import { DetailsDoctorComponent } from './docteur/details-doctor/details-doctor.component';
import { BaseComponent } from './layouts/base/base.component';
import { DetailsPatientComponent } from './patient/details-patient/details-patient.component';
import { DetailsAdminComponent } from './admin/admin/details-admin/details-admin.component';
import { DetailsRapportComponent } from './detailsRapport/details-rapport/details-rapport.component';
import { DetailsReportComponent } from './rapport/details-report/details-report.component';
import { RapportComponent } from './rapport/rapport/rapport.component';
import { RendezvousComponent } from './rendezvous/rendezvous.component';
import { DetailsRendezvousComponent } from './rendezvous/details-rendezvous/details-rendezvous.component';
import { FactureComponent } from './facture/facture.component';
import { DetailsFactureComponent } from './facture/details-facture/details-facture.component';
import { PlanDeTraitementComponent } from './plan-de-traitement/plan-de-traitement.component';
import { DetailsPlanDeTraitementComponent } from './plan-de-traitement/details-plan-de-traitement/details-plan-de-traitement.component';
import { ExerciceComponent } from './exercice/exercice.component';
import { DetailsExerciceComponent } from './exercice/details-exercice/details-exercice.component';
import { ExerciceplanComponent } from './exerciceplan/exerciceplan.component';
import { DetailsExerciceplanComponent } from './exerciceplan/details-exerciceplan/details-exerciceplan.component';

const routes: Routes = [
  {
    path: '',
    component:BaseComponent,
    children: [
  
  {
    path: 'patient',
    component:PatientComponent
  },
  {
    path: 'patient-details/:id',
    component:DetailsPatientComponent
  },
  {
    path: 'doctor',
    component:DocteurComponent
  },
  {
    path: 'doctor-details/:id',
    component:DetailsDoctorComponent
  },
  {
    path: 'admin',
    component:AdminComponent
  },
  {
    path: 'admin-details/:id',
    component:DetailsAdminComponent
  },
  {
    path: 'report',
    component:RapportComponent
  },
  {
    path: 'report-details/:id',
    component:DetailsReportComponent
  },
  {
    path: 'detailsRapport',
    component:DetailsRapportComponent
  },
  {
    path: 'rendezvous',
    component:RendezvousComponent
  },
  {
    path: 'rendezvous-details/:id',
    component:DetailsRendezvousComponent
  },
  {
    path: 'facture',
    component:FactureComponent
  },
  {
    path: 'facture-details/:id',
    component:DetailsFactureComponent
  },
  {
    path: 'planDeTraitement',
    component:PlanDeTraitementComponent
  },
  {
    path: 'planDeTraitement-details/:id',
    component:DetailsPlanDeTraitementComponent
  },
  {
    path: 'exercice',
    component:ExerciceComponent
  },
  {
    path: 'exercice-details/:id',
    component:DetailsExerciceComponent
  },
  {
    path: 'exercicePlan',
    component:ExerciceplanComponent
  },
  {
    path: 'exercicePlan-details/:id',
    component:DetailsExerciceplanComponent
  }
]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
