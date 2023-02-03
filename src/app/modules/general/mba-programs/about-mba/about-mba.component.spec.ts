import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutMbaComponent } from './about-mba.component';

describe('AboutMbaComponent', () => {
  let component: AboutMbaComponent;
  let fixture: ComponentFixture<AboutMbaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutMbaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutMbaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
