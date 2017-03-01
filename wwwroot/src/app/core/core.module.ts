﻿import { NgModule, Optional, SkipSelf, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DecisionApiService } from './services/decision.service';
import { GoalApiService } from './services/goal.service';
import { OptionApiService } from './services/option.service';
import { DecidingService } from '../deciding/shared/deciding.service';

import { EnsureModuleLoadedOnceGuard } from '../shared/ensureModuleLoadedOnceGuard';

@NgModule({
    imports: [CommonModule],
    declarations: [],
    exports: [CommonModule],
    providers: [DecisionApiService, GoalApiService, OptionApiService, DecidingService] // these should be singleton
})
export class CoreModule extends EnsureModuleLoadedOnceGuard {

    // Looks for the module in the parent injector to see if it's already been loaded (only want it loaded once)
    constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
        super(parentModule);
    }

}


