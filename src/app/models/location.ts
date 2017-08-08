import { Model } from './model';
import { environment } from '../../../src/environments/environment';
import { settings } from '../../../src/environments/environment';

export class Location extends Model {

    static readonly DEFAULT_IMAGE: string = `${environment.baseUrl}/${settings.placeholderImage}`;

    id: string;
    billboard_id: number;
    city: string;
    state: string;
    county: string;
    location: string;
    highway: string;
    size: string;
    faces: number;
    orientation: string;
    illumination: boolean;
    structure_type: string;
    traffic_counts: number;
    images: string[];
    latitude: number;
    longitude: number;
    published: boolean;

    static newLocation(params) {
        return new Location(Object.assign({}, params, {
            version: 1
        }));
    }

    constructor(params) {
        super();
        if (params) {
            this.id = params.id;
            this.billboard_id = params.billboard_id;
            this.city = params.city;
            this.state = params.state;
            this.county = params.county;
            this.location = params.location;
            this.highway = params.highway;
            this.size = params.size;
            this.faces = params.faces;
            this.orientation = params.orientation;
            this.illumination = params.illumination;
            this.structure_type = params.structure_type;
            this.traffic_counts = params.traffic_counts;
            this.latitude = params.latitude;
            this.longitude = params.longitude;
            this.images = this.setImages(params.images);
            this.published = params.published;
        }
    }

    private setImages(images: string): string[] {
        if (images) {
            return images
                .split(',')
                .map(image => window['encodeURI'](image));
        } else {
            return [];
        }
    }

}
