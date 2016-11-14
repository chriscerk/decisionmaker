import { Component, OnInit } from '@angular/core';

import { DecisionApiService } from '../core/services/decision.service';
import { DecidingService } from './shared/deciding.service';
import { IDecision, IGoal, IOption } from '../shared/interfaces';

@Component({
    templateUrl: 'deciding.component.html',
    providers: [DecidingService]
})

export class DecidingComponent {
    decision: IDecision;
    message: string;
    history: string[] = [];

    constructor(private _decidingService: DecidingService, private _decisionApiService: DecisionApiService)
    {
        this._decisionApiService.getNewDecision().subscribe(d => this.decision = d);
        console.log("Constructed");
        console.log(this.decision);
    }

    ngOnInit() {
        this._decidingService.message$.subscribe(
            m => {
                this.message = m;
                this.history.push(this.message);
            });

        this._decidingService.decision$.subscribe(
            d => {
                this.decision = d;
            });
    }
}
