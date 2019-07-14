import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { TransitPointComponent } from './transit-point/transit-point.component';

const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'transitpoint', component: TransitPointComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
