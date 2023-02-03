import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineGrievanceComponent } from './online-grievance.component';

describe('OnlineGrievanceComponent', () => {
  let component: OnlineGrievanceComponent;
  let fixture: ComponentFixture<OnlineGrievanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnlineGrievanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnlineGrievanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
