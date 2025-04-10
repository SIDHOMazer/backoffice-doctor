import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsPatientComponent } from './details-patient.component';

describe('DetailsPatientComponent', () => {
  let component: DetailsPatientComponent;
  let fixture: ComponentFixture<DetailsPatientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailsPatientComponent]
    });
    fixture = TestBed.createComponent(DetailsPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
