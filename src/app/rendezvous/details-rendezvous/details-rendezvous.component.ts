import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { RendezvousService } from 'src/app/service/rendezvous.service';

@Component({
  selector: 'app-details-rendezvous',
  templateUrl: './details-rendezvous.component.html',
  styleUrls: ['./details-rendezvous.component.css']
})
export class DetailsRendezvousComponent {
  rendezvousForm: FormGroup;
  rendezvousId: any;
    constructor(
      private fb: FormBuilder,
      private rendezvousService: RendezvousService,
      private router: Router,
      private route: ActivatedRoute
    ) {
      this.rendezvousForm = this.fb.group({
        date: ['', Validators.required],
        statut: ['', Validators.required],
        acceptDate: [''],
        rejectDate: [''],
        nameCompany: ['']
        
        
      });
    }
    ngOnInit(): void {
      this.rendezvousId= this.route.snapshot.paramMap.get('id');
      if (this.rendezvousId != 'null') {
        this.displayRendezvous(this.rendezvousId);
      }
    }
    displayRendezvous(id: any) {
      this.rendezvousService.getRendezvousById(id).subscribe((res:any)=> {
        this.rendezvousForm.patchValue(res);
        console.log(this.rendezvousForm.value);
      });
    }
   
  onSubmit(): void {
    if (this.rendezvousForm.valid) {
      if (this.rendezvousId != 'null') {
        this.updateRendezvous()
      }else{
        this.rendezvousService
          .addRendezvous(this.rendezvousForm.value)
          .subscribe((res: any) => {
            console.log(res);
            this.rendezvousForm.reset();
            this.router.navigate(['/rendezvous']);
          
          });
      }
    }
  }
  
  
  updateRendezvous() {
    if (this.rendezvousForm.valid) {
      console.log(this.rendezvousForm.value);
      this.rendezvousService.updateRendezvous(this.rendezvousId, this.rendezvousForm.value).subscribe((res: any) => {
        console.log(res);
        this.rendezvousForm.reset();
        this.router.navigate(['/rendezvous']);
      });
    }
  }

}
