import { Team } from './team';

export interface Championship {

    id: string;
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
