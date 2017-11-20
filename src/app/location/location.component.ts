import {Component, Input, OnInit} from '@angular/core';
import { LocationService } from "../shared/services/location.service";

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css'],
    providers: [ LocationService ]
})
export class LocationComponent implements OnInit {

  @Input() id: number;

  location = {};

  constructor(private _locationService: LocationService) { }

    ngOnInit() {
        this._locationService.getLocation(this.id).subscribe(
            data => {
                this.location = data;
            }
        );
    }

}
