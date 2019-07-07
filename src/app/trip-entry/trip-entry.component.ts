import { Component, OnInit, OnChanges, SimpleChanges, Injectable } from '@angular/core';
import {NgbTimeStruct, NgbTimeAdapter} from '@ng-bootstrap/ng-bootstrap';
import * as moment from 'moment';

/**
 * Example of a String Time adapter
 */
@Injectable()
export class NgbTimeStringAdapter extends NgbTimeAdapter<string> {
  
  fromModel(value: string): NgbTimeStruct {
    if (!value) {
      return null;
    }
    const split = value.split(':');
    return {
      hour: parseInt(split[0], 10),
      minute: parseInt(split[1], 10),
      second: parseInt(split[2], 10)
    };
  }

  toModel(time: NgbTimeStruct): string {
    if (!time) {
      return null;
    }
    return `${this.pad(time.hour)}:${this.pad(time.minute)}:${this.pad(time.second)}`;
  }

  private pad(i: number): string {
    return i < 10 ? `0${i}` : `${i}`;
  }
}

@Component({
  selector: 'app-trip-entry',
  templateUrl: './trip-entry.component.html',
  styleUrls: ['./trip-entry.component.css'],
  providers: [{provide: NgbTimeAdapter, useClass: NgbTimeStringAdapter}]
})
export class TripEntryComponent implements OnInit, OnChanges {
  
  theDate: Date;
  theTime: string;

  ngOnInit() {
    console.log("in component ngOnInit");
    this.theDate = new Date();
    this.theTime = moment(this.theDate).format("HH:mm:ss");
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("in ngOnChanges");
  }

  // merge theTime with theDate
  onClick(event: Event) {
    //convert theTime to a moment & get the values
    let time = moment(this.theTime, "HH:mm:ss");
    let hours = time.hours();
    let mins = time.minutes();
    let secs = time.seconds();

    //create a new date object from the old one
    let newDateString = this.theDate.toDateString();
    let newDate = new Date(newDateString);
    newDate.setHours(hours, mins, secs);
    //set the new date object
    this.theDate = newDate;
  }
}
