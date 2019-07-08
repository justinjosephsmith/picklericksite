import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {TripEntryComponent} from './trip-entry/trip-entry.component'

const routes: Routes = [
  {path:'tripentry', component: TripEntryComponent},
  {path:'', redirectTo: '/#', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
