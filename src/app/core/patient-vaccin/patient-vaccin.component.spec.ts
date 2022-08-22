import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientVaccinComponent } from './patient-vaccin.component';

describe('PatientVaccinComponent', () => {
  let component: PatientVaccinComponent;
  let fixture: ComponentFixture<PatientVaccinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientVaccinComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientVaccinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
