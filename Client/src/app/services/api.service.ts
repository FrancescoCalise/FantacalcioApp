import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Player } from './model/player';

@Injectable({
  providedIn: 'root'
})

// SERVICE PER LA GESTIONE DELLE API AL SERVER
// TODO: DIVIDERE I SERVER PER LE VARIE CATEGORIE DELLE CHIAMATE
export class ApiService {
  private endPoint = 'http://localhost:1000/api/';
  public Player:Player[];

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
  // FUNZIONE PER NOTE SPESA

  queryExpenseReports(userID?, stato?): Observable<any[]> {
    return this.http
      .get<any[]>(
        this.endPoint + 'expense/query/' + userID + '/' + stato
      )
      .pipe(catchError(this.handleError));
  }
  SetStatusExpensNoteReport(reportId, stato) {
    return this.http
      .post(this.endPoint + 'expense/save/status/' + reportId + '/' + stato, [])
      .pipe(catchError(this.handleError));
  }
}
