import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartOrderComponent } from './start-order.component';

describe('StartOrderComponent', () => {
  let component: StartOrderComponent;
  let fixture: ComponentFixture<StartOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartOrderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StartOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
