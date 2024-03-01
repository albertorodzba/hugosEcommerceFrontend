import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempQuotesFormComponent } from './temp-quotes-form.component';

describe('TempQuotesFormComponent', () => {
  let component: TempQuotesFormComponent;
  let fixture: ComponentFixture<TempQuotesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TempQuotesFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TempQuotesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
