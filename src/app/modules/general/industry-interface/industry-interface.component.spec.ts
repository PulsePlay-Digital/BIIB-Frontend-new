import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndustryInterfaceComponent } from './industry-interface.component';

describe('IndustryInterfaceComponent', () => {
  let component: IndustryInterfaceComponent;
  let fixture: ComponentFixture<IndustryInterfaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndustryInterfaceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndustryInterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
