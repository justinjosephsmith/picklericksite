import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as moment from 'moment';
import { MatDatepickerInputEvent } from '@angular/material';

@Component({
  selector: 'app-create-trip',
  templateUrl: './create-trip.component.html',
  styleUrls: ['./create-trip.component.css']
})
export class CreateTripComponent implements OnInit {

  startDate: FormControl;
  endDate: FormControl;

  constructor() { }

  ngOnInit() {
    this.startDate = new FormControl(new Date());
    let tomorrow = moment(new Date()).add(1, 'd').toDate();
    this.endDate = new FormControl(tomorrow);
  }

  dateChanged(control: string, event: MatDatepickerInputEvent<Date>){

  }

    // TODO - submit trip to http service
    onSubmit() {
      console.log("Submit clicked:");
    }

}
