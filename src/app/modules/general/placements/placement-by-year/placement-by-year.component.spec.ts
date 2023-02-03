import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacementByYearComponent } from './placement-by-year.component';

describe('PlacementByYearComponent', () => {
  let component: PlacementByYearComponent;
  let fixture: ComponentFixture<PlacementByYearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlacementByYearComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlacementByYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
