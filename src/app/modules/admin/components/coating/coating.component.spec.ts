import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoatingComponent } from './coating.component';

describe('CoatingComponent', () => {
  let component: CoatingComponent;
  let fixture: ComponentFixture<CoatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoatingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
