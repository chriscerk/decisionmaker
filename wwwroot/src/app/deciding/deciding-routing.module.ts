import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { DecidingComponent }   from './deciding.component';
import { StartDecidingComponent } from './startDeciding.component';
import { EvaluatingGoalsComponent } from './evaluatingGoals.component';
import { ConsideringOptionsComponent } from './consideringOptions.component';
import { ResolutionComponent } from './resolution.component';

const routes: Routes = [
    {
        path: '',
        component: DecidingComponent,
        children: [
            { path: 'start-deciding', component: StartDecidingComponent },
            { path: 'evaluating-goals', component: EvaluatingGoalsComponent },
            { path: 'considering-options', component: ConsideringOptionsComponent },
            { path: 'resolution', component: ResolutionComponent }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class DecidingRoutingModule { }

