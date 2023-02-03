import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AICTEApprovalComponent } from './aicte-approval.component';

describe('AICTEApprovalComponent', () => {
  let component: AICTEApprovalComponent;
  let fixture: ComponentFixture<AICTEApprovalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AICTEApprovalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AICTEApprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
