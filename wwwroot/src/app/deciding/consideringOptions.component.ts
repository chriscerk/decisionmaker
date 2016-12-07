import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { IOption, IGoal } from '../shared/interfaces';
import { OptionApiService } from '../core/services/option.service';
import { DecidingService } from './shared/deciding.service';

@Component({
    templateUrl: 'consideringOptions.component.html'
})
export class ConsideringOptionsComponent implements OnInit {
    options: IOption[] = [];
    chosenGoals: IGoal[] = [];
    existingOptions: IOption[] = [];
    confirmed = false;
    @Input() message: string = 'Message: Hello Options!';

    constructor(private _optionApi: OptionApiService,
        private _decidingService: DecidingService,
        private router: Router
    ) { }

    ngOnInit() {
        this._optionApi.getNewOptions().subscribe(g => this.options = g);
        this._optionApi.getOptions().subscribe(g => this.existingOptions = g);
        this.chosenGoals = this._decidingService.setGoals;
        this._decidingService.updateOptions(this.options);
    }

    setOptions() {
        this._decidingService.updateOptions(this.options);
    }

    confirm() {
        this.confirmed = true;
        this.message = 'Options Created';
        this._decidingService.updateMessage(this.message);
        this.router.navigate(['./deciding', 'resolution']);
    }

    autoFill() {
        this.options = this.existingOptions;
    }
}
