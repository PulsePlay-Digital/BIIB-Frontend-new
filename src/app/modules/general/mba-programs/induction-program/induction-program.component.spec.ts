import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InductionProgramComponent } from './induction-program.component';

describe('InductionProgramComponent', () => {
  let component: InductionProgramComponent;
  let fixture: ComponentFixture<InductionProgramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InductionProgramComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InductionProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
