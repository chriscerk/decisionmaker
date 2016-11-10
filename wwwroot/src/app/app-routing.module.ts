import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { EvaluationComponent } from './evaluation';

const routes: Routes = [
    { path: '', redirectTo: 'evaluation', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'evaluation', component: EvaluationComponent },
    { path: 'about', loadChildren: './about/about.module#AboutModule' },
    { path: '**', redirectTo: 'home' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
