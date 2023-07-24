import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BronchureComponent } from './bronchure.component';

describe('BronchureComponent', () => {
  let component: BronchureComponent;
  let fixture: ComponentFixture<BronchureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BronchureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BronchureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
