import { Component, OnInit } from '@angular/core';
import { Rendezvous } from '../model/rendezvous';
import { RendezvousService } from '../service/rendezvous.service';

@Component({
  selector: 'app-rendezvous',
  templateUrl: './rendezvous.component.html',
  styleUrls: ['./rendezvous.component.css']
})
export class RendezvousComponent implements OnInit {
  rendezvousList: Rendezvous[] = []
     
      selectedRendezvous: any;
    
      constructor(private rendezvousservice:RendezvousService) { }
    
      ngOnInit(): void {
        this.displayRendezvous();
      }
      
      displayRendezvous() {
        this.rendezvousservice.getAllRendezvous().subscribe((res)=>{
          this.rendezvousList = res;
          console.log(this.rendezvousList);
        });
      }
    
      selectRendezvous(rendezvous:any){
        this.selectedRendezvous=rendezvous;
     }

}
