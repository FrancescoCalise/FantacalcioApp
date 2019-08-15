import { Team } from './team';

export interface Player {
    id: number,
    name:string,
    role:string,
    averageFv:number,
    startValue:number,
    currentValue:number,
    soldValue:number,
    fantaTeam?:Team,
    team?: string,
    

}

export class PlayerClass {
    constructor(
   public id: number,
   public name:string,
   public role:string,
   public averageFv:number,
   public startValue:number,
   public currentValue:number,
   public soldValue:number,
   public fantaTeam?:Team,
   public team?: string,
    )
    {}
}

