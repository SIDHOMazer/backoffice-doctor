import { Component, OnInit } from '@angular/core';
import { PlanDeTraitementService } from '../service/plan-de-traitement.service';
import { PlanDeTraitement } from '../model/planDeTraitement';

@Component({
  selector: 'app-plan-de-traitement',
  templateUrl: './plan-de-traitement.component.html',
  styleUrls: ['./plan-de-traitement.component.css']
})
export class PlanDeTraitementComponent implements OnInit {
  planDeTraitementList: PlanDeTraitement[] = [];
     selectedPlanDeTraitement: any;
   
     constructor(private planDeTraitementservice:PlanDeTraitementService) { }
   
     ngOnInit(): void {
       this.displayPlanDeTraitement();
     }
     
     displayPlanDeTraitement() {
       this.planDeTraitementservice.getAllPlanDeTraitements().subscribe((res)=>{
         this.planDeTraitementList = res;
         console.log(this.planDeTraitementList);
       });
     }
   
     selectPlanDeTraitement(planDeTraitement:any){
       this.selectedPlanDeTraitement=planDeTraitement;
    }
}
