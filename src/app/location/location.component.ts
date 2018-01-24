import {Component, Input, OnInit} from '@angular/core';
import { Location } from "../models";

@Component({
  selector: 'location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

  @Input() location: Location;

  constructor() { }

    ngOnInit() {

    }

}
