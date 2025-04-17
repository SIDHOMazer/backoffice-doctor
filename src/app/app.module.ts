import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminComponent } from './admin/admin/admin.component';
import { DocteurComponent } from './docteur/docteur/docteur.component';
import { PatientComponent } from './patient/patient/patient.component';
import { DetailsDoctorComponent } from './docteur/details-doctor/details-doctor.component';
import { DetailsPatientComponent } from './patient/details-patient/details-patient.component';
import { NavBarComponent } from './layouts/nav-bar/nav-bar.component';
import { BaseComponent } from './layouts/base/base.component';
import { DetailsAdminComponent } from './admin/admin/details-admin/details-admin.component';
import { RapportComponent } from './rapport/rapport/rapport.component';
import { DetailsReportComponent } from './rapport/details-report/details-report.component';
import { DetailsRapportComponent } from './detailsRapport/details-rapport/details-rapport.component';
import { DetailsDetailsRapprotComponent } from './detailsRapport/details-details-rapprot/details-details-rapprot.component';
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


@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    DocteurComponent,
    PatientComponent,
    DetailsDoctorComponent,
    DetailsPatientComponent,
    NavBarComponent,
    BaseComponent,
    DetailsAdminComponent,
    RapportComponent,
    DetailsReportComponent,
    DetailsRapportComponent,
    DetailsDetailsRapprotComponent,
    RendezvousComponent,
    DetailsRendezvousComponent,
    FactureComponent,
    DetailsFactureComponent,
    PlanDeTraitementComponent,
    DetailsPlanDeTraitementComponent,
    ExerciceComponent,
    DetailsExerciceComponent,
    ExerciceplanComponent,
    DetailsExerciceplanComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
