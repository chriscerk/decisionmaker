import { Component, OnInit, Input } from '@angular/core';

import { ISignalRMessage } from '../shared/interfaces';
import { SignalRService } from '../core/services/SignalR.service';

@Component({
    templateUrl: './about.component.html'
})
export class AboutComponent implements OnInit {

    @Input() messages: ISignalRMessage;

    myMessage: ISignalRMessage;

    constructor(private signalRService: SignalRService) { }

    ngOnInit() {
        // let self = this;
        console.log('About Component Initialized');

        // TODO: SignalR Fix
        // self.signalRService.updateSignalRMessage.subscribe(
        //    message => {
        //        console.log('received..');
        //        console.log(message);
        //        this.myMessage = message;
        //    }
        // );
    }
}
