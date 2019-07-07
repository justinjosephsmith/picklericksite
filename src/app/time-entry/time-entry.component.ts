import { Component, OnInit, Injectable } from '@angular/core';
import {NgbTimeStruct, NgbTimeAdapter} from '@ng-bootstrap/ng-bootstrap';

// convert time using a number (setTime and getTime)
@Injectable()
export class NgbTimeDateAdapter extends NgbTimeAdapter<Number> {

  fromModel(value: number): NgbTimeStruct {
    if (!value) {
      return null;
    }
    var time = new Date();
    time.setTime(value);

    console.log("in from model");
    return {
      hour: time.getHours(),
      minute: time.getMinutes(),
      second: time.getSeconds()
    };
  }

  toModel(time: NgbTimeStruct): number {
    if (!time) {
      return null;
    }
    console.log("in to model");
    var timedate = new Date();
    timedate.setHours(time.hour);
    timedate.setMinutes(time.minute);
    timedate.setSeconds(time.second);
    
    return timedate.getTime();
  }
}

@Component({
  selector: 'app-time-entry',
  templateUrl: './time-entry.component.html',
  styleUrls: ['./time-entry.component.css'],
  providers: [{provide: NgbTimeAdapter, useClass: NgbTimeDateAdapter}]
})
export class TimeEntryComponent implements OnInit {

  time: number;

  constructor() { }

  ngOnInit() {
    this.time = new Date().getTime();
  }

}
