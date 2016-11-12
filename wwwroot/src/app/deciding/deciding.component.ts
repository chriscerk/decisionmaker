import { Component, OnInit } from '@angular/core';

import { DecidingService } from './shared/deciding.service';
import { IDecision, IGoal, IOption } from '../shared/interfaces';

@Component({
    templateUrl: 'deciding.component.html',
    providers: [DecidingService]
})

export class DecidingComponent {
    decision: IDecision;
    history: string[] = [];

    constructor(private decidingService: DecidingService) {
        decidingService.goals$.subscribe(
            g => {
                this.decision.goals = g;
                this.history.push('Goals Updated');
            });

        decidingService.options$.subscribe(
            o => {
                this.decision.options = o;
                this.history.push('Options Updated');
            });
    }
}
