import { TestBed } from '@angular/core/testing';

import { PatientVaccinService } from './patient-vaccin.service';

describe('PatientVaccinService', () => {
  let service: PatientVaccinService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PatientVaccinService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
