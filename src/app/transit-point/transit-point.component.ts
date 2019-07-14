import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material';
import * as moment from 'moment';

@Component({
  selector: 'app-transit-point',
  templateUrl: './transit-point.component.html',
  styleUrls: ['./transit-point.component.css']
})
export class TransitPointComponent implements OnInit {
  
  date: FormControl;
  time: string;
  waypoint: string;
  
  ngOnInit() {
    this.date = new FormControl(new Date());
    this.time = moment().format("HH:mm");
    this.waypoint = "Leave Home";
  }

  dateChanged(type: string, event: MatDatepickerInputEvent<Date>) {
    console.log("Date Changed: " + `${type}: ${event.value}`);
    let newDate = this.mergeTimeWithDate(this.date.value, this.time)
    this.date.setValue(newDate);  
  }

  timeChanged() {
    let newDate = this.mergeTimeWithDate(this.date.value, this.time)
    this.date.setValue(newDate);  
  }

  waypointChanged() {
    console.log("waypoint changed");
  }

  mergeTimeWithDate(date: Date, time: string): Date {
    let mom = moment(time, "HH:mm");
    date.setHours(mom.hours(), mom.minutes());
    return date;
  }

  // TODO - submit date/time/waypoint to http service
  onSubmit() {
    console.log("Submit clicked: " + this.date.value + ` ${this.waypoint}`);
  }

}
