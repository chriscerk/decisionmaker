import { Component, OnInit } from '@angular/core';
import { IOption } from '../shared/interfaces';
import { OptionService } from '../core/services/option.service';

@Component({
    templateUrl: 'consideringOptions.component.html'
})
export class ConsideringOptionsComponent implements OnInit {
    options: IOption[] = [];

    constructor(private _optionService: OptionService) { }

    ngOnInit() {
        this._optionService.getOptions().subscribe(o => this.options = o);
    }
}
