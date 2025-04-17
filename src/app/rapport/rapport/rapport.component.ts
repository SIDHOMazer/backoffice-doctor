import { Component, OnInit } from '@angular/core';
import { Rapport } from 'src/app/model/rapport';
import { RapportService } from 'src/app/service/rapport.service';

@Component({
  selector: 'app-rapport',
  templateUrl: './rapport.component.html',
  styleUrls: ['./rapport.component.css']
})
export class RapportComponent  implements OnInit {
  rapportList: any[] = [];
  selectedRapport: any;
reportList: any;

  constructor(private rapportservice:RapportService) { }

  ngOnInit(): void {
    this.displayRapport();
  }

  displayRapport() {
    this.rapportservice.getAllRapport().subscribe((res:any)=>{
      this.rapportList = res;
      console.log(this.rapportList);
    });
  }

  selectRapport(rapport:any){
    this.selectedRapport=rapport;
 }
  
}
