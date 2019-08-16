import { Player } from './player';
import { Championship } from './championship';
import { Guid } from "guid-typescript";

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
        public championshipFantaId:Guid
    )
    {}
}