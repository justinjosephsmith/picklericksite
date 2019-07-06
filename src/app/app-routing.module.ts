import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WorkTripComponent } from './work-trip/work-trip.component';
import {TripEntryComponent} from './trip-entry/trip-entry.component'

const routes: Routes = [
  {path:'trip', component: WorkTripComponent},
  {path:'tripentry', component: TripEntryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
