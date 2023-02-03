import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItSectorComponent } from './it-sector.component';

describe('ItSectorComponent', () => {
  let component: ItSectorComponent;
  let fixture: ComponentFixture<ItSectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItSectorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItSectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
