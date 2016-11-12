import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DecisionService } from './services/decision.service';
import { GoalService } from './services/goal.service';
import { OptionService } from './services/option.service';

import { EnsureModuleLoadedOnceGuard } from '../shared/ensureModuleLoadedOnceGuard';

@NgModule({
    imports: [CommonModule],
    declarations: [],
    exports: [CommonModule],
    providers: [DecisionService, GoalService, OptionService] // these should be singleton
})
export class CoreModule extends EnsureModuleLoadedOnceGuard {    // Ensure that CoreModule is only loaded into AppModule

    // Looks for the module in the parent injector to see if it's already been loaded (only want it loaded once)
    constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
        super(parentModule);
    }

}
