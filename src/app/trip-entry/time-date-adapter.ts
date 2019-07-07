import { Injectable } from '@angular/core';
import {NgbTimeStruct, NgbTimeAdapter} from '@ng-bootstrap/ng-bootstrap';

// convert time using a number (setTime and getTime)
@Injectable()
export class TimeDateAdapter extends NgbTimeAdapter<Date> {

  modelDate: Date;

  constructor(){
    console.log("in adapter constructor");
    super();
  }

  fromModel(value: Date): NgbTimeStruct {
    console.log("in fromModel of Adapter");
    if (!value) {
      return null;
    }
    this.modelDate = value;

    return {
      hour: this.modelDate.getHours(),
      minute: this.modelDate.getMinutes(),
      second: this.modelDate.getSeconds()
    };
  }

  toModel(time: NgbTimeStruct): Date {
    console.log("in toModel of Adapter");
    if (!time) {
      return null;
    }
    this.modelDate.setHours(time.hour)
    this.modelDate.setHours(time.hour);
    this.modelDate.setMinutes(time.minute);  

    console.log(this.modelDate.toString());

    return this.modelDate;
  }

  setDate(theDate: Date) {
      this.modelDate = theDate;
  }
}