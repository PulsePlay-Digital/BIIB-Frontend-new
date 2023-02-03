import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NationalBusinessTrainingComponent } from './national-business-training.component';

describe('NationalBusinessTrainingComponent', () => {
  let component: NationalBusinessTrainingComponent;
  let fixture: ComponentFixture<NationalBusinessTrainingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NationalBusinessTrainingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NationalBusinessTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
