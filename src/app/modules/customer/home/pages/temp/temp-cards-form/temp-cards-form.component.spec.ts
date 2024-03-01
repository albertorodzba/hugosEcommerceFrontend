import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempCardsFormComponent } from './temp-cards-form.component';

describe('TempCardsFormComponent', () => {
  let component: TempCardsFormComponent;
  let fixture: ComponentFixture<TempCardsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TempCardsFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TempCardsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
