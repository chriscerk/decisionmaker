import { Component, OnInit, Input, OnDestroy  } from '@angular/core';
import { Subscription }   from 'rxjs/Subscription';

import { IGoal, IDecision } from '../shared/interfaces';
import { GoalApiService } from '../core/services/goal.service';
import { DecidingService } from './shared/deciding.service'

@Component({
    templateUrl: 'evaluatingGoals.component.html'
})
export class EvaluatingGoalsComponent implements OnInit {
    goals: IGoal[] = new Array(3);
    existingGoals: IGoal[] = [];
    @Input() decision: IDecision;
    subscription: Subscription;
    confirmed = false;

    constructor(private _goalApi: GoalApiService, private _decidingService: DecidingService) {
        this.subscription = _decidingService.goals$.subscribe(
            g => {
                this.goals = g;
            });
    }

    ngOnInit() {
        this._goalApi.getGoals().subscribe(g => this.existingGoals = g);
    }

    confirm() {
        this.confirmed = true;
        this._decidingService.updateGoals(this.goals);
    }
    ngOnDestroy() {
        // prevent memory leak when component destroyed
        this.subscription.unsubscribe();
    }
}
