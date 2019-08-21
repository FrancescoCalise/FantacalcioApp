import { Team } from './team';
import { Guid } from 'guid-typescript';

export interface Championship {

    id: Guid;
    name: string;
    isComplete?: boolean;
    anno: string;
    squadre?: Team[];
}

export class ChampionshipClass {
    constructor(
        public name: string,
        public anno: string,
    ) {}
}
