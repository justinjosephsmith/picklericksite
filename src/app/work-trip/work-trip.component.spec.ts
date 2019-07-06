import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkTripComponent } from './work-trip.component';

describe('WorkTripComponent', () => {
  let component: WorkTripComponent;
  let fixture: ComponentFixture<WorkTripComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkTripComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkTripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
