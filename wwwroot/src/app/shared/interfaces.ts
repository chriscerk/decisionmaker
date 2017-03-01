import { ModuleWithProviders } from '@angular/core';

export interface IGoal {
    id: string;
    name: string;
    description: string;
    rank: string;
}

export interface IOption {
    id: string;
    name: string;
    metGoals: string[];
    description: string;
    positiveAttributes: string;
    negativeAttributes: string;
    notes: string;
}

export interface IDecision {
    id: string;
    name: string;
    description: string;
    goals: IGoal[];
    options: IOption[];
    results: string;
}

export class Decision implements IDecision {
    id: string;
    name: string;
    description: string;
    goals: IGoal[];
    options: IOption[];
    results: string;   
}

export interface IRouting {
    routes: ModuleWithProviders,
    components: any[]
}


export interface ISignalRMessage {
    MatchId: number;
    Text: string;
    CreatedAt: Date;
}

export interface DecisionSignalR extends SignalR {
    broadcaster: DecisionProxy;
}

export interface DecisionProxy {
    client: DecisionClient;
    server: DecisionServer;
}

export interface DecisionClient {
    setConnectionId: (id: string) => void;
    updateSignalRMessage: (message: ISignalRMessage) => void;
    updateDecision: (decision: IDecision) => void;
    addDecision: (decision: IDecision) => void;
    addMessage: (message: string) => void;
}

export interface DecisionServer {
    subscribe(decisionId: number): void;
    unsubscribe(decisionId: number): void;
}

export enum SignalRConnectionStatus {
    Connected = 1,
    Disconnected = 2,
    Error = 3
}
