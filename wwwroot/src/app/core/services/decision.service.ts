import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { IDecision } from '../../shared/interfaces.ts';
import 'rxjs/Rx';

@Injectable()
export class DecisionApiService {

    decision: IDecision;

    constructor(private _http: Http) { }

    getDecision() {
        // return an observable
        return this._http.get('/api/decision')
            .map((response) => {
                return <IDecision>response.json();
            });
    }
}
