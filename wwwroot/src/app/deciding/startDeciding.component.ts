import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { IDecision, Decision } from '../shared/interfaces';
import { DecisionApiService } from '../core/services/decision.service';
import { DecidingService } from './shared/deciding.service';

@Component({
    templateUrl: 'startDeciding.component.html'
})
export class StartDecidingComponent implements OnInit {
    @Input() decision: IDecision;
    messageSub: Subscription;
    decisionSub: Subscription;
    confirmed = false;
    @Input() message: string = "Message: Hello World!";

    constructor(private _decidingService: DecidingService, private _decisionApi: DecisionApiService) {}

    ngOnInit() {
        this.decision = new Decision();
        this._decisionApi.getNewDecision().subscribe(d => this.decision = d);
        console.log(this.decision);
        this.messageSub = this._decidingService.message$.subscribe(
            m => {
                this.message = m;
            });

        this.decisionSub = this._decidingService.decision$.subscribe(
            d => {
                this.decision = d;
            });
        console.log(this.decision);
        this._decidingService.updateDecision(this.decision);
    }

    confirm() {
        this.confirmed = true;
        this.message = "Decision " + this.decision.name + " Created";
        this._decidingService.updateMessage(this.message);
        this._decidingService.updateDecision(this.decision);
    }
    ngOnDestroy() {
        // prevent memory leak when component destroyed
        this.messageSub.unsubscribe();
        this.decisionSub.unsubscribe();
    }
}

