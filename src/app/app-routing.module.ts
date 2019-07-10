import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TripEntryComponent } from './trip-entry/trip-entry.component'
import { HomeComponent } from './home/home.component';
import { TransitPointComponent } from './transit-point/transit-point.component';

const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'transitpoint', component: TransitPointComponent},
  {path:'tripentry', component: TripEntryComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
