import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientComponent } from './patient/patient/patient.component';
import { DocteurComponent } from './docteur/docteur/docteur.component';
import { AdminComponent } from './admin/admin/admin.component';
import { DetailsDoctorComponent } from './docteur/details-doctor/details-doctor.component';

const routes: Routes = [
  {
    path: 'patient',
    component:PatientComponent
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
