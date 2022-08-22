import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JourFerieeListComponent } from './jour-feriee-list.component';

describe('JourFerieeListComponent', () => {
  let component: JourFerieeListComponent;
  let fixture: ComponentFixture<JourFerieeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JourFerieeListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JourFerieeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
