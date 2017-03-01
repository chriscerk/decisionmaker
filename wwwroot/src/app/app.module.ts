import { NgModule } from '@angular/core';
import { Ng2BootstrapModule } from 'ng2-bootstrap';
import { UniversalModule } from 'angular2-universal';
import { MdlModule } from 'angular2-mdl';

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
        app_routing,
        CoreModule,
        DecidingModule,
        SharedModule,
        Ng2BootstrapModule,
        MdlModule,
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
