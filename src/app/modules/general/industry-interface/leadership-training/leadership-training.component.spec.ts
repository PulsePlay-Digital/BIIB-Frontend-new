import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadershipTrainingComponent } from './leadership-training.component';

describe('LeadershipTrainingComponent', () => {
  let component: LeadershipTrainingComponent;
  let fixture: ComponentFixture<LeadershipTrainingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeadershipTrainingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeadershipTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
