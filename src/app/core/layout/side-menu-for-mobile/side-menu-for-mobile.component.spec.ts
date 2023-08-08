import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideMenuForMobileComponent } from './side-menu-for-mobile.component';

describe('SideMenuForMobileComponent', () => {
  let component: SideMenuForMobileComponent;
  let fixture: ComponentFixture<SideMenuForMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideMenuForMobileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SideMenuForMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
