import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-details-admin',
  templateUrl: './details-admin.component.html',
  styleUrls: ['./details-admin.component.css']
})
export class DetailsAdminComponent {
  adminForm: FormGroup;
  adminId: any;
   constructor(
     private fb: FormBuilder,
     private adminService: AdminService,
     private router: Router,
     private route: ActivatedRoute
  ) {
    
    this.adminForm = this.fb.group({
            firstname: ['', Validators.required],
            lastname: ['', Validators.required],
            specialite: [''],
            contact: [''],
            password: [''],
            email: ['', [Validators.required, Validators.email]],
            adresse: [''],
            ville: [''],
            codePostal: [''],
            status: [''],
            

      
      
    });
  }

  ngOnInit(): void {
    this.adminId = this.route.snapshot.paramMap.get('id');
    if (this.adminId != 'null') {
      this.displayAdmin(this.adminId);
    }
  }

  displayAdmin(id: any) {
    this.adminService.getAdminById(id).subscribe((res:any)=> {
      this.adminForm.patchValue(res);
      console.log(this.adminForm.value);
    });
  }

  onSubmit(): void {
    if (this.adminForm.valid) {
      if (this.adminId != 'null') {
        this.updateAdmin()
      }else{
        this.adminService
          .addAdmin(this.adminForm.value)
          .subscribe((res: any) => {
            console.log(res);
            this.adminForm.reset();
            this.router.navigate(['/admin']);
          });
      }
    }
  }

  updateAdmin() {
    if (this.adminForm.valid) {
      console.log(this.adminForm.value);
      this.adminService.updateAdmin(this.adminId,this.adminForm.value).subscribe((res: any) => {
        console.log(res);
        this.adminForm.reset();
        this.router.navigate(['/admin']);
      });
    }
  }
}
