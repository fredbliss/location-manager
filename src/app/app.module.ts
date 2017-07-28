import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';
import { AppComponent } from './app.component';

import { AgmCoreModule } from '@agm/core';
import { MainComponent } from './main/main.component';
import routes from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes, { useHash: true }),
    AgmCoreModule.forRoot({
        apiKey: 'AIzaSyBjno8dTZAZbn7G29-1ls3XLhTANzh1fu4'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
