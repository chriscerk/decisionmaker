import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ng2BootstrapModule } from 'ng2-bootstrap';

import { DecidingRoutingModule } from './deciding-routing.module';
import { DecidingComponent } from './deciding.component';
import { EvaluatingGoalsComponent } from './evaluatingGoals.component';
import { ConsideringOptionsComponent } from './consideringOptions.component';
import { ResolutionComponent } from './resolution.component';

@NgModule({
    declarations: [
        DecidingComponent,
        EvaluatingGoalsComponent,
        ConsideringOptionsComponent,
        ResolutionComponent
    ],
    imports: [
        CommonModule,
        Ng2BootstrapModule,
        DecidingRoutingModule
    ],
    providers: [
    ]
})
export class DecidingModule { }
