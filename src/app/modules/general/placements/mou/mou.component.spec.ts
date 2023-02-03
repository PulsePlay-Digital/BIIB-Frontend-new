import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MouComponent } from './mou.component';

describe('MouComponent', () => {
  let component: MouComponent;
  let fixture: ComponentFixture<MouComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MouComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
