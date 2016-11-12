import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { IGoal } from '../../shared/interfaces';
import 'rxjs/Rx';

@Injectable()
export class GoalService {

    constructor(private _http: Http) { }

    getGoals() {
        // return an observable
        return this._http.get('/api/goal')
            .map((response) => {
                return <IGoal[]>response.json();
            });
    }

}
