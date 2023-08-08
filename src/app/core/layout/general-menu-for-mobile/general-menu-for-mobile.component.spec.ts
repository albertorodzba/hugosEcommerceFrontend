import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralMenuForMobileComponent } from './general-menu-for-mobile.component';

describe('GeneralMenuForMobileComponent', () => {
  let component: GeneralMenuForMobileComponent;
  let fixture: ComponentFixture<GeneralMenuForMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralMenuForMobileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeneralMenuForMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
