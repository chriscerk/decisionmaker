﻿import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';

import { DecisionApiService } from '../../core/services/decision.service';
import { IOption, IGoal, IDecision } from '../../shared/interfaces';

@Injectable()
export class DecidingService {

    // Observable sources
    private messageSource = new Subject<string>();
    private decisionSource = new Subject<IDecision>();
    private goalSource = new Subject<IGoal[]>();
    private optionSource = new Subject<IOption[]>();

    // Observable streams
    message$ = this.messageSource.asObservable();
    decision$ = this.decisionSource.asObservable();
    goals$ = this.goalSource.asObservable();
    options$ = this.optionSource.asObservable();

    // Service Commands
    updateMessage(m:string) {
        this.messageSource.next(m);
    }
    updateDecision(d: IDecision) {
        this.decisionSource.next(d);
    }
    updateGoals(goals: IGoal[]) {
        this.goalSource.next(goals);
    }
    updateOptions(options: IOption[]) {
        this.optionSource.next(options);
    }
}
