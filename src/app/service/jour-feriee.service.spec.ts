import { TestBed } from '@angular/core/testing';

import { JourFerieeService } from './jour-feriee.service';

describe('JourFerieeService', () => {
  let service: JourFerieeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JourFerieeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
