import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PastTrendComponent } from './past-trend.component';

describe('PastTrendComponent', () => {
  let component: PastTrendComponent;
  let fixture: ComponentFixture<PastTrendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PastTrendComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PastTrendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
