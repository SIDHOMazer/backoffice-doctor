import { Component, OnInit } from '@angular/core';
import { DocteurService } from 'src/app/service/docteur.service';
import { Docteur } from 'src/app/model/docteur';
@Component({
  selector: 'app-docteur',
  templateUrl: './docteur.component.html',
  styleUrls: ['./docteur.component.css']
})
export class DocteurComponent implements OnInit {
  docteurList: Docteur[] = [];
  selectedDocteur: any;

  constructor(private docteurservice:DocteurService) { }

  ngOnInit(): void {
    this.displayDocteur();
  }
  
  displayDocteur() {
    this.docteurservice.getAllDocteur().subscribe((res)=>{
      this.docteurList = res;
      console.log(this.docteurList);
    });
  }

  selectDocteur(docteur:any){
    this.selectedDocteur=docteur;
 }
  
  } 


