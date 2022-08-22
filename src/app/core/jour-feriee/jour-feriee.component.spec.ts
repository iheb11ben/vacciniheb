import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JourFerieeComponent } from './jour-feriee.component';

describe('JourFerieeComponent', () => {
  let component: JourFerieeComponent;
  let fixture: ComponentFixture<JourFerieeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JourFerieeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JourFerieeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
