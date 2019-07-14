import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-create-trip',
  templateUrl: './create-trip.component.html',
  styleUrls: ['./create-trip.component.css']
})
export class CreateTripComponent implements OnInit {

  date: FormControl

  constructor() { }

  ngOnInit() {
    this.date = new FormControl(new Date());
  }

  dateChanged(){

  }

}
