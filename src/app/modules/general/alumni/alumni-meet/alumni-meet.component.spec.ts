import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumniMeetComponent } from './alumni-meet.component';

describe('AlumniMeetComponent', () => {
  let component: AlumniMeetComponent;
  let fixture: ComponentFixture<AlumniMeetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlumniMeetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlumniMeetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
