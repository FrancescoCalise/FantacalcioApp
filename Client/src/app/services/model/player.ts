import { Team } from './team';

export interface Player {
    id: number,
    name:string,
    role:string,
    averageFv:number,
    startValue:number,
    currentValue:number,
    soldValue:number,
    fantaTeam:Team,
    team: string,
    

}