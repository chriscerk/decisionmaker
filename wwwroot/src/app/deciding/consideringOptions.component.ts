import { Component, OnInit } from '@angular/core';
import { IOption } from '../shared/interfaces';
import { OptionApiService } from '../core/services/option.service';

@Component({
    templateUrl: 'consideringOptions.component.html'
})
export class ConsideringOptionsComponent implements OnInit {
    options: IOption[] = [];

    constructor(private _optionApi: OptionApiService) { }

    ngOnInit() {
        this._optionApi.getOptions().subscribe(o => this.options = o);
    }
}
