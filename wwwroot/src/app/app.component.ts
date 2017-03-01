import { Component, OnInit } from '@angular/core';
import { isBrowser } from 'angular2-universal';

import { SignalRService } from './core/services/SignalR.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    providers: [SignalRService]
})
export class AppComponent implements OnInit {

    constructor(private service: SignalRService) { }

    ngOnInit() {
        if (isBrowser) {
            //TODO: SignalR Fix
            //console.log("Starting SignalR service in browser");
            //this.service.start(true).subscribe(
            //    null,
            //    error => console.log('Error on init: ' + error));
        }
    }
}
