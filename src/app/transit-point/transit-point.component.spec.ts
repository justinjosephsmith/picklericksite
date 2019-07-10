import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransitPointComponent } from './transit-point.component';

describe('TransitPointComponent', () => {
  let component: TransitPointComponent;
  let fixture: ComponentFixture<TransitPointComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransitPointComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransitPointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
