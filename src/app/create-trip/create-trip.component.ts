import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as moment from 'moment';

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

  dateChanged(){

  }

}
