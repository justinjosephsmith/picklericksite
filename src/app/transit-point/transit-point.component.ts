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
  time = moment().format("HH:mm");

  ngOnInit() {
    this.date = new FormControl(new Date());
    console.log(this.date.value);
  }

  dateChanged(type: string, event: MatDatepickerInputEvent<Date>) {
    console.log(`${type}: ${event.value}`);
  }

}
