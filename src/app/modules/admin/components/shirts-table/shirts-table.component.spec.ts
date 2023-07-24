import { ComponentFixture, TestBed } from '@angular/core/testing';

import { shirtsTableComponent } from './shirts-table.component';

describe('shirtsTableComponent', () => {
  let component: shirtsTableComponent;
  let fixture: ComponentFixture<shirtsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ shirtsTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(shirtsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
