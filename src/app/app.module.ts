import 'hammerjs';

import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllMaterialModule } from './material-module';

// add components for app
import { LayoutModule } from '@angular/cdk/layout';
import { HomeComponent } from './home/home.component';
import { TransitPointComponent } from './transit-point/transit-point.component';
import { CreateTripComponent } from './create-trip/create-trip.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TransitPointComponent,
    CreateTripComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    AllMaterialModule,
    ReactiveFormsModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
