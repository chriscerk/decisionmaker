import { NgModule } from '@angular/core';
import { UniversalModule } from 'angular2-universal';
import { Ng2BootstrapModule } from 'ng2-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home';
import { EvaluationComponent } from './evaluation';
import { CoreModule }   from './core/core.module';

import '../styles.scss';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        EvaluationComponent
    ],
    imports: [
        UniversalModule,
        Ng2BootstrapModule,
        AppRoutingModule,
        CoreModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
