import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Player } from './model/player';
import { ChampionshipClass } from './model/championship';
import { JsonPipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})

// SERVICE PER LA GESTIONE DELLE API AL SERVER
// TODO: DIVIDERE I SERVER PER LE VARIE CATEGORIE DELLE CHIAMATE
export class ApiService {
  private endPoint = 'http://localhost:1000/api/';
  public Player:Player[];
 // Http Headers
 httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}
  constructor(private http: HttpClient) {}

  // Funzione Get
  allPlayers(): Observable<Player[]> {
    return this.http
      .get<Player[]>(this.endPoint + 'player')
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse): Observable<any> {
    return throwError(error);
  }


  // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
  // FUNZIONE per Aadmin

  /* queryExpenseReports(userID?, stato?): Observable<any[]> {
    return this.http
      .get<any[]>(
        this.endPoint + 'expense/query/' + userID + '/' + stato
      )
      .pipe(catchError(this.handleError));
  } */

  addChampionship(nome, anno) {
    debugger
    var data = new ChampionshipClass(nome,anno);
    return this.http
      .post(this.endPoint + 'championship/addChampionship', data, this.httpOptions)
      .pipe(catchError(this.handleError));
  }
}
