import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  lat: number = 42.5820633;
  lng: number = -72.6240396;
  title: string = 'Locators.io Location Manager';

  constructor() { }

  ngOnInit() {
  }

}
