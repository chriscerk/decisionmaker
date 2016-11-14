import { Component, OnInit, Input, OnDestroy  } from '@angular/core';
import { Subscription }   from 'rxjs/Subscription';
import { Router } from '@angular/router';

import { IGoal, IDecision, Decision } from '../shared/interfaces';
import { GoalApiService } from '../core/services/goal.service';
import { DecisionApiService } from '../core/services/decision.service';
import { DecidingService } from './shared/deciding.service'

@Component({
    templateUrl: 'evaluatingGoals.component.html'
})
export class EvaluatingGoalsComponent implements OnInit, OnDestroy {
    @Input() decision: IDecision;
    goals: IGoal[] = [];
    existingGoals: IGoal[] = [];
    messageSub: Subscription;
    decisionSub: Subscription;
    confirmed = false;
    @Input() message: string = "Message: Hello Goals!";

    constructor(private _goalApi: GoalApiService,
        private _decidingService: DecidingService,
        private _decisionApi: DecisionApiService,
        private router: Router
    ) {}

    ngOnInit() {
        this.messageSub = this._decidingService.message$.subscribe(
            m => {
                this.message = m;
            });

        this.decisionSub = this._decidingService.decision$.subscribe(
            d => {
                this.decision = d;
            });

        this._goalApi.getNewGoals().subscribe(g => this.goals = g);
        this._goalApi.getGoals().subscribe(g => this.existingGoals = g);
    }

    setGoals() {
        this._decidingService.updateDecision(this.decision);
    }

    confirm() {
        this.confirmed = true;
        this.message = "Goals Created";
        this._decidingService.updateMessage(this.message);
        this.router.navigate(['./deciding', 'considering-options']);
    }

    autoFill() {
        this.goals = this.existingGoals;
    }

    ngOnDestroy() {
        // prevent memory leak when component destroyed
        this.messageSub.unsubscribe();
        this.decisionSub.unsubscribe();
    }
}
