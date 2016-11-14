import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { IGoal } from '../../shared/interfaces';
import 'rxjs/Rx';

@Injectable()
export class GoalApiService {

    constructor(private _http: Http) { }

    getNewGoals() {
        // return an observable
        return this._http.get('/api/goal/new')
            .map((response) => {
                return <IGoal[]>response.json();
            });
    }

    getGoals() {
        // return an observable
        return this._http.get('/api/goal')
            .map((response) => {
                return <IGoal[]>response.json();
            });
    }

}
