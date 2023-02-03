import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyBiibComponent } from './why-biib.component';

describe('WhyBiibComponent', () => {
  let component: WhyBiibComponent;
  let fixture: ComponentFixture<WhyBiibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhyBiibComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhyBiibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
