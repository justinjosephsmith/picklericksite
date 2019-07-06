import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatFormField } from "@angular/material";

@Component({
  selector: 'app-trip-entry',
  templateUrl: './trip-entry.component.html',
  styleUrls: ['./trip-entry.component.css']
})
export class TripEntryComponent implements OnInit {

  entryDate = new FormControl('');

  constructor() { }

  ngOnInit() {
    this.entryDate.setValue(new Date().toDateString());
  }

  resetEntryDate() {
    this.entryDate.setValue(new Date().toDateString());
  }

}
