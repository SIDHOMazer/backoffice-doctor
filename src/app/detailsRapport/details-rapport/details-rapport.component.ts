import { Component } from '@angular/core';
import { DetailsRapport } from 'src/app/model/detailsRaport';
import { DetailsRapportService } from 'src/app/service/details-rapport.service';

@Component({
  selector: 'app-details-rapport',
  templateUrl: './details-rapport.component.html',
  styleUrls: ['./details-rapport.component.css']
})
export class DetailsRapportComponent {
  detailsRapportist: DetailsRapport[] = [];
   selectedDetailsRapport: any;
   constructor(private  detailsRapportservice:  DetailsRapportService) { }
 
   ngOnInit(): void {
     this.displayDetailsRapport();
   }
 
   displayDetailsRapport() {
     this. detailsRapportservice.getAllDetailsRapports().subscribe((res:any)=>{
      this. detailsRapportist = res;
     console.log(this. detailsRapportist);
     });
   
   }
 
   selectDetailsRapport( detailsRapport:any){
     this.selectedDetailsRapport= detailsRapport;
  }
}
