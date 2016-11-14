import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { IOption, IDecision } from '../shared/interfaces';
import { OptionApiService } from '../core/services/option.service';
import { DecidingService } from './shared/deciding.service';

import { Subscription } from 'rxjs/Subscription';

@Component({
    templateUrl: 'consideringOptions.component.html'
})
export class ConsideringOptionsComponent implements OnInit, OnDestroy {
    @Input() decision: IDecision;
    options: IOption[] = [];
    existingOptions: IOption[] = [];
    subscription: Subscription;
    confirmed = false;
    @Input() message: string = "Message: Hello Options!";

    constructor(private _optionApi: OptionApiService, private _decidingService: DecidingService) { }

    ngOnInit() {
        this._optionApi.getOptions().subscribe(g => this.existingOptions = g);

        this.subscription = this._decidingService.message$.subscribe(
            m => {
                this.message = m;
            });

        this.options = this.decision.options;

        console.log("Child evaluatingGoals");
        console.log(this.message);
        console.log(this.decision);
        console.log(this.options);
    }

    confirm() {
        this.confirmed = true;
        this._decidingService.updateMessage(this.message);
    }
    ngOnDestroy() {
        // prevent memory leak when component destroyed
        this.subscription.unsubscribe();
    }
}
