import { Player } from './player';
import { Championship } from './championship';

export interface Team {
    
    id: string,
    name: string,
    user:string,
    anno:string,
    giocatori: Player[],
    fantaMilioni:number,
    championship:Championship
}