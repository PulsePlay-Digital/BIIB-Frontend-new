import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonItSectorComponent } from './non-it-sector.component';

describe('NonItSectorComponent', () => {
  let component: NonItSectorComponent;
  let fixture: ComponentFixture<NonItSectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NonItSectorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NonItSectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
