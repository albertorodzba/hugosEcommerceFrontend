import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempContactUsFormComponent } from './temp-contact-us-form.component';

describe('TempContactUsFormComponent', () => {
  let component: TempContactUsFormComponent;
  let fixture: ComponentFixture<TempContactUsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TempContactUsFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TempContactUsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
