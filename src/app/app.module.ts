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


@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    DocteurComponent,
    PatientComponent,
    DetailsDoctorComponent,
    DetailsPatientComponent,
   
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
