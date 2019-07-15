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

import { OktaAuthModule, OktaCallbackComponent } from '@okta/okta-angular';

// add components for app
import { LayoutModule } from '@angular/cdk/layout';
import { HomeComponent } from './home/home.component';
import { TransitPointComponent } from './transit-point/transit-point.component';
import { CreateTripComponent } from './create-trip/create-trip.component';

// const config = {
//   issuer: 'https://dev-935725.okta.com/oauth2/default',
//   redirectUri: 'http://localhost:4200/implicit/callback',
//   clientId: '0oawnjmpmSIKQwKEa356'
// }

const config = {
  issuer: 'https://dev-935725.okta.com/oauth2/default',
  redirectUri: 'https://affectionate-rosalind-4fce75.netlify.com/implicit/callback',
  clientId: '0oawnjmpmSIKQwKEa356'
}


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
    LayoutModule,
    OktaAuthModule.initAuth(config)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
