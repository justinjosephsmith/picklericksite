import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms'

@Component({
  selector: 'app-work-trip',
  templateUrl: './work-trip.component.html',
  styleUrls: ['./work-trip.component.css']
})
export class WorkTripComponent implements OnInit {

  departDate = new FormControl('');

  constructor() { }

  ngOnInit() {
    this.departDate.setValue(new Date().toDateString());
  }

  resetDepartDate() {
    this.departDate.setValue(new Date().toDateString());
  }

}
