import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogPopupVideoComponent } from './dialog-popup-video.component';

describe('DialogPopupVideoComponent', () => {
  let component: DialogPopupVideoComponent;
  let fixture: ComponentFixture<DialogPopupVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogPopupVideoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogPopupVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
