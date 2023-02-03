import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentCouncilComponent } from './student-council.component';

describe('StudentCouncilComponent', () => {
  let component: StudentCouncilComponent;
  let fixture: ComponentFixture<StudentCouncilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentCouncilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentCouncilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
