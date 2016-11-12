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

export interface IRouting {
    routes: ModuleWithProviders,
    components: any[]
}