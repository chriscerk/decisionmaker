import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { IDecision } from '../../shared/interfaces.ts';
import 'rxjs/Rx';

@Injectable()
export class DecisionApiService {

    decision: IDecision;

    constructor(private _http: Http) { }

    getDecision() {
        return this._http.get('/api/decision')
            .map((response) => {
                return <IDecision>response.json();
            });
    }

    getNewDecision() {
        return this._http.get('/api/decision/new')
            .map((response) => {
                return <IDecision>response.json();
            });
    }

    getDecisionById(id: string) {
        return this._http.get('/api/decision/'+ id)
            .map((response) => {
                return <IDecision>response.json();
            });
    }
}
