import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DocteurService } from 'src/app/service/docteur.service';

@Component({
  selector: 'app-details-doctor',
  templateUrl: './details-doctor.component.html',
  styleUrls: ['./details-doctor.component.css'],
})
export class DetailsDoctorComponent {
  docteurForm: FormGroup;
  doctorId: any;
  doctorForm: any;
  constructor(
    private fb: FormBuilder,
    private docteurService: DocteurService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    
    this.docteurForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      adresse: [''],
      ville: [''],
      codePostal: [''],
      email: ['', [Validators.required, Validators.email]],
      sexe: [''],
      password: [''],
      localisation: [''],
      specialite: [''],
      contact: [''],
      
    });
  }

  ngOnInit(): void {
    this.doctorId = this.route.snapshot.paramMap.get('id');
    if (this.doctorId != 'null') {
      this.displayDocteur(this.doctorId);
    }
  }

  displayDocteur(id: any) {
    this.docteurService.getDocteurById(id).subscribe((res) => {
      this.docteurForm.patchValue(res);
      console.log(this.docteurForm.value);
    });
  }

  onSubmit(): void {
    if (this.docteurForm.valid) {
      if (this.doctorId != 'null') {
        this.updateDoctor()
      }else{
        this.docteurService
          .addDoctor(this.docteurForm.value)
          .subscribe((res) => {
            console.log(res);
            this.docteurForm.reset();
            this.router.navigate(['/doctor']);
          });
      }
    }
  }

  updateDoctor() {
    if (this.docteurForm.valid) {
      console.log(this.docteurForm.value);
      this.docteurService.updateDoctor(this.doctorId,this.docteurForm.value).subscribe((res) => {
        console.log(res);
        this.docteurForm.reset();
        this.router.navigate(['/doctor']);
      });
    }
  }
}
