import { isBrowser } from 'angular2-universal';

// TODO: Use @types to reference JQuery and readd Protractor
// when https://github.com/angular/angular/issues/4507 is resolved.

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Observable } from  'rxjs/Observable';
import { Subject } from  'rxjs/Subject';

import {
    ISignalRMessage,
    SignalRConnectionStatus,
    DecisionServer,
    DecisionSignalR } from '../../shared/interfaces';

@Injectable()
export class SignalRService {
    currentState = SignalRConnectionStatus.Disconnected;

    connectionState: Observable<SignalRConnectionStatus>;
    setConnectionId: Observable<string>;
    updateSignalRMessage: Observable<ISignalRMessage>;

    private connectionStateSubject = new Subject<SignalRConnectionStatus>();
    private setConnectionIdSubject = new Subject<string>();
    private updateSignalRMessageSubject = new Subject<ISignalRMessage>();

    private server: DecisionServer;

    constructor(private http: Http) {
        // TODO: SignalR Fix
        // this.connectionState = this.connectionStateSubject.asObservable();
        // this.setConnectionId = this.setConnectionIdSubject.asObservable();
        // this.updateSignalRMessage = this.updateSignalRMessageSubject.asObservable();
    }

    start(debug: boolean): Observable<SignalRConnectionStatus> {

        if (isBrowser) {
            console.log('Starting SignalR service in browser');
        }

        // $.connection.hub.logging = debug;

        let connection = <DecisionSignalR>$.connection;
        let decisionHub = connection.broadcaster;
        this.server = decisionHub.server;

        decisionHub.client.setConnectionId = id => this.onSetConnectionId(id);
        decisionHub.client.updateSignalRMessage = SignalRMessage => this.onAddSignalRMessage(SignalRMessage);

        $.connection.hub.start()
            .done(response => this.setConnectionState(SignalRConnectionStatus.Connected))
            .fail(error => this.connectionStateSubject.error(error));

        return this.connectionState;
    }

    private setConnectionState(connectionState: SignalRConnectionStatus) {
        console.log('connection state changed to ' + connectionState);
        this.currentState = connectionState;
        this.connectionStateSubject.next(connectionState);
    }

    private onSetConnectionId(id: string) {
        this.setConnectionIdSubject.next(id);
    }

    private onAddSignalRMessage(message: ISignalRMessage) {
        this.updateSignalRMessageSubject.next(message);
    }

    public subscribeToDecision(matchId: number) {
        this.server.subscribe(matchId);
    }

    public unsubscribeFromDecision(matchId: number) {
        this.server.unsubscribe(matchId);
    }
}
