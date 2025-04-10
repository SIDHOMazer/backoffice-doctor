import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { PatientService } from 'src/app/service/patient.service';
import { Patient } from 'src/app/model/patient';
@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
  patientList: Patient[] = []
   
    selectedPatient: any;
  
    constructor(private patientservice:PatientService) { }
  
    ngOnInit(): void {
      this.displayPatient();
    }
    
    displayPatient() {
      this.patientservice.getAllPatient().subscribe((res)=>{
        this.patientList = res;
        console.log(this.patientList);
      });
    }
  
    selectPatient(patient:any){
      this.selectedPatient=patient;
   }
    
}
