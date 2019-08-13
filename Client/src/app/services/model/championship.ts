import { Team } from './team';

export interface Championship {

    id:string,
    name:string,
    isComplete:boolean,
    anno:string,
    squadre : Team[]
}