import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatFormField} from "@angular/material";

import { TripEntryComponent } from './trip-entry.component';

describe('TripEntryComponent', () => {
  let component: TripEntryComponent;
  let fixture: ComponentFixture<TripEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TripEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TripEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
