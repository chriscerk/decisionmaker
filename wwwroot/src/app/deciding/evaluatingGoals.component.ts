import { Component, OnInit } from '@angular/core';
import { IGoal } from '../shared/interfaces';
import { GoalService } from '../core/services/goal.service';

@Component({
    templateUrl: 'evaluatingGoals.component.html'
})
export class EvaluatingGoalsComponent implements OnInit {
    goals: IGoal[] = [];

    constructor(private _goalService: GoalService) { }

    ngOnInit() {
        this._goalService.getGoals().subscribe(g => this.goals = g);
    }
}
