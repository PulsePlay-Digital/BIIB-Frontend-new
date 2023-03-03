import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutBiibComponent } from './about-biib.component';

describe('AboutBiibComponent', () => {
  let component: AboutBiibComponent;
  let fixture: ComponentFixture<AboutBiibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutBiibComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutBiibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
