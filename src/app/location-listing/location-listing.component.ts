import { Component, OnInit, Input } from '@angular/core';
import { LocationService } from "../shared/services/location.service";

@Component({
  selector: 'location-listing',
  templateUrl: './location-listing.component.html',
  styleUrls: ['./location-listing.component.css'],
  providers: [ LocationService ]
})
export class LocationListingComponent implements OnInit {

  @Input() locations: Location[];

  constructor(private _locationService: LocationService) {

  }

  ngOnInit() {

  }

}
