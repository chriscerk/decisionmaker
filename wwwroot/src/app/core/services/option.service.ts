import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { IOption } from '../../shared/interfaces.ts';
import 'rxjs/Rx';

@Injectable()
export class OptionApiService {

    option: IOption;

    constructor(private _http: Http) { }

    getOptions() {
        // return an observable
        return this._http.get('/api/option')
            .map((response) => {
                return <IOption[]>response.json();
            });
    }
}
