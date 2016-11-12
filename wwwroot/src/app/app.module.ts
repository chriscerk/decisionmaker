import { NgModule } from '@angular/core';
import { UniversalModule } from 'angular2-universal';
import { Ng2BootstrapModule } from 'ng2-bootstrap';

import { app_routing } from './app.routing';
import { AppComponent } from './app.component';
import { HomeComponent } from './home';
import { DecidingModule } from './deciding';
import { CoreModule }   from './core/core.module';
import { SharedModule } from './shared/shared.module';

import '../styles.scss';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent
    ],
    imports: [
        UniversalModule,
        Ng2BootstrapModule,
        app_routing,
        CoreModule,
        DecidingModule,
        SharedModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
