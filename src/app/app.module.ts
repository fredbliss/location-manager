import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { googleMapsConfig } from '../../src/environments/environment';
import { AgmCoreModule } from "@agm/core";
import { AgmSnazzyInfoWindowModule } from '@agm/snazzy-info-window';
import { HttpClientModule } from "@angular/common/http";

import { LocationComponent } from './location/location.component';
import { PdfComponent } from './pdf/pdf.component';
import { LocationListingComponent } from './location-listing/location-listing.component';
import { LocationDetailComponent } from './location-detail/location-detail.component';

export const ROUTES: Routes = [
    {path: '', redirectTo: 'locations', pathMatch: 'full'},
    {path: 'locations', component: MainComponent},
    {path: 'locations/:id', component: LocationComponent},
    {path: '**', component: MainComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LocationComponent,
    PdfComponent,
    LocationListingComponent,
    LocationDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES, { enableTracing: true}),
    AgmCoreModule.forRoot({
        apiKey: googleMapsConfig.apiKey
    }),
    AgmSnazzyInfoWindowModule
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
