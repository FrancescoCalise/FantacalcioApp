import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Player, addPlayer } from './model/player';
import { ChampionshipClass, Championship } from './model/championship';
import { environment } from '../../environments/environment';
import { TeamClass, Team } from './model/team';

@Injectable({
  providedIn: 'root'
})

// SERVICE PER LA GESTIONE DELLE API AL SERVER
// TODO: DIVIDERE I SERVER PER LE VARIE CATEGORIE DELLE CHIAMATE
export class ApiService {
  private endPoint = environment.api;
  public Player:Player[];
 // Http Headers
 httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}
  constructor(private http: HttpClient) {
    this.allPlayers().subscribe(
      (data: Player[]) => {
        console.log('addPlayer')
        localStorage.setItem('Player', JSON.stringify(data));
      },
      (err) => { 
        
       }
    );
    return;
  }

  // Funzione Get
  allPlayers(): Observable<Player[]> {
    return this.http
      .get<Player[]>(this.endPoint + 'player')
      .pipe(catchError(this.handleError));
  }
  allChampionship(): Observable<Championship[]> {
    return this.http
      .get<Championship[]>(this.endPoint + 'championship/getAll')
      .pipe(catchError(this.handleError));
  }
  allTeam(): Observable<Team[]> {
    return this.http
      .get<Team[]>(this.endPoint + 'team/getAll')
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse): Observable<any> {
    return throwError(error);
  }


  // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
  // FUNZIONE per Admin

  addChampionship(nome, anno) {
    var data = new ChampionshipClass(nome,anno);
    return this.http
      .post(this.endPoint + 'championship/addChampionship', data, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  addTeam(nome, user,championship) {
    var data = new TeamClass(nome,user,championship);
    return this.http
      .post(this.endPoint + 'team/addTeam', data, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

   // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
  // FUNZIONE per User
  addPlayerInTeam(id, value,teamid) {
    var data = new addPlayer(id,value,teamid);
    return this.http
      .post(this.endPoint + 'player/addPlayerInTeam', data, this.httpOptions)
      .pipe(catchError(this.handleError));
  }
}
