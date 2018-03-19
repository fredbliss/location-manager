import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { googleMapsConfig } from '../../src/environments/environment';
import { AgmCoreModule } from "@agm/core";
import { AgmSnazzyInfoWindowModule } from '@agm/snazzy-info-window';
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ImgFallbackModule } from 'ngx-img-fallback';
import { LocationComponent } from './location/location.component';
import { PdfComponent } from './pdf/pdf.component';
import { LocationListingComponent } from './location-listing/location-listing.component';
import { LocationDetailComponent } from './location-detail/location-detail.component';
import { CapitalizePipe } from './shared/pipes/capitalize.pipe';

export const ROUTES: Routes = [
    {path: '', redirectTo: 'locations', pathMatch: 'full'},
    {path: 'locations', component: LocationListingComponent},
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
    LocationDetailComponent,
    CapitalizePipe
  ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  imports: [
    BrowserModule,
    HttpClientModule,
	ImgFallbackModule,
    RouterModule.forRoot(ROUTES, { enableTracing: true}),
    AgmCoreModule.forRoot({
        apiKey: googleMapsConfig.apiKey
    }),
    AgmSnazzyInfoWindowModule,
	BrowserAnimationsModule
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
