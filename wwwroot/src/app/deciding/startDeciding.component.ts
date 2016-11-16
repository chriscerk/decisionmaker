﻿import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
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

    constructor(private _decidingService: DecidingService,
        private _decisionApi: DecisionApiService,
        private router: Router) { }

    ngOnInit() {
        //TODO: Add logic for editing by decision.id
            this.decision = new Decision();
            this._decisionApi.getNewDecision().subscribe(d => this.decision = d);

        this._decidingService.updateDecision(this.decision);
    }

    setName() {
        this._decidingService.updateDecision(this.decision);
    }

    confirm() {
        this.confirmed = true;
        this.message = "Decision " + this.decision.name + " Created";
        this._decidingService.updateMessage(this.message);
        this.router.navigate(['./deciding', 'evaluating-goals']);
    }
}

