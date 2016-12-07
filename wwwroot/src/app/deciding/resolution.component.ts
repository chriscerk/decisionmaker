import { Component, OnInit } from '@angular/core';
import { IDecision } from '../shared/interfaces';
import { DecisionApiService } from '../core/services/decision.service';
import { DecidingService } from './shared/deciding.service';

@Component({
    templateUrl: 'resolution.component.html'
})
export class ResolutionComponent implements OnInit {
    decision: IDecision;
    resultsCalculated: boolean;

    constructor(private _decisionApi: DecisionApiService, private _decidingService: DecidingService) { }

    ngOnInit() {
        this.decision = this._decidingService.finalDecision;
        this.decision.results = this.calculateResults();
        this.resultsCalculated = true;
    }

    calculateResults() {
        let best = -1;
        let bestIndex = 0;

        for (let i = 0; i < this.decision.options.length; i++) {
            let optionSize = this.decision.options[i].metGoals.length;
            let goalsMet = 0;

            for (let j = 0; j < optionSize; j++) {
                if (this.decision.options[i].metGoals[j]) {
                    goalsMet++;
                }
            }
            if (goalsMet !== 0 && goalsMet > best) {
                best = goalsMet;
                bestIndex = i;
            }
        }
        if (best > -1) {
            return this.decision.options[bestIndex].name + ' is the wise choice.';
        } else {
            return 'None of the options are a good decision.';
        }
    }
}
