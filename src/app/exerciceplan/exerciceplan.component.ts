import { Component, OnInit } from '@angular/core';
import { ExerciceplanService } from '../service/exerciceplan.service';
import { ExercicePlan } from '../model/exerciceplan';

@Component({
  selector: 'app-exerciceplan',
  templateUrl: './exerciceplan.component.html',
  styleUrls: ['./exerciceplan.component.css']
})
export class ExerciceplanComponent implements OnInit  {
  exerciceplanList: ExercicePlan[] = [];
    selectedExerciceplan: any;
exerciceplan: any;
exercicePlanList: any;
  
    constructor(private exerciceplanservice:ExerciceplanService) { }
  
    ngOnInit(): void {
      this.displayExerciceplan();
    }
    
    displayExerciceplan() {
      this.exerciceplanservice.getAllExerciceplans().subscribe((res)=>{
        this.exerciceplanList = res;
        console.log(this.exerciceplanList);
      });
    }
  
    selectExerciceplan(exerciceplan:any){
      this.selectedExerciceplan=exerciceplan;
   }

}
