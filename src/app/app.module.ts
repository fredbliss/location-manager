import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    AgmCoreModule.forRoot({
        apiKey: 'AIzaSyBjno8dTZAZbn7G29-1ls3XLhTANzh1fu4'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
