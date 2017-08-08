import { Injectable, NgZone } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ZoneObservableService {
    constructor(
        private _zone: NgZone
    ) {}

    observe(observable: Observable<any>) {
        return Observable.create(observer => {
            const onNext = (value) => this._zone.run(() => observer.next(value));
            const onError = (e) => this._zone.run(() => observer.error(e));
            const onComplete = () => this._zone.run(() => observer.complete());
            return observable.subscribe(onNext, onError, onComplete);
        });
    }
}
