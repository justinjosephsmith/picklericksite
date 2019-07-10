import { Component, OnInit } from '@angular/core';
import { TransitPoint } from '../transit-point';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-transit-point',
  templateUrl: './transit-point.component.html',
  styleUrls: ['./transit-point.component.css']
})
export class TransitPointComponent implements OnInit {

  transitModel = new TransitPoint(
    new Date(),
    "ATL"
  );

  date: FormControl;
  time: FormControl;

  constructor() { }

  ngOnInit() {
    this.date = new FormControl(this.transitModel.date);
    this.time = new FormControl(this.transitModel.date);
  }

}
