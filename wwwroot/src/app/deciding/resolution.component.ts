import { Component, OnInit } from '@angular/core';
import { IDecision } from '../shared/interfaces';
import { DecisionApiService } from '../core/services/decision.service';
import { DecidingService } from './shared/deciding.service';

@Component({
    templateUrl: 'resolution.component.html'
})
export class ResolutionComponent implements OnInit {
    decision: IDecision;

    constructor(private _decisionApi: DecisionApiService, private _DecidingService: DecidingService) { }

    ngOnInit() {
        this._decisionApi.getDecision().subscribe(d => this.decision = d);
    }
}
