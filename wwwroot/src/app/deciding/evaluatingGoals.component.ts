import { Component, OnInit, Input  } from '@angular/core';
import { Router } from '@angular/router';

import { IGoal } from '../shared/interfaces';
import { GoalApiService } from '../core/services/goal.service';
import { DecidingService } from './shared/deciding.service';

@Component({
    templateUrl: 'evaluatingGoals.component.html'
})
export class EvaluatingGoalsComponent implements OnInit {
    goals: IGoal[] = [];
    existingGoals: IGoal[] = [];
    confirmed = false;
    @Input() message: string = 'Message: Hello Goals!';

    constructor(private _goalApi: GoalApiService,
        private _decidingService: DecidingService,
        private router: Router
    ) {}

    ngOnInit() {
        this._goalApi.getNewGoals().subscribe(g => this.goals = g);
        this._goalApi.getGoals().subscribe(g => this.existingGoals = g);
        this._decidingService.updateGoals(this.goals);
    }

    setGoals() {
        this._decidingService.updateGoals(this.goals);
    }

    confirm() {
        this.confirmed = true;
        this.message = 'Goals Created';
        this._decidingService.updateMessage(this.message);
        this.router.navigate(['./deciding', 'considering-options']);
    }

    autoFill() {
        this.goals = this.existingGoals;
    }
}
