import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialGuestVisitComponent } from './special-guest-visit.component';

describe('SpecialGuestVisitComponent', () => {
  let component: SpecialGuestVisitComponent;
  let fixture: ComponentFixture<SpecialGuestVisitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecialGuestVisitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecialGuestVisitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
