import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaccinListComponent } from './vaccin-list.component';

describe('VaccinListComponent', () => {
  let component: VaccinListComponent;
  let fixture: ComponentFixture<VaccinListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VaccinListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VaccinListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
