import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MbaProgramsComponent } from './mba-programs.component';

describe('MbaProgramsComponent', () => {
  let component: MbaProgramsComponent;
  let fixture: ComponentFixture<MbaProgramsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MbaProgramsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MbaProgramsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
