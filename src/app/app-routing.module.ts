import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {TripEntryComponent} from './trip-entry/trip-entry.component'
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'tripentry', component: TripEntryComponent},
  {path:'home', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
