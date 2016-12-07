import { NgModule, Optional, SkipSelf, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DecisionApiService } from './services/decision.service';
import { GoalApiService } from './services/goal.service';
import { OptionApiService } from './services/option.service';
import { SignalRService } from './services/SignalR.service';

import { DecidingService } from '../deciding/shared/deciding.service';

import { EnsureModuleLoadedOnceGuard } from '../shared/ensureModuleLoadedOnceGuard';

@NgModule({
    imports: [CommonModule],
    declarations: [],
    exports: [CommonModule],
    providers: [SignalRService, DecisionApiService, GoalApiService, OptionApiService, DecidingService] // these should be singleton
})
export class CoreModule extends EnsureModuleLoadedOnceGuard implements OnInit {    // Ensure that CoreModule is only loaded into AppModule

    // Looks for the module in the parent injector to see if it's already been loaded (only want it loaded once)
    constructor(private signalRService: SignalRService, @Optional() @SkipSelf() parentModule: CoreModule) {
        super(parentModule);
    }

    ngOnInit() {
        this.signalRService.start(true)
            .subscribe(
                null,
                error => console.log('Error starting SignalR: ' + error));
    }

}


