import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { TimeDateAdapter } from './time-date-adapter';
import { TripEntry } from './trip-entry';

@Component({
  selector: 'app-trip-entry',
  templateUrl: './trip-entry.component.html',
  styleUrls: ['./trip-entry.component.css'],
  providers: [TimeDateAdapter]
})
export class TripEntryComponent implements OnInit, OnChanges {
  
  entry: TripEntry;
  adapter: TimeDateAdapter;

  constructor(adapter: TimeDateAdapter){
    console.log("in component ctor");
    this.adapter = adapter;
  }

  ngOnInit() {
    console.log("in component ngOnInit");
    this.entry = new TripEntry();
    this.entry.EntryDateTime = new Date();
    this.adapter.setDate(this.entry.EntryDateTime);
    this.entry.Place = "ATL";
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("in ngOnChanges");
  }

}
