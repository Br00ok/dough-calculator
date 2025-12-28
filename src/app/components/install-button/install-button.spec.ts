import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstallButton } from './install-button';

describe('InstallButton', () => {
  let component: InstallButton;
  let fixture: ComponentFixture<InstallButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstallButton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstallButton);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
