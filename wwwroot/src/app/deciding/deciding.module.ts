import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ng2BootstrapModule } from 'ng2-bootstrap';
import { MdlModule } from 'angular2-mdl';

import { DecidingRoutingModule } from './deciding-routing.module';
import { DecidingComponent } from './deciding.component';
import { StartDecidingComponent } from './startDeciding.component';
import { EvaluatingGoalsComponent } from './evaluatingGoals.component';
import { ConsideringOptionsComponent } from './consideringOptions.component';
import { ResolutionComponent } from './resolution.component';

@NgModule({
    declarations: [
        DecidingComponent,
        StartDecidingComponent,
        EvaluatingGoalsComponent,
        ConsideringOptionsComponent,
        ResolutionComponent
    ],
    imports: [
        CommonModule,
        MdlModule,
        Ng2BootstrapModule,
        DecidingRoutingModule,
    ],
    providers: []
})
export class DecidingModule { }
