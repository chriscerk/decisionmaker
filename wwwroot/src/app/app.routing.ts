import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home';

const app_routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'deciding', loadChildren: './deciding/deciding.module#DecidingModule' },
    { path: 'about', loadChildren: './about/about.module#AboutModule' },
    { path: '**', redirectTo: 'home' }
];

export const app_routing = RouterModule.forRoot(app_routes);
