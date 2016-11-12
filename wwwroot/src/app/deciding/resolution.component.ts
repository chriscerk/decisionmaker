import { Component, OnInit } from '@angular/core';
import { IDecision } from '../shared/interfaces';
import { DecisionService } from '../core/services/decision.service';

@Component({
    templateUrl: 'resolution.component.html'
})
export class ResolutionComponent implements OnInit {
    decision: IDecision;

    constructor(private _decisionService: DecisionService) { }

    ngOnInit() {
        this._decisionService.getDecision().subscribe(d => this.decision = d);
    }
}
