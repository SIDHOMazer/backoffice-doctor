import { Component } from '@angular/core';
import { Exercice } from '../model/exercice';
import { ExerciceService } from '../service/exercice.service';

@Component({
  selector: 'app-exercice',
  templateUrl: './exercice.component.html',
  styleUrls: ['./exercice.component.css']
})
export class ExerciceComponent {
  exerciceList: Exercice[] = [];
    selectedExercice: any;
exercice: any;
  
    constructor(private exerciceservice:ExerciceService) { }
  
    ngOnInit(): void {
      this.displayExercice();
    }
    
    displayExercice() {
      this.exerciceservice.getAllExercices().subscribe((res)=>{
        this.exerciceList = res;
        console.log(this.exerciceList);
      });
    }
  
    selectExercice(exercice:any){
      this.selectedExercice=exercice;
   }

}
