import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloatingInfoButton } from './floating-info-button';

describe('FloatingInfoButton', () => {
  let component: FloatingInfoButton;
  let fixture: ComponentFixture<FloatingInfoButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FloatingInfoButton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FloatingInfoButton);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
