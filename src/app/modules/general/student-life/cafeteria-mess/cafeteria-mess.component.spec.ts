import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CafeteriaMessComponent } from './cafeteria-mess.component';

describe('CafeteriaMessComponent', () => {
  let component: CafeteriaMessComponent;
  let fixture: ComponentFixture<CafeteriaMessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CafeteriaMessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CafeteriaMessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
