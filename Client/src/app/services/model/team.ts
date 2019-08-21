import { Guid } from 'guid-typescript';

export interface Team {

  id: string;
  name: string;
  user: string;
  giocatori: number;
  fantaMilioni: number;
  championshipFantaId: Guid;
}

export class TeamClass {
  constructor(
    public name: string,
    public user: string,
    public championshipFantaId: Guid
  ) { }
}
