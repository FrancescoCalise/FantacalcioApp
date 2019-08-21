import { Team } from './team';
import { Guid } from 'guid-typescript';

export interface Player {
  id: number;
  name: string;
  role: string;
  averageFv: number;
  startValue: number;
  currentValue: number;
  soldValue: number;
  teamFantaId: string;
  teamReal: string;


}

export class PlayerClass {
  constructor(
    public id: number,
    public name: string,
    public role: string,
    public averageFv: number,
    public startValue: number,
    public currentValue: number,
    public soldValue: number,
    public teamFantaId?: Guid,
    public teamReal?: string,
  ) { }
}

export class AddPlayer {
  constructor(
    public id: number,
    public soldValue: number,
    public teamFantaId: string,
  ) { }
}

