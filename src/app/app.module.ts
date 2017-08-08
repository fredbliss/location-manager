import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

import { AgmCoreModule } from '@agm/core';
import { MainComponent } from './main/main.component';
import { googleMapsConfig } from '../../src/environments/environment';
import { LocationsService } from './shared/services/locations.service';
import { ZoneObservableService } from './shared/services/zone-observable.service';

import routes from './app.routes';
import { LocationComponent } from './location/location.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LocationComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes, { useHash: true }),
    AgmCoreModule.forRoot({
        apiKey: googleMapsConfig.apiKey
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
