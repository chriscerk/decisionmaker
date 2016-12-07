import { Component, OnInit } from '@angular/core';

import { DecisionApiService } from '../core/services/decision.service';
import { DecidingService } from './shared/deciding.service';
import { IDecision } from '../shared/interfaces';

@Component({
    templateUrl: 'deciding.component.html',
    providers: [DecidingService]
})

export class DecidingComponent implements OnInit {
    decision: IDecision;
    message: string;
    history: string[] = [];
    isDevView: boolean;
    userState: string = 'creating';

    constructor(private _decidingService: DecidingService,
        private _decisionApiService: DecisionApiService) {
        this.isDevView = false;
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
        this._decidingService.goals$.subscribe(
            g => {
                this.decision.goals = g;
            });
        this._decidingService.options$.subscribe(
            o => {
                this.decision.options = o;
            });
    }

    devViewSwitch() {
        this.isDevView = !this.isDevView;
        if (this.userState === 'creating') {
            this.userState = 'editing';
        } else {
            this.userState = 'creating';
        }
    }
}
