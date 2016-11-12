import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';

import { IOption, IGoal, IDecision } from '../../shared/interfaces';

@Injectable()
export class DecidingService {
    // Observable sources
    private goalSource = new Subject<IGoal[]>();
    private optionSource = new Subject<IOption[]>();
    private decisionSource = new Subject<IDecision>();

    // Observable streams
    goals$ = this.goalSource.asObservable();
    options$ = this.optionSource.asObservable();

    // Service Commands
    updateGoals(goals: IGoal[]) {
        this.goalSource.next(goals);
    }
    updateOptions(options: IOption[]) {
        this.optionSource.next(options);
    }
}
