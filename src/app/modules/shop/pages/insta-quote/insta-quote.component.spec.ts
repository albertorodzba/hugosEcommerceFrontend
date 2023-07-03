import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstaQuoteComponent } from './insta-quote.component';

describe('InstaQuoteComponent', () => {
  let component: InstaQuoteComponent;
  let fixture: ComponentFixture<InstaQuoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstaQuoteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstaQuoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
