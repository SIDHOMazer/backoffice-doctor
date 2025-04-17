import { Component, OnInit } from '@angular/core';
import { FactureService } from '../service/facture.service';
import { Facture } from '../model/facture';

@Component({
  selector: 'app-facture',
  templateUrl: './facture.component.html',
  styleUrls: ['./facture.component.css']
})
export class FactureComponent implements OnInit {
  factureList: Facture[] = [];
   selectedFacture: any;
 
   constructor(private  factureservice:FactureService) { }
 
   ngOnInit(): void {
     this.displayFacture();
   }
   
   displayFacture() {
     this. factureservice.getAllFactures().subscribe((res)=>{
       this. factureList = res;
       console.log(this. factureList);
     });
   }
 
   selectFacture( facture:any){
     this.selectedFacture= facture;
  }
   


}
