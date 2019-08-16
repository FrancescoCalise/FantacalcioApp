import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Player } from './model/player';
import { ChampionshipClass, Championship } from './model/championship';
import { environment } from '../../environments/environment';
import { TeamClass } from './model/team';

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
    console.log(this.endPoint)
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
  
}
