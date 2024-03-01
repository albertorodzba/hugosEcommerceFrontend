import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempShirtsFormComponent } from './temp-shirts-form.component';

describe('TempShirtsFormComponent', () => {
  let component: TempShirtsFormComponent;
  let fixture: ComponentFixture<TempShirtsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TempShirtsFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TempShirtsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
