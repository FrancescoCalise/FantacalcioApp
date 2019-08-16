import { Player } from './player';
import { Championship } from './championship';

export interface Team {
    
    id: string,
    name: string,
    user:string,
    giocatori: Player[],
    fantaMilioni:number,
    championship:Championship
}

export class TeamClass {
    constructor(
        public name:string,
        public user:string,
        public championship:Championship
    )
    {}
}