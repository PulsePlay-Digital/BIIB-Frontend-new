import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranscriptApplicationComponent } from './transcript-application.component';

describe('TranscriptApplicationComponent', () => {
  let component: TranscriptApplicationComponent;
  let fixture: ComponentFixture<TranscriptApplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TranscriptApplicationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TranscriptApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
